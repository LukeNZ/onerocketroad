<?php

namespace OneRocketRoad\Providers;

use Illuminate\Support\ServiceProvider;
use OneRocketRoad\Services\ImageService;
use OneRocketRoad\Services\ImageServiceInterface;
use OneRocketRoad\Stores\ArticleStore;
use OneRocketRoad\Stores\ArticleStoreInterface;
use OneRocketRoad\Stores\DraftStore;
use OneRocketRoad\Stores\DraftStoreInterface;
use OneRocketRoad\Stores\ImageStore;
use OneRocketRoad\Stores\ImageStoreInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(DraftStoreInterface::class, DraftStore::class);
        $this->app->bind(ArticleStoreInterface::class, ArticleStore::class);
        $this->app->bind(ImageStoreInterface::class, ImageStore::class);

        $this->app->bind(ImageServiceInterface::class, ImageService::class);
    }
}
