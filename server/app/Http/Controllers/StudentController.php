<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;
use App\Models\Assignment;
use App\Models\Announcement;

class StudentController extends Controller
{
    public function viewAssignments(){

        $student= Auth::user();
        $courses= $student->courses;

        $assignments=[];

        foreach($courses as $course){
            $assignments[]= Assignment::where('course',$course)->get();
        }

        return response()->json([
            'status'=>200,
            'assignments'=>$assignments,
        ]);
        }
}
