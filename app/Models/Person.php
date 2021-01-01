<?php

namespace App\Models;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Person extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'persons';

    /**
     * @var array
     */
    protected $fillable = [
        'last_name',
        'first_name',
        'username',
        'password'
    ];

    /**
     * @var array
     */
    protected $hidden = ['password'];

    /**
     * @return mixed
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_assignments');
    }

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * @param $value
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    /**
     * @param $value
     */
    public function setFirstNameAttribute($value)
    {
        $this->attributes['first_name'] = ucfirst($value);
    }

    /**
     * @param $value
     */
    public function setLastNameAttribute($value)
    {
        $this->attributes['last_name'] = ucfirst($value);
    }
}
