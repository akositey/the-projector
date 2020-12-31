<?php

namespace App\Models;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
     * @return mixed
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_assignments');
    }
}
