<?php

namespace App\Http\Controllers;

use App\Models\Person;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonAssignmentController extends Controller
{
    /**
     * view the page where user can assign Projects to a Person
     * @param Request $request
     * @param Person  $person
     */
    public function edit(Person $person)
    {
        $assignedProjectIDs = $person->projects->pluck('id')->toArray();
        return Inertia::render('Assignments/EditProjectsAssigned', [
            'person' => $person,
            'assignedProjects' => $person->projects,
            'availableProjects' => Project::notIn($assignedProjectIDs)
        ]);
    }

    /**
     * @param Request $request
     * @param Person  $person
     */
    public function store(Request $request, Person $person)
    {
        $person->projects()->attach($request->project_id, ['created_at' => now()]);
        return redirect(route('persons.assignments.edit', $person));
    }

    /**
     * @param Person  $person
     * @param Project $project
     */
    public function destroy(Person $person, Project $project)
    {
        if ($project->id) {
            $person->projects()->detach($project->id);
        }
        return redirect(route('persons.assignments.edit', $person));
    }
}
