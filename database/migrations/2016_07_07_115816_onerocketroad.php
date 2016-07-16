<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class Onerocketroad extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema create
        if (!Schema::hasTable('users')) {
            Schema::create('users', function(Blueprint $table) {
                $table->increments('id');
                $table->string('firstname');
                $table->string('lastname');
                $table->string('email');
                $table->string('password');
                $table->string('twitter');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('articles')) {
            Schema::create('articles', function(Blueprint $table) {
                $table->increments('id');
                $table->string('title');
                $table->text('body');
                $table->string('summary')->nullable();
                $table->integer('author_id')->unsigned()->nullable();
                $table->string('author_name');
                $table->integer('hero_id')->unsigned()->nullable();
                $table->dateTime('published_at')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('drafts')) {
            Schema::create('drafts', function(Blueprint $table) {
                $table->increments('id');
                $table->string('title');
                $table->text('body');
                $table->string('summary')->nullable();
                $table->integer('author_id')->unsigned()->nullable();
                $table->string('author_name');
                $table->integer('hero_id')->unsigned()->nullable();
                $table->dateTime('due_at')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('images')) {
            Schema::create('images', function(Blueprint $table) {
                $table->increments('id');
                $table->string('filename');
                $table->string('thumbname');
                $table->string('summary');
                $table->string('attribution');
                $table->integer('size')->unsigned();
                $table->string('color')->nullable();
                $table->timestamps();
            });
        }
        if (!Schema::hasTable('tags')) {
            Schema::create('tags', function(Blueprint $table) {
                $table->increments('id');
                $table->string('key')->nullable();
                $table->string('value');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('taggables')) {
            Schema::create('taggables', function(Blueprint $table) {
                $table->increments('id');
                $table->integer('tag_id')->unsigned();
                $table->integer('taggable_id')->unsigned();
                $table->string('taggable_type');
            });
        }

        // Foreign keys
        Schema::table('articles', function(Blueprint $table) {
            $table->foreign('hero_id')->references('id')->on('images')->onDelete('restrict');
            $table->foreign('author_id')->references('id')->on('users')->onDelete('set null');
        });

        Schema::table('drafts', function(Blueprint $table) {
            $table->foreign('hero_id')->references('id')->on('images')->onDelete('restrict');
            $table->foreign('author_id')->references('id')->on('users')->onDelete('set null');
        });

        Schema::table('taggables', function(Blueprint $table) {
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Schema::drop('users');
        Schema::drop('articles');
        Schema::drop('drafts');
        Schema::drop('images');
        Schema::drop('tags');
        Schema::drop('taggables');
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }
}
