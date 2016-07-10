<?php

namespace OneRocketRoad\Providers;

use Illuminate\Support\ServiceProvider;
use OneRocketRoad\Stores\ArticleStore;
use OneRocketRoad\Stores\ArticleStoreInterface;
use OneRocketRoad\Stores\DraftStore;
use OneRocketRoad\Stores\DraftStoreInterface;

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
    }
}
