<!DOCTYPE html>
<html style="font-size: 14px" class="dark h-full">
    <head>
        <title>{{ config('app.name') }}</title>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link media="(prefers-color-scheme: dark)" rel="icon" href="/favicon-light.png" />
        <link media="(prefers-color-scheme: light)" rel="icon" href="/favicon-colored.png" />

        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css">
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css">
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css">

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
		{{-- <script src="https://pay.youcan.shop/js/ycpay.js"></script> --}}
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png">
        @vite(["resources/app.css", "resources/loader.css", "resources/app.js"])

        @inertiaHead
    </head>

    <body class="relative h-full antialiased text-zinc-600 font-body overflow-x-hidden">
        <div id="app" data-page="{{ json_encode($page) }}">
            <div class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                <img src="/assets/logo-black.png" class="h-20 md:h-20" alt="COD Rocket logo">
                <span class="loader mt-4"></span>
            </div>
        </div>
    </body>
</html>
