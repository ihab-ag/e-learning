<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;
use App\Models\Assignment;
use App\Models\Announcement;

class InstructorController extends Controller
{
    public function getCourses(){

        $instructor= Auth::user();
        $instructor_id= $instructor->id;

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

        $student->push('courses',$course->id);

        return response()->json([
            'status'=>200
        ]);
    }

    public function addAssignment(Request $request){

        $assignment = new Assignment;

        $assignment->name= $request->name;
        $assignment->specs= $request->specs;
        $assignment->course= $request->course_id;
        
        $assignment->save();

        return response()->json([
            'status'=>200
        ]);
    }

    public function addAnnouncement(Request $request){

        // $instructor= Auh::user;

        $announcement= new Announcement();

        $announcement->name= $request->name;
        $announcement->text= $request->text;
        $announcement->instructor= 123;

        $announcement->save();

        return response()->json([
            "status"=>200
        ]);
    }

    public function students(){

        $students= User::where('type','student')
        ->get();
        
        return response()->json([
            'status'=> 200,
            'students'=> $students
        ]);
    }
}

