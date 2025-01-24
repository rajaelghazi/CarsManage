<?php

namespace Modules\Admin\Http\Controllers\Payments\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request, $payment)
    {
        return $this->modal('admin::payments/manage/edit', [
            'payment' => []
        ])->baseRoute('admin.payment.index', compact('payment'));
    }
}
