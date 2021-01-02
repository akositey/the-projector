<?php

namespace App\Http\Controllers;

use App\Models\Person;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectAssignmentController extends Controller
{
    /**
     * for assigning Persons to a Project
     * @param Request $request
     * @param Project $project
     */
    public function edit(Project $project)
    {
        $assignedPersonsIDs = $project->persons->pluck('id')->toArray();
        return Inertia::render('Assignments/EditPersonsAssigned', [
            'project' => $project,
            'assignedPersons' => $project->persons,
            'availablePersons' => Person::notIn($assignedPersonsIDs)
        ]);
    }

    /**
     * @param Project $project
     * @param Person  $person
     */
    public function store(Request $request, Project $project)
    {
        $project->persons()->attach($request->person_id, ['created_at' => now()]);
        return redirect(route('projects.assignments.edit', $project));
    }

    /**
     * @param Request $request
     * @param Project $project
     */
    public function destroy(Project $project, Person $person)
    {
        if ($person->id) {
            $project->persons()->detach($person->id);
        }
        return redirect(route('projects.assignments.edit', $project));
    }
}
