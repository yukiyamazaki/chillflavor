<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Flavor;
use Illuminate\Support\Facades\DB;

//初期状態
Route::post('/flavors',function (Request $request) {
    // 全件取得パターン
    if (!$request) {
        // 通常パターン
        return "キーワード検索エラー";
    }
    // 絞り込みのケース
    $flavors = DB::table('flavors')->get();
    return response()->json(['flavors' => $flavors]);
});

//FlavorList
Route::post('/getFlavornames',function (Request $request){
    if(!$request){
        return "エラー";
    }

    $fruit = Flavor::where('category','fruit')->select('id','name')->get();
    $spices = Flavor::where('category','spices')->select('id','name')->get();
    $cocktail = Flavor::where('category','drink')->select('id','name')->get();
    $other = Flavor::where('category','other')->select('id','name')->get();

    $params = (object) [
        "fruits" => $fruit,
        "spices" => $spices,
        "cocktail" => $cocktail,
        "other" =>$other,
    ];

    return response()->json(['params' => $params]);

});

//FlavorList
Route::post('/getBrand',function (Request $request){
    if(!$request){
        return "エラー";
    }

    $alfakhels = Flavor::where('brand','AlFakhel')->select('id','name')->get();
    $fumaris = Flavor::where('brand','Fumari')->select('id','name')->get();
    $socialsmokes = Flavor::where('brand','Social smoke')->select('id','name')->get();
    $declouds = Flavor::where('brand','De cloud')->select('id','name')->get();
    $trifectas = Flavor::where('brand','Trifecta')->select('id','name')->get();
    $butas = Flavor::where('brand','Buta tobacco')->select('id','name')->get();
    $goldenlavas = Flavor::where('brand','Golden lavalina')->select('id','name')->get();

    $params = (object) [
        "alfakhels" => $alfakhels,
        "fumaris" => $fumaris,
        "socialsmokes" => $socialsmokes,
        "declouds" =>$declouds,
        "trifectas" =>$trifectas,
        "butas" =>$butas,
        "goldenlavas" =>$goldenlavas,
    ];

    return response()->json(['params' => $params]);

});

//キーワード検索時
Route::post('/Searchflavors',function (Request $request) {
    // 全件取得パターン
    if (!$request->search_keyword) {
        // 通常パターン
        return "キーワード検索エラー";
    }
    // 絞り込みのケース
    $res = $request->search_keyword;
    $flavors = Flavor::where('name',$res)->get();
    return response()->json(['flavors' => $flavors]);
});

//チェックボックス検索時
Route::post('/checkedFlavors',function (Request $request){
    if(!$request->all()){
        return response()->json(['flavors' => 'しっぱい']);
    }else{
        $flavors_Obj = $request->all();
        $flavors_ids = array();

        //Requestデータの有無確認
        $check_all = isset($flavors_Obj['allflavorid']);
        $check_taste = isset($flavors_Obj['tastes']);
        $check_types = isset($flavors_Obj['types']);
        $check_categories = isset($flavors_Obj['categories']);

        //flavor全データのid配列
        if($check_all){
            $allflavorid = $flavors_Obj['allflavorid'];
        }

        if($check_taste){
            $flavors_taste = $flavors_Obj['tastes'];
            foreach($flavors_taste as $flavor_taste){
                $flavors_idList= Flavor::where('taste',$flavor_taste)->select('id')->get();
                foreach($flavors_idList as $flavor_idList){
                    $uni_tasteId[] = strval($flavor_idList['id']);
                }
            }
            // 重複排除
            $ids_taste = array_unique($uni_tasteId);
        }

        if($check_types){
            $flavors_types = $flavors_Obj['types'];
            foreach($flavors_types as $flavor_type){
                $flavors_idList= Flavor::where('select_type',$flavor_type)->select('id')->get();
                foreach($flavors_idList as $flavor_idList){
                    $uni_typesId[] = strval($flavor_idList['id']);
                }
            }
            // 重複排除
            $ids_type = array_unique($uni_typesId);
        }

        if($check_categories){
            $flavors_categories = $flavors_Obj['categories'];
            foreach($flavors_categories as $flavors_category){
                $flavors_idList= Flavor::where('category',$flavors_category)->select('id')->get();
                foreach($flavors_idList as $flavor_idList){
                    $uni_categoryId[] = strval($flavor_idList['id']);
                }
            } 
            // 重複排除
            $ids_category = array_unique($uni_categoryId);
        }

        //指定条件の組み合わせごとの処理
        //全部選択
        if($check_taste && $check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste,$ids_type,$ids_category);
        //Only taste
        }elseif($check_taste && !$check_types && !$check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste);
        //taste & type
        }elseif($check_taste && $check_types && !$check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste,$ids_type);
        //taste & category
        }elseif($check_taste && !$check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste,$ids_category);
        //Only type
        }elseif(!$check_taste && $check_types && !$check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_type);
        //type & category
        }elseif(!$check_taste && $check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_type,$ids_category);
        //Only category
        }elseif(!$check_taste && !$check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_category);
        //選択なし
        }else{
            $flavors_ids = $allflavorid;
        }

        $flavors = Flavor::whereIn('id',$flavors_ids)->orderby('id','desc')->get();
       
        return response()->json(['flavors' => $flavors]);
    }
});

//リアルタイム件数表テスト
Route::post('/countFlavors',function (Request $request){
    if(!$request->all()){
        return response()->json(['flavors' => 'しっぱい']);
    }else{
        $flavors_Obj = $request->all();
        $flavors_ids = array();

        //Requestデータの有無確認
        $check_all = isset($flavors_Obj['allflavorid']);
        $check_taste = isset($flavors_Obj['tastes']);
        $check_types = isset($flavors_Obj['types']);
        $check_categories = isset($flavors_Obj['categories']);

        //flavor全データのid配列
        if($check_all){
            $allflavorid = $flavors_Obj['allflavorid'];
        }

        if($check_taste){
            $flavors_taste = $flavors_Obj['tastes'];
            foreach($flavors_taste as $flavor_taste){
                $flavors_idList= Flavor::where('taste',$flavor_taste)->select('id')->get();
                foreach($flavors_idList as $flavor_idList){
                    $uni_tasteId[] = strval($flavor_idList['id']);
                }
            }
            // 重複排除
            $ids_taste = array_unique($uni_tasteId);
        }

        if($check_types){
            $flavors_types = $flavors_Obj['types'];
            foreach($flavors_types as $flavor_type){
                $flavors_idList= Flavor::where('select_type',$flavor_type)->select('id')->get();
                foreach($flavors_idList as $flavor_idList){
                    $uni_typesId[] = strval($flavor_idList['id']);
                }
            }
            // 重複排除
            $ids_type = array_unique($uni_typesId);
        }

        if($check_categories){
            $flavors_categories = $flavors_Obj['categories'];
            foreach($flavors_categories as $flavors_category){
                $flavors_idList= Flavor::where('category',$flavors_category)->select('id')->get();
                foreach($flavors_idList as $flavor_idList){
                    $uni_categoryId[] = strval($flavor_idList['id']);
                }
            } 
            // 重複排除
            $ids_category = array_unique($uni_categoryId);
        }

        //指定条件の組み合わせごとの処理
        //全部選択
        if($check_taste && $check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste,$ids_type,$ids_category);
        //Only taste
        }elseif($check_taste && !$check_types && !$check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste);
        //taste & type
        }elseif($check_taste && $check_types && !$check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste,$ids_type);
        //taste & category
        }elseif($check_taste && !$check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_taste,$ids_category);
        //Only type
        }elseif(!$check_taste && $check_types && !$check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_type);
        //type & category
        }elseif(!$check_taste && $check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_type,$ids_category);
        //Only category
        }elseif(!$check_taste && !$check_types && $check_categories){
            $flavors_ids = array_intersect($allflavorid,$ids_category);
        //選択なし
        }else{
            $flavors_ids = $allflavorid;
        }

        $countflavors = Flavor::whereIn('id',$flavors_ids)->orderby('id','desc')->get();
       
        return response()->json(['countflavors' => $countflavors]);
    }
});
// Test部分

//フレイバー詳細
Route::post('/Flavor',function (Request $request){
    //id取得
    if (!$request->id) {
        // 通常パターン
        return "id取得エラー";
    }
    // id取得
    $res = $request->id;
    // idを元に情報取得
    $flavor = Flavor::where('id',$res)->first();
    return response()->json(['flavor' => $flavor]);
});

