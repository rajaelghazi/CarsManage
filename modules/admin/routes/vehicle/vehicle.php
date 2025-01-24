<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\Vehicles\Create\IndexController as CreateVehicle;
use Modules\Admin\Http\Controllers\Vehicles\Create\StoreController;
use Modules\Admin\Http\Controllers\Vehicles\Edit\IndexController as EditController;
use Modules\Admin\Http\Controllers\Vehicles\Details\IndexController as DetailsController;
use Modules\Admin\Http\Controllers\Vehicles\IndexController;

Route::prefix('vehicle')->group(function() {
	Route::get('/', IndexController::class)->name('vehicle.index');
	Route::get('/create', CreateVehicle::class)->name('vehicle.create');
	Route::post('/create', StoreController::class)->name('vehicle.store');
	Route::get('/edit/{vehicle}', EditController::class)->name('vehicle.edit');
	Route::get('/details/{vehicle}', DetailsController::class)->name('vehicle.details');
});