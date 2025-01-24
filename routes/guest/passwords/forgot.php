<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\Password\Forgot\IndexController;
use App\Http\Controllers\Auth\Password\Forgot\EmailController;

Route::get('/password/forgot', IndexController::class)
	->name('password.forgot');

Route::post('/password/forgot', EmailController::class)
	->name('password.forgot.request');