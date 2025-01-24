<?php

use Illuminate\Foundation\Application;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: base_path('routes/web.php'),
        commands: base_path('routes/console.php'),
        health: '/up'
    );

$app->withMiddleware(
    require_once base_path("bootstrap/configure/middlewares.php")
);

$app->withExceptions(
    require_once base_path("bootstrap/configure/exceptions.php")
);

return $app->create();
