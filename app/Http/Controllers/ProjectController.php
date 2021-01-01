<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //TODO: move logic to repository/service
        $projects = Project::paginate(10)->withQueryString();
        $projects->transform(function ($project) {
            return [
                'id' => $project->id,
                'code' => $project->code,
                'name' => $project->name,
                'remarks' => $project->remarks,
                'budget' => number_format($project->budget, 2)
            ];
        });
        return Inertia::render('Projects/Index', [
            'projects' => $projects
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ProjectRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectRequest $request)
    {
        //TODO: move logic to repository/service
        $project = Project::create($request->validated());
        return redirect(route('projects.index'))->with('success', 'Successfully created new project: ' . $project->name);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project         $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project         $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\ProjectRequest $request
     * @param  \App\Models\Project               $project
     * @return \Illuminate\Http\Response
     */
    public function update(ProjectRequest $request, Project $project)
    {
        //TODO: move logic to repository/service
        $project->update($request->validated());
        return redirect(route('projects.index'))->with('success', 'Successfully updated project: ' . $project->name);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project         $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return redirect(route('projects.index'))->with('success', 'Successfully deleted project: ' . $project->name);

    }
}
