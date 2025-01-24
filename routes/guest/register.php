<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\Register\IndexController;
use App\Http\Controllers\Auth\Register\StoreController;

Route::get('/register', IndexController::class)
	->name('register');

Route::post('/register', StoreController::class)
	->name('register.store');
