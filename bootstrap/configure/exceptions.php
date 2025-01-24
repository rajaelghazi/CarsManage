<?php

use Illuminate\Foundation\Configuration\Exceptions;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

return function (Exceptions $exceptions) {
	$exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
		$statusCode = $response->getStatusCode();
		$allowedStatuses = in_array($statusCode, [500, 503, 419, 404, 403, 401]);
		$isProduction = app()->environment(['production']);
		$isInDebugMode = app()->hasDebugModeEnabled();

		if ((!$isInDebugMode || $isProduction) && $allowedStatuses) {
			return Inertia::render('error', ['status' => $statusCode])
				->toResponse($request)
				->setStatusCode($statusCode);
		}

		return $response;
	});
};
