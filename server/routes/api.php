<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\InstructorController;

Route::post('login',[AuthController::class, 'login']);

Route::get('courses',[InstructorController::class, 'getCourses']);

Route::group(["middleware" => "auth"], function(){

    Route::get('refresh',[AuthController::class, 'refresh']);

    Route::group(["middleware"=> "admin"],function(){
        Route::post('add-user',[AdminController::class,'addUser']);
        Route::get('add-course',[AdminController::class,'addCourse']);
        Route::post('asign-instructor',[AdminController::class, 'assignInstructor']);
    });
    
});
    