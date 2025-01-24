<?php

namespace App\Http\Controllers\Auth\Verify;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\EmailVerificationRequest;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;

class VerifyController extends Controller
{
    public function __invoke(EmailVerificationRequest $request)
    {
        $user = $request->user();
        $business = $request->business();

        if ($user->hasVerifiedEmail()) {
            session()->put('auth.business', $business->id);
            return to_route("{$business->type->alias()}.dashboard", $business->slug);
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        session()->put('auth.business', $business->id);
        return to_route("{$business->type->alias()}.dashboard", $business->slug);
    }
}
