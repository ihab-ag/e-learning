<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;

class InstructorController extends Controller
{
    public function getCourses(){

        // $instructor= Auth::user();
        // $instructor_id= $instructor->id;

        $response=[];

        $courses= Course::where('instructor', $instructor_id)->get();
        foreach($courses as $course){
            $response[]=$course;
        }

        return response()->json([
            "status"=>200,
            "courses"=>$response
        ]);
    }

    public function assignStudent(Request $request){

        $student= User::find($request->student_id);
        $course= Course::find($request->course_id);

        $student->push('courses',$course->name);

        return response()->json([
            'status'=>200
        ]);
    }
}
