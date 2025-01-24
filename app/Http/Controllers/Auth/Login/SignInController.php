<?php

namespace App\Http\Controllers\Auth\Login;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;

class SignInController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
    
        if ($request->user()->hasRole('super admin')) {
            return to_route('admin.dashboard');
        }
    }
}
