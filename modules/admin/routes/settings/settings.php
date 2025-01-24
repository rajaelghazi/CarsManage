<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\Settings\IndexController;

Route::prefix('settings')->group(function() {
	Route::get('/', IndexController::class)->name('settings.index');
});