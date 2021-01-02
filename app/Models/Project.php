<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends BaseModel
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'code',
        'name',
        'remarks',
        'budget'
    ];

    /**
     * @return mixed
     */
    public function persons()
    {
        return $this->belongsToMany(Person::class, 'project_assignments');
    }

}
