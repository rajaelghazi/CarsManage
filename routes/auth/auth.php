<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\Verify\IndexController;
use App\Http\Controllers\Auth\Login\SignOutController;
use App\Http\Controllers\Auth\Verify\ResendController;
use App\Http\Controllers\Auth\Verify\VerifyController;

Route::get('/email/verify', IndexController::class)
	->name('verification.notice');

Route::post('/email/resend', ResendController::class)
	->name('verification.send');

Route::get('email/verify/{id}/{hash}', VerifyController::class)
	->middleware('signed')->name('verification.verify');

Route::post('/logout', SignOutController::class)
	->name('logout');