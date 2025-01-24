<?php

namespace Modules\Admin\Http\Controllers\Reservations;

use App\Http\Controllers\Controller;
use Modules\Admin\Http\Resources\ReservationResource;

class IndexController extends Controller
{
    public function __invoke()
    {
        return $this->view('admin::reservations/index', [
            'reservations' => ReservationResource::collection([
                [
                    'id' => 1,
                    'customer' => [
                        'fullname' => 'Khadija',
                        'cin' => 'JB471784',
                    ],
                    'total' => 450.00,
                    'pickup_date' => '01/01/2025',
                    'return_date' => '15/01/2025',
                    'vehicle' => [
                        'name' => 'Dacia Sandero',
                        'number' => '15000|أ|33'
                    ],
                    'created_at' => '10/10/2024',
                ],
                [
                    'id' => 2,
                    'customer' => [
                        'fullname' => 'Jane Doe',
                        'cin' => 'E00012365',
                    ],
                    'pickup_date' => '01/01/2025',
                    'return_date' => '10/01/2025',
                    'vehicle' => [
                        'name' => 'Toyota',
                        'number' => '1256|أ|33'
                    ],
                    'total' => 500.00,
                    'created_at' => '10/10/2024',
                ],
                [
                    'id' => 3,
                    'customer' => [
                        'fullname' => 'Jhon',
                        'cin' => 'E10236984',
                    ],
                    'total' => 1000.00,
                    'pickup_date' => '15/01/2025',
                    'return_date' => '20/01/2025',
                    'vehicle' => [
                        'name' => 'Dacia Sandero',
                        'number' => '15000|أ|33'
                    ],
                    'created_at' => '10/10/2024',
                ]
            ])
        ]);
    }
}
