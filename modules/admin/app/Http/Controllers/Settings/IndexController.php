<?php

namespace Modules\Admin\Http\Controllers\Settings;

use Illuminate\Http\Request;
use Modules\Admin\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        return $this->view('settings');
    }
}
