---
title: 'PHP error: "The zip extension and unzip command are both missing, skipping."'
source: https://stackoverflow.com/questions/41274829/php-error-the-zip-extension-and-unzip-command-are-both-missing-skipping
author:
  - "[[Stack Overflow]]"
published: 2016-12-22
created: 2025-01-08
tags:
  - clippings
  - error
  - php
  - zip
related:
  - "[[php]]"
  - "[[composer]]"
  - "[[zip]]"
---
When I run a `composer update` I get this error message:

```php
Loading composer repositories with package information
Updating dependencies (including require-dev)
    Failed to download psr/log from dist: The zip extension and unzip command are both missing, skipping.
The php.ini used by your command-line PHP is: /etc/php/7.0/cli/php.ini
    Now trying to download from source
```

What do I need to do to enable the zip and unzip commands so that composer can download dependencies?

asked Dec 22, 2016 at 2:13

Depending on your flavour of Linux and PHP version these may vary.

```php
(sudo) yum install zip unzip php-zip
(sudo) apt install zip unzip php-zip
```

This is a very commonly asked question, you'll be able to find more useful info in the aether by searching `<distro> php <version> zip extension`.

answered Dec 22, 2016 at 2:18

[

![Arrisar's user avatar](https://i.sstatic.net/hzyV1.jpg?s=64)

](https://stackoverflow.com/users/3444853/arrisar)

[Arrisar](https://stackoverflow.com/users/3444853/arrisar)Arrisar

4,7521 gold badge14 silver badges15 bronze badges

8

For Windows, in case you're using a locale development environment like XAMPP, just locate the php.ini file (C:\\xampp\\php in my case), open it and remove the semicolon from the following line.

```php
;extension=zip
```

Restart your Apache webserver and it will work fine.

[

![eduardo a's user avatar](https://i.sstatic.net/eS0yh.png?s=64)

](https://stackoverflow.com/users/3873650/eduardo-a)

answered Dec 30, 2022 at 13:35

[

![Niklas's user avatar](https://i.sstatic.net/EhNat.jpg?s=64)

](https://stackoverflow.com/users/12428737/niklas)

[Niklas](https://stackoverflow.com/users/12428737/niklas)Niklas

1,6441 gold badge9 silver badges8 bronze badges

5

Not to belabor the point, but if you are working in a `Dockerfile`, you would solve this particular issue with Composer by installing the `unzip` utility. Below is an example using the [official PHP image](https://hub.docker.com/_/php) to install `unzip` and the `zip` PHP extension for good measure.

```php
FROM php:7.4-apache

# Install Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Install unzip utility and libs needed by zip PHP extension 
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev \
    unzip
RUN docker-php-ext-install zip
```

[This is a helpful GitHub issue](https://github.com/docker-library/php/issues/61) where the above is lovingly lifted from.

answered Feb 26, 2020 at 19:53

[

![DJ Sipe's user avatar](https://www.gravatar.com/avatar/2077bd6d7a19d4d562193bfc56e0833c?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1356593/dj-sipe)

[DJ Sipe](https://stackoverflow.com/users/1356593/dj-sipe)DJ Sipe

1,37513 silver badges13 bronze badges

3

For servers with PHP 5.6

```php
sudo apt-get install zip unzip php5.6-zip
```

[

![Goke Obasa's user avatar](https://www.gravatar.com/avatar/22822ab727d0154cd5279515041fc0e4?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2930323/goke-obasa)

[Goke Obasa](https://stackoverflow.com/users/2930323/goke-obasa)

4,8781 gold badge20 silver badges27 bronze badges

answered Jan 23, 2017 at 9:52

[

![Olawale's user avatar](https://www.gravatar.com/avatar/482274a8531c9292508d7e3ca3ae4c05?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/6578815/olawale)

[Olawale](https://stackoverflow.com/users/6578815/olawale)Olawale

7517 silver badges11 bronze badges

2

For Debian Jessie (which is the current default for the PHP image on Docker Hub):

```php
apt-get install --yes zip unzip php-pclzip
```

You can omit the --yes, but it's useful when you're RUN-ing it in a Dockerfile.

answered Jun 14, 2017 at 12:49

[

![Peter Breuls's user avatar](https://www.gravatar.com/avatar/a5d6d79765e9818d13d7e7ef6c63ab32?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2772161/peter-breuls)

1

For older Ubuntu distros i.e 16.04, 14.04, 12.04 etc

```php
sudo apt-get install zip unzip php7.0-zip
```

answered Jan 22, 2017 at 21:42

[

![Goke Obasa's user avatar](https://www.gravatar.com/avatar/22822ab727d0154cd5279515041fc0e4?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2930323/goke-obasa)

[Goke Obasa](https://stackoverflow.com/users/2930323/goke-obasa)Goke Obasa

4,8781 gold badge20 silver badges27 bronze badges

1

Please check your composer status first

```php
composer diagnose 
```

If the status showing

```php
zip: extension not found, unzip not available, 7-Zip not available
```

then

1. Open your XAMPP Server
2. Apache -> config button ->Click "PHP(php.ini)"
3. Find "zip"
4. ";extension = zip will shown
5. Remove the semicolon and save the file
6. Restart your XAMPP Apache

Now

```php
composer create-project laravel/laravel <<project_name>>
```

or

```php
laravel new <<project_name>>
```

answered Jan 31, 2023 at 10:43

[

![vithushan's user avatar](https://i.sstatic.net/bvOLI.jpg?s=64)

](https://stackoverflow.com/users/19881121/vithushan)

[vithushan](https://stackoverflow.com/users/19881121/vithushan)vithushan

3212 silver badges5 bronze badges

I had PHP7.2 on a Ubuntu 16.04 server and it solved my problem:

`sudo apt-get install zip unzip php-zip`

**Update**

Tried this for Ubuntu 18.04 and worked as well.

answered Feb 13, 2018 at 10:48

[

![Aqib Ashef's user avatar](https://www.gravatar.com/avatar/ba9250cf8273d6114107f34d0695d168?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2036307/aqib-ashef)

[Aqib Ashef](https://stackoverflow.com/users/2036307/aqib-ashef)Aqib Ashef

6518 silver badges20 bronze badges

I'm Using Ubuntu and with the following command worked

`apt-get install --yes zip unzip`

answered Dec 29, 2017 at 16:07

[

![Oscar Gallardo's user avatar](https://i.sstatic.net/Ir2yf.jpg?s=64)

](https://stackoverflow.com/users/5211514/oscar-gallardo)

[Oscar Gallardo](https://stackoverflow.com/users/5211514/oscar-gallardo)Oscar Gallardo

2,6884 gold badges36 silver badges47 bronze badges

For PHP8.2 (Windows)

As stated here: [https://www.php.net/manual/en/zip.installation.php#zip.installation.new.windows](https://www.php.net/manual/en/zip.installation.php#zip.installation.new.windows)

> As of PHP 8.2.0, php\_zip.dll DLL must be enabled in php.ini. Previously, this extension was built-in.

You will need to manually enable this extension within your php.ini by adding `extension=php_zip.dll`

For a list of installed extensions you can run:

```php
php -m
```

or if you have `grep` installed even easier would be:

```php
php -m | grep "zip"
```

answered Jan 14, 2023 at 14:45

[

![zanderwar's user avatar](https://i.sstatic.net/uJXRm.jpg?s=64)

](https://stackoverflow.com/users/2266583/zanderwar)

[zanderwar](https://stackoverflow.com/users/2266583/zanderwar)zanderwar

3,7213 gold badges30 silver badges49 bronze badges

For Windows Users:

Locate your php.ini and open it with a text editor.

Search for 'zip'. If you're using PHP 8.2, you'd probably find it on line 952 written like this: ;extension=zip

Remove the ';' so it looks like this-> extension =zip Save and you're good to go!

answered Mar 16, 2023 at 4:54

[

![Moses Aweda's user avatar](https://lh3.googleusercontent.com/a-/AFdZucrvtGgC1VpNCOD9w37Icq27efxGX-Mo866AxtrLtw=k-s64)

](https://stackoverflow.com/users/19604858/moses-aweda)

On docker with image `php:7.2-apache` I just needed zip and unzip. No need for php-zip :

`apt-get install zip unzip`

or Dockerfile

```php
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "zip"]
RUN ["apt-get", "install", "-y", "unzip"]
```

answered Aug 29, 2019 at 11:30

[

![Armel Larcier's user avatar](https://i.sstatic.net/bN8eT.png?s=64)

](https://stackoverflow.com/users/1491212/armel-larcier)

[Armel Larcier](https://stackoverflow.com/users/1491212/armel-larcier)Armel Larcier

16k7 gold badges69 silver badges89 bronze badges

0

I got this error when I installed Laravel 5.5 on my digitalocean cloud server (Ubuntu 18.04 and PHP 7.2) and the following command fixed it.

> `sudo apt install zip unzip php7.2-zip`

answered Oct 24, 2018 at 6:39

[

![Joyal's user avatar](https://www.gravatar.com/avatar/9bef475b03eb87ecc2891881ac2ae68a?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1508633/joyal)

[Joyal](https://stackoverflow.com/users/1508633/joyal)Joyal

2,6833 gold badges34 silver badges47 bronze badges

As of PHP 8.2.0, php\_zip.dll DLL **must be enabled in php.ini**. Previously, this extension was built-in.

you can do that:

edit **php.ini** file and **remove** semicolon in the line

```php
;extension=zip 
```

**save** the file and you good to go..

answered Feb 26, 2023 at 22:08

[

![A. Rokbi's user avatar](https://lh3.googleusercontent.com/a/AItbvmlaZo3wb0SKaV_fhnXXLrGPS6-4SZXfw8P64aK0=k-s64)

](https://stackoverflow.com/users/19979875/a-rokbi)

[A. Rokbi](https://stackoverflow.com/users/19979875/a-rokbi)A. Rokbi

6034 silver badges8 bronze badges

If you are using **Ubuntu and PHP 7.2**, use this...

```php
sudo apt-get update
sudo apt-get install zip unzip php7.2-zip
```

answered Jun 1, 2018 at 15:34

[

![aphoe's user avatar](https://i.sstatic.net/v9ev2.jpg?s=64)

](https://stackoverflow.com/users/3335179/aphoe)

[aphoe](https://stackoverflow.com/users/3335179/aphoe)aphoe

2,7162 gold badges30 silver badges32 bronze badges

Actually composer nowadays seems to work without the `zip` command line command, so installing `php-zip` should be enough --- BUT it would display a warning:

> As there is no 'unzip' command installed zip files are being unpacked using the PHP zip extension. This may cause invalid reports of corrupted archives. Installing 'unzip' may remediate them.

See also [Is there a problem with using php-zip (composer warns about it)](https://stackoverflow.com/questions/52444600/is-there-a-problem-with-using-php-zip-composer-warns-about-it)

answered Sep 21, 2018 at 13:12

[

![Alex's user avatar](https://www.gravatar.com/avatar/7651f7a3094f0a39b51630214fe9c94d?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/288568/alex)

[Alex](https://stackoverflow.com/users/288568/alex)Alex

34.9k19 gold badges112 silver badges194 bronze badges

Try this for PHP 7.4:

```php
sudo apt-get install zip unzip php7.4-zip
```

And for PHP 8.0:

```php
sudo apt-get install zip unzip php8.0-zip
```

answered Sep 14, 2021 at 11:53

[

![Pejman Zeynalkheyri's user avatar](https://i.sstatic.net/825u10kT.jpg?s=64)

](https://stackoverflow.com/users/2037129/pejman-zeynalkheyri)

`PHP-ZIP` needs some dependancies or library missing, depends on the image from `Dockerfile` you need to install them first

```php
RUN set -eux \
   && apt-get update \
   && apt-get install -y libzip-dev zlib1g-dev \
   && docker-php-ext-install zip
```

answered Nov 2, 2020 at 14:55

[

![Pascal Tovohery's user avatar](https://lh3.googleusercontent.com/-cPmMiTWwztM/AAAAAAAAAAI/AAAAAAAAAgo/rwuHad6sv4U/photo.jpg?sz=64)

](https://stackoverflow.com/users/7751011/pascal-tovohery)

```php
apt-get install zip
```

I'm running a docker container and this helped me

```php
docker-compose exec app apt-get install zip
```

[

![cottontail's user avatar](https://i.sstatic.net/nkoKw.png?s=64)

](https://stackoverflow.com/users/19123103/cottontail)

[cottontail](https://stackoverflow.com/users/19123103/cottontail)

22.6k25 gold badges155 silver badges155 bronze badges

answered Sep 12, 2022 at 16:23

[

![youcef's user avatar](https://www.gravatar.com/avatar/44e16ccf4112cb6f0604da199b0efcbd?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/9039926/youcef)

1

PHP **8.1**

```bash
apt-get install --yes zip
```

[

![Cyril's user avatar](https://www.gravatar.com/avatar/49fb730b047e149af9197c76ecd24c5b?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/943075/cyril)

[Cyril](https://stackoverflow.com/users/943075/cyril)

3,1484 gold badges28 silver badges29 bronze badges

answered May 5, 2022 at 8:35

[

![fabpico's user avatar](https://www.gravatar.com/avatar/8dc401b73cfcc33f6488a3bd2adde590?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/4840661/fabpico)

[fabpico](https://stackoverflow.com/users/4840661/fabpico)fabpico

2,9174 gold badges29 silver badges48 bronze badges

For Windows OS, open this directory (`C:\xampp\php\php.ini` in my case). It will open in Notepad.

Now to save time, press **Ctrl+F** and type "zip". NB make sure your Direction option is "Down".

Now click on **Find Next** you will find it ("zip") equated like this `;extension = zip`. Now remove the semicolon (;) before the word "extension", save it and close the file.

Now go back to your CMD window and run your `composer global require laravel/installer` command.

[

![halfer's user avatar](https://i.sstatic.net/4rtxd.png?s=64)

](https://stackoverflow.com/users/472495/halfer)

[halfer](https://stackoverflow.com/users/472495/halfer)

20.4k19 gold badges108 silver badges200 bronze badges

answered Mar 1, 2024 at 18:11

[

![Jonas_xiv's user avatar](https://i.sstatic.net/ywgrE.png?s=64)

](https://stackoverflow.com/users/18480886/jonas-xiv)

After run

```php
apt install php-zip
```

and run again

```php
composer require ...
```

I get the next warning and suggestion

As there is no 'unzip' nor '7z' command installed zip files are being unpacked using the PHP zip extension.

This may cause invalid reports of corrupted archives. Besides, any UNIX permissions (e.g. executable) defined in the archives will be lost.

Installing 'unzip' or '7z' (21.01+) may remediate them.

As there is no 'unzip' nor '7z' command installed zip files are being unpacked using the PHP zip extension.

This may cause invalid reports of corrupted archives. Besides, any UNIX permissions (e.g. executable) defined in the archives will be lost.

Installing 'unzip' or '7z' (21.01+) may remediate them.

So I suggest install unzip first.

```php
apt install unzip
```

answered Jul 5, 2022 at 12:50

[

![Salvador Rueda's user avatar](https://www.gravatar.com/avatar/f1b3db6dc2a3a08c606dbcc5dd7eb860?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2224934/salvador-rueda)

[Salvador Rueda](https://stackoverflow.com/users/2224934/salvador-rueda)Salvador Rueda

8952 gold badges7 silver badges15 bronze badges

0

if you are using XAMPP to run your php code in the latest release, zip extensions are commented out you have to activate them yourself. Navigate to C:\\xampp\\php, open the php.ini file and find the commented line and uncomment as follows by removing starting semicolon

```php
;extension=zip
```

to

```php
extension=zip
```

save and rerun you command. works like magic!

answered Mar 18, 2023 at 7:06

[

![It's VIN's user avatar](https://lh5.googleusercontent.com/-OKYdbBLM_0o/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMmnQJiMBiIKZvGRWss6eZiX9a7vA/photo.jpg?sz=64)

](https://stackoverflow.com/users/13300283/its-vin)

[It's VIN](https://stackoverflow.com/users/13300283/its-vin)It's VIN

3122 silver badges8 bronze badges

I fixed this error in my Windows system by uncommenting `zip ext in php.ini`.

The shortest command to fix it on **Debian** and **Ubuntu** (dependencies will be installed automatically):

```php
sudo apt install php-zip
```

answered Sep 3, 2020 at 9:11

[

![DevonDahon's user avatar](https://www.gravatar.com/avatar/90997d8b6358e2bf9bdb31924b740779?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/931247/devondahon)

[DevonDahon](https://stackoverflow.com/users/931247/devondahon)DevonDahon

8,3309 gold badges88 silver badges142 bronze badges

locate php.ini and search 'zip', then uncomment/remove semicolon

answered May 28, 2023 at 1:33

[

![Dalan Dan's user avatar](https://lh3.googleusercontent.com/a-/AFdZucpuf19CzGJ88CTUmkzqC_0ncTGiT_6hwVr5TSyhrg=k-s64)

](https://stackoverflow.com/users/19926269/dalan-dan)