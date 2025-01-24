<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\Customers\Create\IndexController as CreateCustomer;
use Modules\Admin\Http\Controllers\Customers\Create\StoreController;
use Modules\Admin\Http\Controllers\Customers\Edit\IndexController as EditController;
use Modules\Admin\Http\Controllers\Customers\Details\IndexController as DetailsController;
use Modules\Admin\Http\Controllers\Customers\IndexController;

Route::prefix('customer')->group(function() {
	Route::get('/', IndexController::class)->name('customer.index');
	Route::get('/create', CreateCustomer::class)->name('customer.create');
	Route::post('/create', StoreController::class)->name('customer.store');
	Route::get('/edit/{customer}', EditController::class)->name('customer.edit');
	Route::get('/details/{customer}', DetailsController::class)->name('customer.details');
});