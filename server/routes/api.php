<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;

Route::post('login',[AuthController::class, 'login']);

Route::group(["middleware" => "auth"], function(){

    Route::get('refresh',[AuthController::class, 'refresh']);

    Route::group(["middleware"=> "admin",'prefix'=>'admin'],function(){
        Route::post('add-user',[AdminController::class,'addUser']);
        Route::get('add-course',[AdminController::class,'addCourse']);
        Route::get('courses',[AdminController::class,'courses']);
        Route::post('assign-instructor',[AdminController::class, 'assignInstructor']);
    });

    Route::group(["middleware"=> "instructor",'prefix'=>'intsructor'],function(){
        Route::post('assign-student',[InstructorController::class, 'assignStudent']);
        Route::get('courses',[InstructorController::class, 'getCourses']);
        Route::post('add-assignment',[InstructorController::class, 'addAssignment']);
        Route::post('add-announcement',[InstructorController::class, 'addAnnouncement']);
    });

    Route::group(["middleware"=> "student",'prefix'=>'student'],function(){
        Route::get('assignments',[StudentController::class, 'viewAssignments']);
        Route::post('submit-assignment',[StudentController::class, 'submitAssignment']);
        Route::get('student-courses',[StudentController::class, 'courses']);
    });
});
    