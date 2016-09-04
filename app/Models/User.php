<?php

namespace OneRocketRoad\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname', 'lastname', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function articles() {
        $this->hasMany(Article::class);
    }

    public function drafts() {
        $this->hasMany(Draft::class);
    }

    /**
     * Gets the concatenation of the first name and last name of the user, if available,
     * otherwise, returns the first name.
     *
     * @return string
     */
    public function getFullnameAttribute() {
        if ($this->lastname == null) {
            return $this->firstname;
        }
        return $this->firstname . " " . $this->lastname;
    }
}
