<?php

namespace OneRocketRoad\Models;

class Article extends OneRocketRoadModel
{
    protected $table = 'articles';

    public function author() {
        return $this->belongsTo(User::class);
    }
}
