<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlavorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("flavors", function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name',50);
                $table->string('feature_intro',280)->nullable();
                $table->integer('image_id')->nullable();
                $table->string('category',50);
                $table->string('search_keyword',280)->nullable();
                $table->string('select_type',50)->nullable();
                $table->timestamps();
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("flavors");
    }
}
