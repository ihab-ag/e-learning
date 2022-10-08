<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;


Route::post('test',[AdminController::class, 'assignInstructor']);
Route::post('login',[AuthController::class, 'login']);

Route::group(["middleware" => "auth"], function(){
    Route::get('refresh',[AuthController::class, 'refresh']);
    Route::post('add-user',[AdminController::class,'addUser']);
    Route::get('add-course',[AdminController::class,'addCourse']);
});
    