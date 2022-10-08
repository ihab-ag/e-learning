<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InstructorAuthentication
{
  
    public function handle(Request $request, Closure $next)
    {
        $user= Auth::user();
        $type= $user->type;

        if($type=="instructor"){
        return $next($request);
        }

        return response()->json([
            "status"=>401
        ]);
    }
}
