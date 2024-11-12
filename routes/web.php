<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // Asegúrate de que 'app' sea la vista donde cargas tu aplicación de React
})->where('any', '.*');
 