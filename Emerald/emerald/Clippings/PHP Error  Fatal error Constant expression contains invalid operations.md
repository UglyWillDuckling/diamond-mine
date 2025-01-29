---
title: "PHP Error : Fatal error: Constant expression contains invalid operations"
source: https://stackoverflow.com/questions/40171546/php-error-fatal-error-constant-expression-contains-invalid-operations
author:
  - "[[Stack Overflow]]"
published: 2016-10-21
created: 2024-12-11
description: "I am getting an error:  Fatal error: Constant expression contains invalid operations in  config.php on line 214That line was: protected static $dbname = 'mydb_'.$appdata['id'];Whether I di..."
tags:
  - clippings
  - php
  - error
  - debug
---
related to: [[CSV QSL Export Feature]]

---

In my case the solution to this issue was to create a singleton class so the variable's value is initialized (calculated) only once and still have access to it whenever I need.

*(Extra info: The singleton is a design pattern which stricts you to have only 0 or 1 instance of your class in your entire program. There are several design pattern, I collected 115 of them so far [on a single image](https://cyberdani.github.io/Programming-puzzle-pieces/DesignPatterns.png))*

In your case the code would look like this:

```php
class DataBaseConfig {
                 
    private static $instance;
    private $dbname ;
                
    private final function __construct() {
        $this->dbname = 'mydb_'.$appdata['id'];
    }
    
    public static function getName() {
        if (!isset(self::$instance)) {
            self::$instance = new DataBaseConfig();
        }
        return self::$instance->dbname;
    }
}
```

You can use it like `DataBaseConfig::getName()` for the shortest / simplest version.

In reality you have more complex classes and functions so by defining a `getInstance()` function you will avoid repeating the <check instance> - <create instance process> lines for every function you add.

*(Extra info: 2 synonym paradigms DRY - Don't Repeat Yourself and DIE - Duplication Is Evil)*

This is the refactoring you need:

```php
public static function getInstance() {
    if (!isset(self::$instance)) {
        self::$instance = new PhpStarter();
    }
    return self::$instance;
}

public function getName() {
    return $this->dbname;
}
```

Use it like `$db = DataBaseConfig::getInstance();` then `$db->getName()` and `$db->getSomethingElse()` for the other functions.