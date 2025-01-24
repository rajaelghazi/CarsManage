<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\Password\Reset\IndexController;
use App\Http\Controllers\Auth\Password\Reset\UpdateController;

Route::get('/password/reset/{token}', IndexController::class)
	->name('password.reset');

Route::post('/password/reset/update', UpdateController::class)
	->name('password.reset.update');
