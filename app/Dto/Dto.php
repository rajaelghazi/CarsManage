<?php

namespace App\Dto;

use Illuminate\Support\Fluent;

class Dto extends Fluent
{
	public static function from(array $data): self
	{
		return new static(...$data);
	}
}