<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Harley',
            'email' => 'harley@test.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now()
        ]);
    }
}
