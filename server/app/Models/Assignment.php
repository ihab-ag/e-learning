<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'course',
        'specs',
        'submissions'
    ];

    protected $attributes = [
        'submissions' => [],
    ];
}
