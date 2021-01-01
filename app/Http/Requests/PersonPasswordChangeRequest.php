<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class PersonPasswordChangeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'current_password' =>
            [function ($attribute, $password, $fail) {
                if (!Hash::check($password, $this->person->password)) {
                    return $fail("Current password is incorrect.");
                }
            }]
            ,
            'password' => [
                'required',
                'confirmed',
                'min:7',
                'max:11',
                'regex:/^[\d\w]+/',
                'regex:/^[\S]+$/'
            ]
        ];
    }
}
