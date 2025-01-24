<?php

namespace App\Base\Eloquent;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model as EloquentModel;
use Illuminate\Support\Facades\DB;

class Model extends EloquentModel
{
    protected $quarded = ['id'];

    public function scopeBetween(Builder $builder, $from, $to): void
    {
        if (is_null($from) && is_null($to)) {
            return;
        }

        $createdAt = $builder->getModel()
            ->getQualifiedCreatedAtColumn();

        $builder->when(
            $from == $to,
            fn ($q) => $q->whereDate($createdAt, $from),
            fn ($q) => $q->whereBetween(DB::raw("DATE($createdAt)"), [$from, $to])
        );
    }

    public function dateForHuman(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->created_at?->format('D Y-m-d H:s')
        );
    }

	protected static function booted()
	{
		static::addGlobalScope('latest', function ($builder) {
            $createdAt = $builder->getModel()->getQualifiedCreatedAtColumn();
			$builder->orderBy($createdAt, 'desc');
		});
	}
}
