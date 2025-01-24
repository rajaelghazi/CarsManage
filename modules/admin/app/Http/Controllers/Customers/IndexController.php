<?php

namespace Modules\Admin\Http\Controllers\Customers;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->view('admin::customers/index', [
            'customers' => [] 
        ]);
    }
}
