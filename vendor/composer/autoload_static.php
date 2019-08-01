<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit018ebe114af162db3cf70fc0ca408bf7
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Workerman\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Workerman\\' => 
        array (
            0 => __DIR__ . '/..' . '/workerman/workerman',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit018ebe114af162db3cf70fc0ca408bf7::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit018ebe114af162db3cf70fc0ca408bf7::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
