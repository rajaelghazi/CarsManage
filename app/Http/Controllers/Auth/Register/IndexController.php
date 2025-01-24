<?php

namespace App\Http\Controllers\Auth\Register;

use App\Http\Controllers\Controller;
use Inertia\Response;

class IndexController extends Controller
{
    public function __invoke(): Response
    {
        return $this->view('auth/register');   
    }
}
