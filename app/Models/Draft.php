<?php

namespace OneRocketRoad\Models;

use Illuminate\Database\Eloquent\Model;

class Draft extends Model
{
    protected $table = 'drafts';

    public function author() {
        return $this->belongsTo(User::class);
    }
}
