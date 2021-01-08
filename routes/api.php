<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Flavor;
use Illuminate\Support\Facades\DB;

//キーワード検索時
Route::post('/Searchflavors',function (Request $request) {
    // 全件取得パターン
    if (!$request->search_keyword) {
        // 通常パターン（created_atで降順）
        // $flavors = Flavor::orderby('created_at','desc')->get();
        // return response()->json(['flavors' => $flavors]);
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
        return "チェックボックスエラー";
    }else{
        // $flavors = $request->checkData;
        // $res = $request->checkData;
        //  $flavors = Flavor::where('select_type','王道')->get();
        //$flavors=[配列が入っているはず]
        // $flavors_taste = $request->taste;
        foreach($request->all() as $flavor){
            $flavors_taste[] = $flavor;
        }
        
        
        //$flavors_taste = ['sweet','hot'];//これはできる
        $flavors = Flavor::whereIn('taste',$flavors_taste)->get();
        

        // foreach($flavors_taste as $flavor_taste){
        // }
        
        // $flavors = Flavor::where('taste',$flavor_taste)->get();
        // $resultFlavors = Flavor

        //カラム夫々からIDを取得→ダブリ無し
        // 取得したidを元にcreated_at降順で取得

        return response()->json(['flavors' => $flavors]);
    }
});


//フレイバー詳細
Route::get('/Flavor',function (Request $request){
    //テストでid=2
    $flavor = Flavor::where('id',4)->first();
    return response()->json(['flavor' => $flavor]);
});

