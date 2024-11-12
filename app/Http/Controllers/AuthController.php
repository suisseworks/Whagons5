<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Api\LoginUserRequest;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{

    public function login(LoginUserRequest $request)
    {

        $request->validated($request->all());

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => false,
                'error' => 'Unauthorized'
            ], 401);
        }

        $user = User::firstWhere('email', $request->email);

        return response()->json([
            'success' => true,
            'token' => $user->createToken($request->email)->plainTextToken
        ]);
    }
}
