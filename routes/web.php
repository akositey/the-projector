<?php

use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

Route::middleware(['inertia', 'auth'])->group(function () {
    Route::resource('projects', ProjectController::class);
    Route::resource('persons', PersonController::class);
    Route::patch('persons/{person}/updatePassword', [PersonController::class, 'updatePassword'])->name('persons.password.update');
    // project assignment
    Route::delete('projects/{project}/assignments/{person}', [AssignmentController::class, 'destroyPerson'])->name('assignments.destroyPerson');
    Route::get('projects/{project}/assignments', [AssignmentController::class, 'editPersons'])->name('assignments.editPersons');
    Route::post('projects/{project}/assignments', [AssignmentController::class, 'storePerson'])->name('assignments.storePerson');
    Route::get('persons/{person}/assignments', [AssignmentController::class, 'editProjects'])->name('assignments.editProjects');
});

require __DIR__ . '/auth.php';
