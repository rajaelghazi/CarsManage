<?php

namespace App\Base\Eloquent;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\Pivot as EloquentPivot;

class Pivot extends EloquentPivot
{
	public function dateForHuman(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->created_at?->format('D Y/m/d H:s')
        );
    }
}