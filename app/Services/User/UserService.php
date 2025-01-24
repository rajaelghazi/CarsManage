<?php

namespace App\Services\User;

use App\Repositories\User\UserRepository;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;

class UserService
{
    public function __construct(
        protected UserRepository $userRepository
    ){}

    public function register(array $attributes)
    {
        $attributes['password'] = bcrypt($attributes['password']);

        $user = $this->userRepository->create($attributes);
        $user->assignRole('super admin');

        event(new Registered($user));
        Auth::login($user, $remember = true);
    }
}
