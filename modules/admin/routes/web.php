<?php

use Illuminate\Support\Facades\Route;

Route::group([
	'middleware' => ['web'],
	'prefix' => 'admin',
	'as' => 'admin.'
], function() {
	$basePath = 'modules/admin/routes';

	require_once base_path("$basePath/dashboard/dashboard.php");
	require_once base_path("$basePath/reservation/reservation.php");
	require_once base_path("$basePath/payment/payment.php");
	require_once base_path("$basePath/vehicle/vehicle.php");
	require_once base_path("$basePath/customer/customer.php");
	require_once base_path("$basePath/analytics/analytics.php");
	require_once base_path("$basePath/settings/settings.php");
});
