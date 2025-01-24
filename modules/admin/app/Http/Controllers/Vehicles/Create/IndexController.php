<?php

namespace Modules\Admin\Http\Controllers\Vehicles\Create;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->modal('admin::vehicles/manage/create', [
            'vehicle' => []
        ])->baseRoute('admin.vehicle.index');
    }
}
