<?php

namespace Modules\Admin\Http\Controllers\Payments\Create;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->modal('admin::payments/manage/create', [
            'payment' => []
        ])->baseRoute('admin.payment.index');
    }
}
