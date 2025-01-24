<?php

namespace Modules\Admin\Http\Controllers\Reservations\Create;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->modal('admin::reservations/manage/create', [
            'reservation' => []
        ])->baseRoute('admin.reservation.index');
    }
}
