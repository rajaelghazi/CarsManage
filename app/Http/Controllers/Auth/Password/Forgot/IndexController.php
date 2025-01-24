<?php

namespace App\Http\Controllers\Auth\Password\Forgot;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->view('auth/password/forgot', [
            'status' => session('password.status')
        ]);
    }
}
