<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::post('add',[AdminController::class,'addUser']);

Route::post('login',[AuthController::class, 'login']);

Route::group(["middleware" => "auth"], function(){
    Route::get('refresh',[AuthController::class, 'refresh']);
});
    