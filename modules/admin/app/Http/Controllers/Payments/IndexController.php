<?php

namespace Modules\Admin\Http\Controllers\Payments;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->view('admin::payments/index', [
            'payments' => [] 
        ]);
    }
}
