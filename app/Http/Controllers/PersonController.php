<?php

namespace App\Http\Controllers;

use App\Http\Requests\PersonPasswordChangeRequest;
use App\Http\Requests\PersonRequest;
use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //TODO: move logic to repository/service
        $persons = Person::paginate(10)->withQueryString();
        $persons->transform(function ($person) {
            return [
                'id' => $person->id,
                'last_name' => $person->last_name,
                'first_name' => $person->first_name,
                'username' => $person->username
            ];
        });
        return Inertia::render('Persons/Index', [
            'persons' => $persons
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Persons/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PersonRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(PersonRequest $request)
    {
        $person = Person::create([
            'last_name' => $request->last_name,
            'first_name' => $request->first_name,
            'username' => $request->username,
            'password' => Hash::make($request->password)
        ]);
        return redirect(route('persons.index'))->with('success', 'Successfully created new person: ' . $person->first_name);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Person          $person
     * @return \Illuminate\Http\Response
     */
    public function show(Person $person)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Person          $person
     * @return \Illuminate\Http\Response
     */
    public function edit(Person $person)
    {
        return Inertia::render('Persons/Edit', [
            'person' => $person
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\PersonRequest $request
     * @param  \App\Models\Person               $person
     * @return \Illuminate\Http\Response
     */
    public function update(PersonRequest $request, Person $person)
    {
        //TODO: move logic to repository/service
        $person->update($request->all());
        return redirect(route('persons.index'))->with('success', 'Successfully updated person: ' . $person->first_name);
    }

    /**
     * @param PersonPasswordChangeRequest $request
     * @param Person                      $person
     */
    public function updatePassword(PersonPasswordChangeRequest $request, Person $person)
    {
        $person->password = Hash::make($request->password);
        $person->save();

        return redirect(route('persons.index'))->with('success', 'Successfully updated password for person: ' . $person->first_name);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Person          $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(Person $person)
    {
        $person->delete();
        return redirect(route('persons.index'))->with('success', 'Successfully deleted person: ' . $person->first_name);

    }
}
