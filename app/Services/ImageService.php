<?php

namespace OneRocketRoad\Services;

use Illuminate\Http\UploadedFile;
use OneRocketRoad\Models\Image;

class ImageService implements ImageServiceInterface {
    protected $thumbnailCutoffSize = 1200;

    /***
     * For a given file (with image metadata), move the file to the public uploads location,
     * then resize the file if needed to create a thumbnail with a maximum size of 1200px along
     * the longest dimension. Save that file as a thumbnail.
     *
     * @param UploadedFile $file    The uploaded file to manipulate.
     * @param Image        $image   The image metadata that is used to aid the manipulation.
     */
    public function handle(UploadedFile $file, Image $image) {
        // Move the file
        $file->move(public_path('uploads/'), $image->filename);
        // Create an imagick instance
        $img = new \Imagick(public_path("uploads/{$image->filename}"));
        // Only resize the image if it's larger
        if ($img->getImageWidth() > $this->thumbnailCutoffSize || $img->getImageHeight() > $this->thumbnailCutoffSize) {
            $img->thumbnailImage($this->thumbnailCutoffSize, $this->thumbnailCutoffSize, true);
        }
        // Write the file
        $img->writeImage(public_path("uploads/{$image->thumbname}"));
    }

    public function delete(Image $image) {

    }
}