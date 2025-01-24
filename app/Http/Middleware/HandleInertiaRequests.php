<?php

namespace App\Http\Middleware;

use App\Http\Resources\Auth\BusinessResource;
use App\Http\Resources\Auth\UserResource;
use App\Http\Resources\SubscriptionResource;
use App\Models\Business\Business;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(
            parent::share($request),
            $this->authData($request),
            $this->appData($request)
        );
    }

    private function appData(Request $request)
    {
        return [
            'app' => [
                'url' => config('app.url'),
                'notification' => session('notification'),
                'locale' => app()->getLocale()
            ]
        ];
    }

    private function authData(Request $request)
    {
        $user = optional($request->user());

        return [
            'auth' => [
                'user' => UserResource::make($user)
            ]
        ];
    }
}
