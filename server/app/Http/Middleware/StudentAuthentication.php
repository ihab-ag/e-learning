<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentAuthentication
{
   
    public function handle(Request $request, Closure $next)
    {
        $user= Auth::user();
        $type= $user->type;

        if($type=="student"){
        return $next($request);
        }

        return response()->json([
            "status"=>401
        ]);
    }
}
