<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{

    /**
     * @param Request $request
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [

            // Synchronously
            // 'appName' => config('app.name'),
            'flash' => [
                'success' => fn() => $request->session()->get('success'),
                'error' => fn() => $request->session()->get('error')
            ],

            // Lazily
            'user' => fn() => $request->user()
                ? $request->user()->only('id', 'name', 'email')
                : null
        ]);
    }
}
