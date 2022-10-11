<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;

class AdminController extends Controller
{
    function addUser(Request $request){
       
        $this->validate($request,[
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password'=>[
                'required',
                'min:6',
                'regex:/[a-z]/',
                'regex:/[0-9]/',
                'regex:/[A-Z]/'
            ],
            'type'=>['in:instructor,student']
        ]);
        
        $user= new User;

        $user->name = $request -> name;
        $user-> email = $request -> input("email");
        $user-> password = Hash::make($request -> password);
        $user-> type = $request -> type;
        
        $type= $request->type;
        
        if($type=='student'){
            $user->courses= [];
        }

        $user->save();

        return response()->json([
            "status"=>200
        ]);
    }

    public function addCourse(Request $request){

        $course = new Course;
        $course->name = $request-> name;
        $course->save();

        return response()->json([
            'status'=> 200
        ]);
    }

    public function assignInstructor(Request $request){

        $course = Course::find($request-> id);
        $course->instructor = $request-> instructor;
        $course->save();

        return response()->json([
            'status'=> 200
        ]);
    }

    public function courses(){

        $courses= Course::get();

        return response()->json([
            'status'=> 200,
            'courses'=> $courses
        ]);
    }

    public function instructors(){

        $instructors= User::where('type','instructor')
        ->get();
        
        return response()->json([
            'status'=> 200,
            'instructors'=> $instructors
        ]);
    }
}
