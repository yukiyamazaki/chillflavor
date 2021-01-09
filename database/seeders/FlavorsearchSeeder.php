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
                'image_id' => '11111',
                'taste' =>'sweet',
                'category' =>'fruit',
                'search_keyword' => 'レモンremonfruit',
                'select_type' => 'main',
            ],
            [
                'name' => 'オレンジ',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => '22222',
                'taste' =>'sweet',
                'category' =>'fruit',
                'search_keyword' => 'レモンremonfruit',
                'select_type' => 'main',
            ],
            [
                'name' => 'かぼす',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => '11111',
                'taste' =>'hot',
                'category' =>'fruit',
                'search_keyword' => 'かぼすremonfruit',
                'select_type' => 'wired',
            ],
            [
                'name' => 'いちご',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => '11111',
                'taste' =>'flesh',
                'category' =>'spices',
                'search_keyword' => 'いちごichigofruit',
                'select_type' => 'main',
            ],
            [
                'name' => 'いちご',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => '11111',
                'taste' =>'flesh',
                'category' =>'spices',
                'search_keyword' => 'いちごichigofruit',
                'select_type' => 'main',
            ],
            [
                'name' => 'いちご',
                'feature_intro' => '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
                'image_id' => '11111',
                'taste' =>'flesh',
                'category' =>'other',
                'search_keyword' => 'いちごichigofruit',
                'select_type' => 'wired',
            ],
        ]);
    }
}
