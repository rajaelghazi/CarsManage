<?php

namespace App\Http\Controllers\Auth\Password\Reset;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        return $this->view('auth/password/reset', [
            'email' => $request->email,
            'token' => $request->route('token')
        ]);
    }
}
