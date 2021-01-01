<?php

use App\Http\Controllers\PersonAssignmentController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\ProjectAssignmentController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/projects');
});

Route::middleware(['inertia', 'auth'])->group(function () {
    Route::resource('projects', ProjectController::class);
    Route::resource('persons', PersonController::class);
    Route::patch('persons/{person}/updatePassword', [PersonController::class, 'updatePassword'])->name('persons.password.update');
    // project assignments
    Route::delete('projects/{project}/assignments/{person}', [ProjectAssignmentController::class, 'destroy'])->name('projects.assignments.destroy');
    Route::get('projects/{project}/assignments', [ProjectAssignmentController::class, 'edit'])->name('projects.assignments.edit');
    Route::post('projects/{project}/assignments', [ProjectAssignmentController::class, 'store'])->name('projects.assignments.store');
    // person assignments
    Route::delete('persons/{person}/assignments/{project}', [PersonAssignmentController::class, 'destroy'])->name('persons.assignments.destroy');
    Route::get('persons/{person}/assignments', [PersonAssignmentController::class, 'edit'])->name('persons.assignments.edit');
    Route::post('persons/{person}/assignments', [PersonAssignmentController::class, 'store'])->name('persons.assignments.store');
});

require __DIR__ . '/auth.php';
