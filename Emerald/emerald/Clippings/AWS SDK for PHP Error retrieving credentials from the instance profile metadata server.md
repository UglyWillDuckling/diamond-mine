---
title: "AWS SDK for PHP: Error retrieving credentials from the instance profile metadata server"
source: https://stackoverflow.com/questions/27400563/aws-sdk-for-php-error-retrieving-credentials-from-the-instance-profile-metadata
author:
  - "[[Stack Overflow]]"
published: 2014-12-10
created: 2025-01-17
description: I am trying to send SNS messeges to android through web api.Downloaded and installed the SDK from http://aws.amazon.com/developers/getting-started/php/Got following error while running sample.ph...
tags:
  - clippings
  - aws
  - error
  - php
related:
  - "[[AWS]]"
  - "[[Athena connection]]"
---
I am trying to send SNS messeges to android through web api. Downloaded and installed the SDK from [http://aws.amazon.com/developers/getting-started/php/](http://aws.amazon.com/developers/getting-started/php/)

Got following error while running sample.php:

```php
Fatal error: Uncaught exception 'Aws\Common\Exception\InstanceProfileCredentialsException' with message 'Error retrieving credentials from the instance profile metadata server. When you are not running inside of Amazon EC2, you must provide your AWS access key ID and secret access key in the "key" and "secret" options when creating a client or provide an instantiated Aws\Common\Credentials\CredentialsInterface object. ([curl] 28: Connection timed out after 5016 milliseconds [url] http://169.254.169.254/latest/meta-data/iam/security-credentials/)' in C:\xampp\htdocs\aws-php\vendor\aws\aws-sdk-php\src\Aws\Common\InstanceMetadata\InstanceMetadataClient.php:85 Stack trace: #0 C:\xampp\htdocs\aws-php\vendor\aws\aws-sdk-php\src\Aws\Common\Credentials\RefreshableInstanceProfileCredentials.php(52): Aws\Common\InstanceMetadata\InstanceMetadataClient->getInstanceProfileCredentials() #1 C:\xampp\htdocs\aws-php\vendor\aws\aws-sdk-php\src\Aws\Common\Credentials\AbstractRefreshableCredentials.php(54): Aws\Common\Credentials\Refreshable in C:\xampp\htdocs\aws-php\vendor\aws\aws-sdk-php\src\Aws\Common\InstanceMetadata\InstanceMetadataClient.php on line 85
```

A little guidance on this topic will help me a lot

[

![Shadi's user avatar](https://i.sstatic.net/TUM6e.jpg?s=64)

](https://stackoverflow.com/users/4126114/shadi)

[Shadi](https://stackoverflow.com/users/4126114/shadi)

10.3k5 gold badges48 silver badges73 bronze badges

asked Dec 10, 2014 at 12:04

[

![Ravindra's user avatar](https://www.gravatar.com/avatar/2cdd0f2adbb6a7febc163ea9c09a2157?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/3312361/ravindra)

6

In my case, I was using

```php
return DynamoDbClient::factory(array(
  'version' => 'latest',
  'region'  => AWS_REGION,
  'key' => AWS_KEY,
  'secret'  => AWS_SECRET
));
```

which used to be ok with `aws/aws-sdk-php` version 2.8.5 , but when composer automatically installed version 3.2.0, I got the error above. The problem is simply that I should've changed the way I made the call to

```php
return DynamoDbClient::factory(array(
  'version' => 'latest',
  'region'  => AWS_REGION,
  'credentials' => array(
    'key' => AWS_KEY,
    'secret'  => AWS_SECRET,
  )
));
```

as documented [here](http://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/credentials.html#credential-profiles). Without changing the call, the *apache* php was falling back to looking for the `~/.aws/credentials` file using the HOME environment variable, which was empty. You can check its value by running `php -r 'var_dump(getenv("HOME"));'`.

[This](https://stackoverflow.com/questions/30627029/aws-php-sdk-credentials-error-s) is a related post

[

![Community's user avatar](https://www.gravatar.com/avatar/a007be5a61f6aa8f3e85ae2fc18dd66e?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/-1/community)

answered Jul 23, 2015 at 8:50

[

![Shadi's user avatar](https://i.sstatic.net/TUM6e.jpg?s=64)

](https://stackoverflow.com/users/4126114/shadi)

[Shadi](https://stackoverflow.com/users/4126114/shadi)Shadi

10.3k5 gold badges48 silver badges73 bronze badges

4

In my case I had to use **hard-coded credentials**

```php
$s3Client = new S3Client([
    'region' => REGION,
    'version' => '2006-03-01',
    'credentials' => [
        'key'    => S3_KEY,
        'secret' => S3_SECRETE,
    ],
]);
```

See more details [here](https://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/credentials.html):

answered Feb 15, 2018 at 6:39

[

![Aefits's user avatar](https://i.sstatic.net/VUbtG.gif?s=64)

](https://stackoverflow.com/users/1225070/aefits)

[Aefits](https://stackoverflow.com/users/1225070/aefits)Aefits

3,4696 gold badges31 silver badges47 bronze badges

1

You have to place the `.aws/credentials` file with your configuration in the home directory of the web service \*usually `/var/www`) not in the home directory of the logged in user.

You can find what home directory you web service is using by running `echo getenv('HOME');` in a php file on your server.

answered Mar 5, 2015 at 14:29

[

![Anti's user avatar](https://www.gravatar.com/avatar/7a21c12099163f11b3fcb125f4bb17ba?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/940620/anti)

[Anti](https://stackoverflow.com/users/940620/anti)Anti

4583 silver badges8 bronze badges

3

I was trying to use a credentials file and got the same error, [this guy](https://github.com/aws/aws-sdk-php/issues/887#issuecomment-174260184) on github pretty much nailed it:

> The credentials file should be in ini format but not have a .ini extension. It should have a 'default' section defined with your key and secret:

```php
$ less ~/.aws/credentials

[default]
aws_access_key_id = key
aws_secret_access_key = secret
```

If you specified other section name instead of default, just add a `profile` key to the S3Client parameters:

```php
[example]
aws_access_key_id = key
aws_secret_access_key = secret

$s3Client = new \Aws\S3\S3Client([
    'version' => '2006-03-01',
    'region' => $yourPreferredRegion,
    'profile' => 'example',
]);
```

> Using a credentials file or environment variables is the recommended way of providing credentials on your own server

And @Anti 's answer also helped me alot!

If you prefer the hard coded way, just follow @shadi 's answer.

answered Feb 8, 2017 at 20:50

[

![Edson Horacio Junior's user avatar](https://www.gravatar.com/avatar/34f408b238c5b0c86189af8d277a29de?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2312615/edson-horacio-junior)

assuming that the server is located on AWS EC2 (probably the same for ECS and elastic beanstalk) the "correct" way to handle this issue is not to store credentials at all.

instead, do this:

1. create an IAM role ([https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html))
2. add relevant permissions to the role policy (in this case, send SNS msg)
3. assign the role to the EC2 instance (instance settings => Attach/Replace IAM Role)

this way you don't leave any sensitive data in your code.

answered Jun 25, 2020 at 0:21

[

![Nir's user avatar](https://i.sstatic.net/xTR8I.jpg?s=64)

](https://stackoverflow.com/users/1816351/nir)

[Nir](https://stackoverflow.com/users/1816351/nir)Nir

1,31312 silver badges8 bronze badges

1

If it is laravel and aws/aws-sdk-php-laravel sdk then after configuring all step and defining key in .env file you have to drop config cache and rebuild it by following commands.

```php
php artisan config:cache;
composer dump-autoload;
```

answered Feb 13, 2019 at 8:20

[

![JenuJ's user avatar](https://www.gravatar.com/avatar/52085a79f697a456ef15b6439e1faaa4?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2894239/jenuj)

[JenuJ](https://stackoverflow.com/users/2894239/jenuj)JenuJ

4565 silver badges11 bronze badges

Here are the steps:

1. Type `cd ~` By this you will go into the home directory.
2. `mkdir .aws`
3. `sudo vi .aws/credentials`
4. Write following lines and save the file.

```php
[default]
aws_access_key_id = Your AWS Access Key

aws_secret_access_key = Your AWS Secret Access Key
```

[

![Ahmed Ashour's user avatar](https://www.gravatar.com/avatar/053c2c680ff167164388f607d4d912e5?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/184201/ahmed-ashour)

[Ahmed Ashour](https://stackoverflow.com/users/184201/ahmed-ashour)

5,54110 gold badges39 silver badges62 bronze badges

answered Apr 6, 2017 at 9:18

[

![Dibya Sahoo's user avatar](https://lh3.googleusercontent.com/-O-t0WjqABmA/AAAAAAAAAAI/AAAAAAAAAvE/p2fBRVyvFu0/photo.jpg?sz=64)

](https://stackoverflow.com/users/5714232/dibya-sahoo)

[Dibya Sahoo](https://stackoverflow.com/users/5714232/dibya-sahoo)Dibya Sahoo

9093 gold badges10 silver badges32 bronze badges

2

This might be because the config file hasn't been published.

Be sure to publish the config file:

```php
php artisan vendor:publish  --provider="Aws\Laravel\AwsServiceProvider"
```

To test this is the issue, just clear the config.

```php
php artisan config:clear
```

If it works with the cache cleared, then this will be the issue.

answered Jul 21, 2019 at 15:24

[

![MichaelHoughton's user avatar](https://i.sstatic.net/iyo4w.jpg?s=64)

](https://stackoverflow.com/users/3536209/michaelhoughton)

0

In my case (laravel 8, right after a few version upgrades) i had to change the "scripts" part of composer.json. Then after a "sail composer install" my AWS code worked again.

```php
"scripts": {
    "post-autoload-dump": [
        "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
        "@php artisan package:discover --ansi"
    ],
    "post-update-cmd": [
        "@php artisan vendor:publish --tag=laravel-assets --ansi --force"
    ],
    "post-root-package-install": [
        "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
    ],
    "post-create-project-cmd": [
        "@php artisan key:generate --ansi"
    ]
},
```

Source: [https://github.com/laravel/laravel/blob/8.x/composer.json](https://github.com/laravel/laravel/blob/8.x/composer.json)

answered Jul 6, 2023 at 8:29

[

![Slin-b's user avatar](https://www.gravatar.com/avatar/1624e93c6d9e0293f4cd042b775310d0?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1817901/slin-b)

You can try these lines:

$credentials = new Aws\\Credentials\\Credentials('key' , 'secret-key');

$s3 = new S3Client(\['version' => 'latest','region' => 'ap-south-1','credentials'=>$credentials\]);

answered Jan 25, 2019 at 12:21

[

![Narayan's user avatar](https://lh6.googleusercontent.com/-1ahOnddSlro/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQMVy2i6dHM6RWhwNThZGIzW96tLbw/mo/photo.jpg?sz=64)

](https://stackoverflow.com/users/10967315/narayan)