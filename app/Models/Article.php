<?php

namespace OneRocketRoad\Models;

class Article extends OneRocketRoadModel
{
    protected $table = 'articles';

    public function author() {
        return $this->belongsTo(User::class);
    }

    public function hero() {
        return $this->belongsTo(Image::class, 'hero_id');
    }
}
