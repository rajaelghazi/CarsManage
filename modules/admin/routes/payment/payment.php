<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\payments\Create\IndexController as Createpayment;
use Modules\Admin\Http\Controllers\payments\Create\StoreController;
use Modules\Admin\Http\Controllers\Payments\Edit\IndexController as EditController;
use Modules\Admin\Http\Controllers\payments\IndexController;

Route::prefix('payment')->group(function() {
	Route::get('/', IndexController::class)->name('payment.index');
	Route::get('/create', Createpayment::class)->name('payment.create');
	Route::post('/create', StoreController::class)->name('payment.store');
	Route::get('/edit/{payment}', EditController::class)->name('payment.edit');
});