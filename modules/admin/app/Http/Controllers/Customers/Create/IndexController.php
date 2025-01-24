<?php

namespace Modules\Admin\Http\Controllers\Customers\Create;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->modal('admin::customers/create', [
            'customer' => []
        ])->baseRoute('admin.customer.index');
    }
}
