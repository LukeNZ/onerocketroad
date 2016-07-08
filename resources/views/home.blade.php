<!DOCTYPE html>
<html>
    <head>
        <title>One Rocket Road</title>
        <base href="/">

        <!-- 1. Load libraries -->
        <!-- Polyfill(s) for older browsers -->
        <script src="/node_modules/core-js/client/shim.min.js"></script>
        <script src="/node_modules/zone.js/dist/zone.js"></script>
        <script src="/node_modules/reflect-metadata/Reflect.js"></script>
        <script src="/node_modules/systemjs/dist/system.src.js"></script>
        <!-- 2. Configure SystemJS -->
        <script src="systemjs.config.js"></script>
        <script>
            System.import('app').catch(function(err){ console.error(err); });
        </script>

        <!-- 3. Styles -->

        <!-- 4. Fonts -->
        <link rel="stylesheet" type="text/css" href="/node_modules/font-awesome/css/font-awesome.css">

    </head>
    <body>
        <one-rocket-road>Loading... Launching...</one-rocket-road>
    </body>
</html>
