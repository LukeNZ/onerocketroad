<?php

namespace OneRocketRoad\Models;

use Illuminate\Database\Eloquent\Model;

class OneRocketRoadModel extends Model {
    public function toArray() {
        $arrayed = parent::toArray();

        $return = [];
        
        foreach($arrayed as $key => $value)
        {
            $return[camel_case($key)] = $value;
        }

        return $return;
    }
}