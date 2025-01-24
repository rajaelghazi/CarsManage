<?php

namespace App\Providers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\ServiceProvider;

class InertiaServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        RedirectResponse::macro('flash',  function (string $type, string $body) {
            session()->flash('notification', [
                'type' => $type,
                'body' => $body,
            ]);

            return $this;
        });

        RedirectResponse::macro('success', function (string $body) {
            return $this->flash('success', $body);
        });

        RedirectResponse::macro('error', function (string $body) {
            return $this->flash('error', $body);
        });
    }

    public function boot(): void {}
}
