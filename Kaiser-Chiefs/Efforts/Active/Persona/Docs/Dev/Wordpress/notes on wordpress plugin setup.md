---
related:
  - "[[first local wordpress site]]"
---
#note #ephemeral 

**based on**:: [[Setting Up Your Local Development Environment for WordPress]] article
**implemented in**:: [[first local wordpress site]]

## plugin setup

### 1. create `index.php`

Create `index.php` in the root of the [[wordpress plugin|plugin]]
### 2. add some metadata for the plugin

Add metadata to `index.php
Needs to be added as a [[docblock comment]]

```php
/**
* Plugin Name: Latest Post
* Plugin URI: https://www.your-plugins-site.com/
* Description: Show the latest
* Version: 0.1
* Author: your-name
* Author URI: https://www.your-site.com/ 
**/
```

### 3. add code to `index.php`

Add code that you want executed in your `index.php` file.
This code represents the **core** of your plugin.

```php
add_shortcode('latest_post', 'latest_post_shortcode');
 
function latest_post_shortcode() {
    if ( false === ( $latest_post = get_transient( 'latest_post' ) ) ) {
        $latest_post = get_posts()[0];
        set_transient( 'latest_post', $latest_post, WEEK_IN_SECONDS );
    }
    return $latest_post->post_title;
}
```

We add code that defines a  [[wordpress shortcode|shortcode]]  and binds it to a `function` which returns the title of the last created [[wordpress post|post]]. The wordpress [[Wordpress Transient|transient]] mechanism is used to **cache** the value.

Then we **register** an *action* that will delete the [[Wordpress Transient|transient]]'s `latest_post` value whenever a ==new post== is saved.

```php
add_action('save_post', 'latest_post_transient');
 
function latest_post_transient() {
    delete_transient('latest_post');
}
```

### 3. **activate** the plugin

In order for all this to work we first need to **activate** the plugin.

### 4. add the `shortcode`

We now add the shortcode to the websites content.

#### **steps**

1. go to the **Appereance** in the navigation menu and select **Editor**
	- this will open the [[Block Editor]]
2. In the editor, click the **Plus** button and *search* for `shortcode`
![shortcode|250](https://developer.files.wordpress.com/2022/11/image-3.png?w=1024)
3. Drag the `block` onto the [[wordpress page|page]] and *type* the name of the shortcode(`latest_post`) -> [latest_post]
4. navigate to the **homepage**
5. *check* that the **title** displayed is correct

