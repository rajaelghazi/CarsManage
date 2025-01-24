<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\Reservations\IndexController;
use Modules\Admin\Http\Controllers\Reservations\Create\StoreController;
use Modules\Admin\Http\Controllers\Reservations\Edit\IndexController as EditController;
use Modules\Admin\Http\Controllers\Reservations\Create\IndexController as CreateReservation;
use Modules\Admin\Http\Controllers\Reservations\Details\IndexController as DetailsController;

Route::prefix('reservation')->group(function() {
	Route::get('/', IndexController::class)->name('reservation.index');
	
	Route::get('/details', DetailsController::class)->name('reservation.details');
	Route::get('/create', CreateReservation::class)->name('reservation.create');
	Route::post('/create', StoreController::class)->name('reservation.store');
	Route::get('/edit/{reservation}', EditController::class)->name('reservation.edit');
});