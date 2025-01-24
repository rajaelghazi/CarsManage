<?php

namespace Modules\Admin\Http\Controllers\Vehicles;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->view('admin::vehicles/index', [
            'vehicle' => [] 
        ]);
    }
}
