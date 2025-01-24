<?php

namespace Modules\Admin\Http\Controllers\Vehicles\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request, $vehicle)
    {
        return $this->modal('admin::vehicles/manage/edit', [
            'vehicle' => []
        ])->baseRoute('admin.vehicle.index', compact('vehicle'));
    }
}
