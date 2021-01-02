<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    use HasFactory;

    /**
     * @return mixed
     */
    public function scopePaginated($query)
    {
        return $query->paginate(10)->withQueryString();
    }

    /**
     * @param  $query
     * @param  $assigned
     * @return mixed
     */
    public function scopeNotIn($query, $assigned)
    {
        return $query->whereNotIn('id', $assigned)->get();
    }
}
