<?php

namespace App\Http\Controllers;

use App\Models\Person;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssignmentController extends Controller
{
    /**
     * for assigning Persons to a Project
     * @param Request $request
     * @param Project $project
     */
    public function editPersons(Project $project)
    {
        return Inertia::render('Assignments/EditPersons', [
            'project' => $project,
            'assignedPersons' => $project->persons,
            'availablePersons' => Person::whereNotIn('id', $project->persons->pluck('id')->toArray())->get()
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
