<?php

namespace App\Http\Controllers\Auth\Verify;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class IndexController extends Controller
{
    public function __invoke(): Response | RedirectResponse
    {
        if ($this->user()->hasVerifiedEmail()) {
            $business = $this->business();
            session()->put('auth.business', $business->id);
    
            return to_route("{$business->type->alias()}.dashboard", $business->slug);
        }

        return $this->view('auth/verify', [
            'status' => session('verification.status')
        ]);   
    }
}
