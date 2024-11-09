<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <script src="https://kit.fontawesome.com/969734a831.js" crossorigin="anonymous"></script>

  <title>Settings</title>
  @viteReactRefresh
  @vite(['resources/css/app.css', 'resources/ts/App.tsx'])
</head>
<body>
  <div id="app"></div>
</body>
</html>
