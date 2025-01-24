<?php

namespace Modules\Admin\Http\Controllers\Customers\Details;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request, $customer)
    {
        return $this->modal('admin::customers/details', [
            'customer' => []
        ])->baseRoute('admin.customer.index', compact('customer'));
    }
}
