<?php

namespace Tests\Feature;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_screen_can_be_rendered()
    {
        $response = $this->get('/signin');

        $response->assertStatus(200);
    }

    public function test_users_can_authenticate_using_the_login_screen()
    {
        $user = User::factory()->create();

        $response = $this->post('/signin', [
            'email' => $user->email,
            'password' => 'password'
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

    public function test_users_can_not_authenticate_with_invalid_password()
    {
        $user = User::factory()->create();

        $this->post('/signin', [
            'email' => $user->email,
            'password' => 'wrong-password'
        ]);

        $this->assertGuest();
    }

    public function test_user_email_that_is_out_of_5_to_200_characters_should_not_be_authenticated()
    {
        $user = User::factory()->create([
            'email' => 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz@abcdefghijklmnopqrstuvwxyz.com'
        ]);

        $this->post('/signin', [
            'email' => $user->email,
            'password' => 'password'
        ]);

        $this->assertGuest();

    }

    public function test_users_with_password_less_than_7_chars_should_not_be_authenticated()
    {
        $user = User::factory()->create([
            'password' => bcrypt('123')
        ]);

        $this->post('/signin', [
            'email' => $user->email,
            'password' => '123456'
        ]);

        $this->assertGuest();
    }

    public function test_users_with_password_more_than_11_chars_should_not_be_authenticated()
    {
        $user = User::factory()->create([
            'password' => bcrypt('123456789012') //12 characters
        ]);

        $this->post('/signin', [
            'email' => $user->email,
            'password' => '123456789012'
        ]);

        $this->assertGuest();
    }

    public function test_authenticated_users_should_be_redirected()
    {
        $user = User::factory()->create();

        $response = $this->post('/signin', [
            'email' => $user->email,
            'password' => 'password'
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('projects.index'));
    }

}
