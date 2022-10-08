<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;

Route::post('login',[AuthController::class, 'login']);

Route::get('assignments',[StudentController::class, 'viewAssignments']);


Route::group(["middleware" => "auth"], function(){

    Route::get('refresh',[AuthController::class, 'refresh']);

    Route::group(["middleware"=> "admin"],function(){
        Route::post('add-user',[AdminController::class,'addUser']);
        Route::get('add-course',[AdminController::class,'addCourse']);
        Route::post('asign-instructor',[AdminController::class, 'assignInstructor']);
    });
    Route::group(["middleware"=> "instructor"],function(){
        Route::post('assign-student',[InstructorController::class, 'assignStudent']);
        Route::get('courses',[InstructorController::class, 'getCourses']);
        Route::post('add-assignment',[InstructorController::class, 'addAssignment']);
        Route::post('add-announcement',[InstructorController::class, 'addAnnouncement']);
    });
});
    