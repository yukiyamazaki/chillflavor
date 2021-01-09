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

        if(isset($flavors_Obj['tastes'])){
            $flavors_taste = $flavors_Obj['tastes'];
            foreach($flavors_taste as $flavor_taste){
                $flavors_idList= Flavor::where('taste',$flavor_taste)->select('id')->get();
                foreach($flavors_idList as $flavor_idList){
                    $flavors_ununique[] = strval($flavor_idList['id']);
                }
                $flavors_ids = array_unique($flavors_ununique);
            }
        }
        if(isset($flavors_Obj['types'])){
            $flavors_types = $flavors_Obj['types'];
            foreach($flavors_types as $flavor_type){
                $flavors_idList= Flavor::where('select_type',$flavor_type)->select('id')->get();
                
                foreach($flavors_idList as $flavor_idList){
                    $flavors_ununique[] = strval($flavor_idList['id']);
                }
                $flavors_ids = array_unique($flavors_ununique);
            }
        }
        if(isset($flavors_Obj['categories'])){
            $flavors_categories = $flavors_Obj['categories'];
            foreach($flavors_idList as $flavor_idList){
                $flavors_ununique[] = strval($flavor_idList['id']);
            }
            $flavors_ids = array_unique($flavors_ununique);
        }
        $flavors = Flavor::whereIn('id',$flavors_ids)->orderby('id','desc')->get();

        return response()->json(['flavors' => $flavors]);
    }
});


//フレイバー詳細
Route::get('/Flavor',function (Request $request){
    //テストでid=2
    $flavor = Flavor::where('id',4)->first();
    return response()->json(['flavor' => $flavor]);
});

