<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    require_once base_path("routes/auth/auth.php");
});

Route::middleware('guest')->group(function () {
    require_once base_path("routes/guest/login.php");
    require_once base_path("routes/guest/register.php");
    require_once base_path("routes/guest/passwords/forgot.php");
    require_once base_path("routes/guest/passwords/reset.php");
});
