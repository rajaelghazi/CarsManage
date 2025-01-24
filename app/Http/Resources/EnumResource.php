<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EnumResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'value' => $this->value,
            'label' => $this->label(),
            'color' => $this->when(
                method_exists($this->resource, 'color'), fn() => $this->color()
            ),
        ];
    }
}
