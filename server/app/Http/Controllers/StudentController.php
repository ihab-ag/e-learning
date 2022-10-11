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

    public function submitAssignment(Request $request){
        
        $student= Auth::user();
        $studen_id=$student->id;
        $assignment_id= $request->assignment_id;

        $assignment= Assignment::find($assignment_id);

        $assigment->push('submissions', array("student"=>$student_id,"text"=>$request->text));
        
        return request()->json([
            "status"=>200
        ]);

    }

    public function courses(){

        $student= Auth::user();

        $courses_id= $student->courses;
        $courses=[];
        foreach($courses_id as $course_id){
            $courses[]= Course::find('id',$course_id);
        }

        return response()->json([
            'status'=>200,
            'courses'=>$courses,
        ]);
    }
}
