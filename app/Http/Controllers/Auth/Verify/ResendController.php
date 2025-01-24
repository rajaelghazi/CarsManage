<?php

namespace App\Http\Controllers\Auth\Verify;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResendController extends Controller
{
    public function __invoke()
    {
        $user = $this->user();
    
        if ($user->hasVerifiedEmail()) {
            $business = $this->business();
            return to_route("{$business->type->alias()}.dashboard", $business->slug);
        }

        $user->sendEmailVerificationNotification();

        return back()->with('verification.status', __('A fresh verification link has been sent to your email address.'));
    }
}
