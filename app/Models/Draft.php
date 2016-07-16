<?php

namespace OneRocketRoad\Models;

class Draft extends OneRocketRoadModel
{
    protected $table = 'drafts';

    public function author() {
        return $this->belongsTo(User::class);
    }

    public function hero() {
        return $this->belongsTo(Image::class, 'hero_id');
    }
}
