<?php

namespace Database\Seeders;

use Database\Seeders\Geo\CurrencySeeder;
use Database\Seeders\Geo\MaSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
        ]);
    }
}
