<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\Dashboard\IndexController;

Route::get('/', IndexController::class)->name('dashboard');