<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class DevSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (App::environment('local', 'testing', 'staging')) {

            \App\Models\Project::factory(30)->create();
            \App\Models\Person::factory(10)->create();
        }

    }
}
