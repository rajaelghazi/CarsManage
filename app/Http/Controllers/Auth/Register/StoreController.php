<?php

namespace App\Http\Controllers\Auth\Register;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\User\UserService;

class StoreController extends Controller
{
    public function __construct(
        private UserService $userService
    ){}

    public function __invoke(RegisterRequest $request)
    {
        $validated = $request->validated();
        $this->userService->register($validated);
    
        return to_route('admin.dashboard');
    }
}
