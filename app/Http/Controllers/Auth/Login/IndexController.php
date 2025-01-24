<?php

namespace App\Http\Controllers\Auth\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;

class IndexController extends Controller
{
    public function __invoke(): Response
    {
        return $this->view('auth/login', [
            'test' => 'mm'
        ]);   
    }
}
