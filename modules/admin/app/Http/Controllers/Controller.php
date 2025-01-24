<?php

namespace Modules\Admin\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Inertia\{Inertia, Response};
use InertiaUI\Modal\Modal;

class Controller extends BaseController
{
    protected function view(string $view, array $props = []): Response
    {
        return Inertia::render("admin::$view/page", $props);
    }

    protected function modal(string $view, array $props = []): Modal
    {
        return Inertia::modal("admin::$view/page", $props);
    }
}