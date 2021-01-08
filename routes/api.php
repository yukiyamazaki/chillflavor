<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Flavor;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/Searchflavors',function (Request $request) {
    // 全件取得パターン
    if (!$request->name) {
        // 通常パターン（created_atで降順）
        // $flavors = Flavor::orderby('created_at','desc')->get();
        // return response()->json(['flavors' => $flavors]);
        return "エラー";
    }
    // 絞り込みのケース
    $res = $request->name;
    $flavors = Flavor::where('name',$res)->get();
    return response()->json(['flavors' => $flavors]);
});

//detailFlavorページ
Route::get('/Flavor',function (Request $request){
    //テストでid=2
    $flavor = Flavor::where('id',4)->first();
    return response()->json(['flavor' => $flavor]);
});

