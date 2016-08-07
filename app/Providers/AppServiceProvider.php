<?php

namespace OneRocketRoad\Providers;

use Illuminate\Support\ServiceProvider;
use OneRocketRoad\Services\AuthenticationService;
use OneRocketRoad\Services\AuthenticationServiceInterface;
use OneRocketRoad\Services\ImageService;
use OneRocketRoad\Services\ImageServiceInterface;
use OneRocketRoad\Stores\ArticleStore;
use OneRocketRoad\Stores\ArticleStoreInterface;
use OneRocketRoad\Stores\DraftStore;
use OneRocketRoad\Stores\DraftStoreInterface;
use OneRocketRoad\Stores\ImageStore;
use OneRocketRoad\Stores\ImageStoreInterface;
use OneRocketRoad\Stores\UserStore;
use OneRocketRoad\Stores\UserStoreInterface;

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
        // Stores
        $this->app->bind(DraftStoreInterface::class, DraftStore::class);
        $this->app->bind(ArticleStoreInterface::class, ArticleStore::class);
        $this->app->bind(ImageStoreInterface::class, ImageStore::class);
        $this->app->bind(UserStoreInterface::class, UserStore::class);

        // Services
        $this->app->bind(ImageServiceInterface::class, ImageService::class);
        $this->app->bind(AuthenticationServiceInterface::class, AuthenticationService::class);
    }
}
