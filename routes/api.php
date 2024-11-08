<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\PostController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');



Route::get('/hello_old', function() {
    return response()->json([
        'message' => 'Hello from Laravel API!'
    ]);
});


Route::get('/hello', [HelloController::class, 'index']);

//////////////////////////////////////////////////////////////


// Route::apiResource('posts', PostController::class);


Route::get('/', function() {
    return 'API';

});


