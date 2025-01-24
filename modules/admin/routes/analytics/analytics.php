<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\Analytics\IndexController;

Route::prefix('analytics')->group(function() {
	Route::get('/', IndexController::class)->name('analytics.index');
});