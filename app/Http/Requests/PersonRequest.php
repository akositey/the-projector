<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PersonRequest extends FormRequest
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
        //default
        $additionalRules = [];
        $rules = [
            'last_name' => 'required|alpha|min:2|max:50',
            'first_name' => 'required|alpha|min:2|max:50'
        ];
        if ($this->method() === 'POST') //create
        {
            $additionalRules = [
                'username' => 'required|email|min:5|max:200|unique:persons',
                'password' => [
                    'required',
                    'confirmed',
                    'min:7',
                    'max:11',
                    'regex:/^[\d\w]+/',
                    'regex:/^[\S]+$/'
                ]
            ];
        } else { //update
            $additionalRules = [
                'username' => ['required', 'email', 'min:5', 'max:200', Rule::unique('persons')->ignore($this->person->id)]
            ];
        }

        return array_merge($rules, $additionalRules);
    }

    public function messages()
    {
        return [
            'password.regex' => 'alpha-numeric and special characters only, no spaces allowed for passwords'
        ];
    }
}
