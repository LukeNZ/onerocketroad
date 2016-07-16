<?php

namespace OneRocketRoad\Models;

class Image extends OneRocketRoadModel
{
    protected $table = "images";

    public function drafts() {
        return $this->hasMany(Draft::class);
    }

    public function articles() {
        return $this->hasMany(Article::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
