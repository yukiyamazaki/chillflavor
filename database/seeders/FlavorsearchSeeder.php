<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class FlavorsearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('flavors')->insert([
            [
                'name' => 'レモン',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'lemon.svg',
                'taste' =>'flesh',
                'category' =>'fruit',
                'search_keyword' => 'レモンremonfruit',
                'select_type' => 'main',
            ],
            [
                'name' => 'オレンジ',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'orange.svg',
                'taste' =>'flesh',
                'category' =>'fruit',
                'search_keyword' => 'orangeオレンジみかん',
                'select_type' => 'main',
            ],
            [
                'name' => 'かぼす',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'kabosu.svg',
                'taste' =>'flesh',
                'category' =>'fruit',
                'search_keyword' => 'kabosuかぼす',
                'select_type' => 'wired',
            ],
            [
                'name' => 'いちご',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'storvery.svg',
                'taste' =>'sweet',
                'category' =>'fruit',
                'search_keyword' => 'いちごichigofruit',
                'select_type' => 'main',
            ],
            [
                'name' => 'アーモンド',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'armondo.svg',
                'taste' =>'hot',
                'category' =>'spices',
                'search_keyword' => 'アーモンド',
                'select_type' => 'wired',
            ],
            [
                'name' => 'カクテル',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'kakuteru.svg',
                'taste' =>'flesh',
                'category' =>'drink',
                'search_keyword' => 'カクテルkakuteru',
                'select_type' => 'main',
            ],
            [
                'name' => 'ミルク',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'milk.svg',
                'taste' =>'sweet',
                'category' =>'other',
                'search_keyword' => 'ミルクmilk',
                'select_type' => 'main',
            ],
            [
                'name' => 'ピーチ',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'piech.svg',
                'taste' =>'flesh',
                'category' =>'fruit',
                'search_keyword' => 'ピーチももpiech',
                'select_type' => 'main',
            ],
            [
                'name' => 'ピザ',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'piza.svg',
                'taste' =>'hot',
                'category' =>'other',
                'search_keyword' => 'pizaピザぴざ',
                'select_type' => 'wired',
            ],
            [
                'name' => 'ローズ',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'rose.svg',
                'taste' =>'flesh',
                'category' =>'spices',
                'search_keyword' => 'roseローズはら',
                'select_type' => 'main',
            ],
            [
                'name' => 'ワイン',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => 'wine.svg',
                'taste' =>'flesh',
                'category' =>'drink',
                'search_keyword' => 'wineワイン',
                'select_type' => 'main',
            ],
        ]);
    }
}
