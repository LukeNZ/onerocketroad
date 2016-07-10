<?php

namespace OneRocketRoad\Stores;

interface ArticleStoreInterface extends StoreInterface {
    function retrieveByUrl($year, $month, $day, $slug);
}