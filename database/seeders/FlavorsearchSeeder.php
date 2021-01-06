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
                'category' =>'Fruit',
                'search_keyword' => 'レモンremonfruit',
                'select_type' => '王道',
            ],
        ]);
    }
}
