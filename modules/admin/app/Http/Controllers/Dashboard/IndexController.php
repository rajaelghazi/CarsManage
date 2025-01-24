<?php

namespace Modules\Admin\Http\Controllers\Dashboard;

use Inertia\Response;
use Modules\Admin\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke(): Response
    {
        return $this->view('dashboard');
    }
}
