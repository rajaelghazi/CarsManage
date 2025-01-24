<?php

namespace Modules\Admin\Http\Controllers\Analytics;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->view('admin::analytics/index', [
            'analytics' => [] 
        ]);
    }
}
