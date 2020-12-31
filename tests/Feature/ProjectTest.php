<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProjectTest extends TestCase
{

    public function test_project_page_should_redirect_to_login_page_when_user_is_not_authenticated()
    {
        $response = $this->get(route('projects.index'));

        $response->assertRedirect(route('login'));

    }
}
