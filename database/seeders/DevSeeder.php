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

            \App\Models\User::create([
                'name' => 'Chester',
                'email' => 'chester@test.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now()
            ]);

            \App\Models\Project::factory(30)->create();
            \App\Models\Person::factory(10)->create();
        }

    }
}
