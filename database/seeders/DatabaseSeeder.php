<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (App::environment('local')) {
            \App\Models\User::create([
                'name' => 'Tester',
                'email' => 'tester@test.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now()
            ]);

            \App\Models\Project::factory(30)->create();
            \App\Models\Person::factory(10)->create();
        }
    }
}
