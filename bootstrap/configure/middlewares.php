<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return function (Middleware $middleware) {
    $middleware->redirectUsersTo(function (Request $request) {
        if ($request->user()->hasRole('super admin')) {
            return route("admin.dashboard");
        }
    });

    $middleware->web(append: [
        HandleInertiaRequests::class,
    ]);
};