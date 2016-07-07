<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Onerocketroad extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('authors', function(Blueprint $table) {
            $table->increments('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email');
            $table->string('password');
            $table->string('twitter');
            $table->timestamps();
        });

        Schema::create('articles', function(Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->integer('hero_image_id')->unsigned();
            $table->timestamps();

            $table->foreign('hero_image_id')->references('id')
                ->on('images')
                ->onDelete('restrict');
        });

        Schema::create('drafts', function(Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('images', function(Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('tags', function(Blueprint $table) {

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('authors');
        Schema::drop('articles');
        Schema::drop('drafts');
        Schema::drop('images');
    }
}
