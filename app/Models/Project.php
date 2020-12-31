<?php

namespace App\Models;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
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
