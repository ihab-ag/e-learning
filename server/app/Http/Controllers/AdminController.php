<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

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
            'type'=>'required'
        ]);
        
        $user= new User;

        $user->name = $request -> name;
        $user-> email = $request -> input("email");
        $user-> password = Hash::make($request -> password);
        $user-> type = $request -> type;
        
        $type= $request->type;
        
        if($type=='student'){
            $user->courses= "";
        }

        $user->save();

        return response()->json([
            "status"=>200
        ]);
    }
}