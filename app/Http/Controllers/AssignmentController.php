<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssignmentController extends Controller
{
    /**
     * @param Request $request
     * @param Project $project
     */
    public function edit(Request $request, Project $project)
    {

        return Inertia::render('Assignments/Show', [
            'project' => $project,
            'persons' => $project->persons
        ]);
    }
}
