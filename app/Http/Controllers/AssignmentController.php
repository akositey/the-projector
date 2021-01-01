<?php

namespace App\Http\Controllers;

use App\Models\Person;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssignmentController extends Controller
{
    /**
     * @param Request $request
     * @param Project $project
     */
    public function editPersons(Project $project)
    {

        return Inertia::render('Assignments/EditPersons', [
            'project' => $project,
            'persons' => $project->persons
        ]);
    }

    /**
     * @param Request $request
     * @param Person  $person
     */
    public function editProjects(Person $person)
    {

        return Inertia::render('Assignments/EditProjects', [
            'person' => $person,
            'projects' => $person->projects
        ]);
    }
}
