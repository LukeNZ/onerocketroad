<?php


namespace OneRocketRoad\Services;

use Illuminate\Http\UploadedFile;
use OneRocketRoad\Models\Image;

interface ImageServiceInterface {
    function handle(UploadedFile $file, Image $image);

    function delete(Image $image);
}