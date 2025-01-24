<?php

namespace Modules\Admin\Http\Controllers\Vehicles\Details;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request, $vehicle)
    {
        return $this->modal('admin::vehicles/manage/details', [
            'vehicle' => []
        ])->baseRoute('admin.vehicle.index', compact('vehicle'));
    }
}
