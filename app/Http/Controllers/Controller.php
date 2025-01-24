<?php

namespace App\Http\Controllers;

use App\Models\Business\Business;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\{Inertia, Response};
use InertiaUI\Modal\Modal;

abstract class Controller
{
    protected function user(): User
    {
        return Auth::user();
    }

    protected function view(string $view, array $props = []): Response
    {
        return Inertia::render("$view/page", $props);
    }

    protected function modal(string $view, array $props = []): Modal
    {
        return Inertia::modal("$view/page", $props);
    }
}
