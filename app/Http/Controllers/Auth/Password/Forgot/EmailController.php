<?php

namespace App\Http\Controllers\Auth\Password\Forgot;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;

class EmailController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email', 'exists:users,email']
        ]);

        $status = Password::sendResetLink($validated);

        if ($status == Password::RESET_LINK_SENT) {
            return back()->with('password.status', trans($status));
        }
    
        return back()->withErrors(['email' => trans($status)]);
    }
}
