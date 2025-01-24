<?php

namespace Modules\Admin\Http\Controllers\Reservations\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request, $reservation)
    {
        return $this->modal('admin::reservations/manage/edit', [
            'reservation' => []
        ])->baseRoute('admin.reservation.index', compact('reservation'));
    }
}
