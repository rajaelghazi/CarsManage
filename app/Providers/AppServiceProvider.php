<?php

namespace App\Providers;

use App\Models\Business\Business;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {}

    public function boot(): void
    {
        $this->configureResources();
        $this->configureDatabase();
        $this->configureModels();
        $this->configureVite();
    }

    private function configureVite(): void
    {
        Vite::prefetch(concurrency: 3);
    }

    private function configureResources(): void
    {
        JsonResource::withoutWrapping();
    }

    private function configureModels(): void
    {
        Model::unguard();
        Model::shouldBeStrict();
    }

    private function configureDatabase(): void
    {
        DB::prohibitDestructiveCommands(
            app()->isProduction()
        );
    }
}
