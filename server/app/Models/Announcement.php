<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'instructor',
        'text'
    ];
}
