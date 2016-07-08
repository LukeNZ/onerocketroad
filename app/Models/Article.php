<?php

namespace OneRocketRoad\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $table = 'articles';

    public function author() {
        return $this->belongsTo(User::class);
    }
}
