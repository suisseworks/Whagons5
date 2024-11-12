<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel 11 App</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/ts/App.tsx'])
</head>

<body>
    <div id="app"></div>
</body>

</html>