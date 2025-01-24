<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\Login\IndexController;
use App\Http\Controllers\Auth\Login\SignInController;

Route::get('/', IndexController::class)
	->name('login');

Route::post('/login', SignInController::class)
	->name('login.store');