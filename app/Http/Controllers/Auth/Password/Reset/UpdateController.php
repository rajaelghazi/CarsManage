<?php

namespace App\Http\Controllers\Auth\Password\Reset;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Auth;

class UpdateController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8', 'same:password_confirmation'],
            'password_confirmation' => ['required', 'min:8']
        ]);

        $status = Password::reset(
            $validated, function ($user, $password) {
                $user->password = bcrypt($password);
                $user->setRememberToken(str()->random(60));
                $user->save();

                event(new PasswordReset($user));
                Auth::login($user);
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            $business = $this->business();
            session()->put('auth.business', $business->id);

            return to_route("{$business->type->alias()}.dashboard", $business->slug);
        }

        return back()->withErrors(['email' => trans($status)]);
    }
}
