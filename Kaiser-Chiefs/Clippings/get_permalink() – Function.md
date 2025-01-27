---
source: https://developer.wordpress.org/reference/functions/get_permalink/
author:
  - "[[WordPress Developer Resources]]"
published: 
created: 2025-01-26
tags:
  - docs
  - docs/official
  - wordpress
related:
  - "[[Wordpress]]"
---
Retrieves the full permalink for the current post or post ID.

## Parameters

`$post`int|[WP\_Post](https://developer.wordpress.org/reference/classes/wp_post/)optional

Post ID or post object. Default is the global `$post`.

`$leavename`booloptional

Whether to keep post name or page name.

Default:`false`

## Return
string|false The permalink URL. False if the post does not exist.

## More Information

In a Plugin or Theme, it can be used as early as the `[setup_theme](https://developer.wordpress.org/reference/hooks/setup_theme/)` Action. Any earlier usage, including `[plugins_loaded](https://developer.wordpress.org/reference/hooks/plugins_loaded/)`, generates a Fatal Error.

Note that when used outside The Loop on a posts page (index, archive, etc.) without the ID parameter, it will return the URL of the last post in The Loop, *not* the permalink for the current page.

## Source

`wp-includes/link-template.php`

```php
function get_permalink( $post = 0, $leavename = false ) {
	$rewritecode = array(
		'%year%',
		'%monthnum%',
		'%day%',
		'%hour%',
		'%minute%',
		'%second%',
		$leavename ? '' : '%postname%',
		'%post_id%',
		'%category%',
		'%author%',
		$leavename ? '' : '%pagename%',
	);

	if ( is_object( $post ) && isset( $post->filter ) && 'sample' === $post->filter ) {
		$sample = true;
	} else {
		$post   = get_post( $post );
		$sample = false;
	}

	if ( empty( $post->ID ) ) {
		return false;
	}

	if ( 'page' === $post->post_type ) {
		return get_page_link( $post, $leavename, $sample );
	} elseif ( 'attachment' === $post->post_type ) {
		return get_attachment_link( $post, $leavename );
	} elseif ( in_array( $post->post_type, get_post_types( array( '_builtin' => false ) ), true ) ) {
		return get_post_permalink( $post, $leavename, $sample );
	}

	$permalink = get_option( 'permalink_structure' );

	/**
	 * Filters the permalink structure for a post before token replacement occurs.
	 *
	 * Only applies to posts with post_type of 'post'.
	 *
	 * @since 3.0.0
	 *
	 * @param string  $permalink The site's permalink structure.
	 * @param WP_Post $post      The post in question.
	 * @param bool    $leavename Whether to keep the post name.
	 */
	$permalink = apply_filters( 'pre_post_link', $permalink, $post, $leavename );

	if (
		$permalink &&
		! wp_force_plain_post_permalink( $post )
	) {

		$category = '';
		if ( str_contains( $permalink, '%category%' ) ) {
			$cats = get_the_category( $post->ID );
			if ( $cats ) {
				$cats = wp_list_sort(
					$cats,
					array(
						'term_id' => 'ASC',
					)
				);

				/**
				 * Filters the category that gets used in the %category% permalink token.
				 *
				 * @since 3.5.0
				 *
				 * @param WP_Term  $cat  The category to use in the permalink.
				 * @param array    $cats Array of all categories (WP_Term objects) associated with the post.
				 * @param WP_Post  $post The post in question.
				 */
				$category_object = apply_filters( 'post_link_category', $cats[0], $cats, $post );

				$category_object = get_term( $category_object, 'category' );
				$category        = $category_object->slug;
				if ( $category_object->parent ) {
					$category = get_category_parents( $category_object->parent, false, '/', true ) . $category;
				}
			}
			/*
			 * Show default category in permalinks,
			 * without having to assign it explicitly.
			 */
			if ( empty( $category ) ) {
				$default_category = get_term( get_option( 'default_category' ), 'category' );
				if ( $default_category && ! is_wp_error( $default_category ) ) {
					$category = $default_category->slug;
				}
			}
		}

		$author = '';
		if ( str_contains( $permalink, '%author%' ) ) {
			$authordata = get_userdata( $post->post_author );
			$author     = $authordata->user_nicename;
		}

		/*
		 * This is not an API call because the permalink is based on the stored post_date value,
		 * which should be parsed as local time regardless of the default PHP timezone.
		 */
		$date = explode( ' ', str_replace( array( '-', ':' ), ' ', $post->post_date ) );

		$rewritereplace = array(
			$date[0],
			$date[1],
			$date[2],
			$date[3],
			$date[4],
			$date[5],
			$post->post_name,
			$post->ID,
			$category,
			$author,
			$post->post_name,
		);

		$permalink = home_url( str_replace( $rewritecode, $rewritereplace, $permalink ) );
		$permalink = user_trailingslashit( $permalink, 'single' );

	} else { // If they're not using the fancy permalink option.
		$permalink = home_url( '?p=' . $post->ID );
	}

	/**
	 * Filters the permalink for a post.
	 *
	 * Only applies to posts with post_type of 'post'.
	 *
	 * @since 1.5.0
	 *
	 * @param string  $permalink The post's permalink.
	 * @param WP_Post $post      The post in question.
	 * @param bool    $leavename Whether to keep the post name.
	 */
	return apply_filters( 'post_link', $permalink, $post, $leavename );
}
```

[View all references](https://developer.wordpress.org/reference/files/wp-includes/link-template.php/) [View on Trac](https://core.trac.wordpress.org/browser/tags/6.7/src/wp-includes/link-template.php#L170) [View on GitHub](https://github.com/WordPress/wordpress-develop/blob/6.7/src/wp-includes/link-template.php#L170-L309)

## Hooks

[apply\_filters( ‘post\_link’, string $permalink, WP\_Post $post, bool $leavename )](https://developer.wordpress.org/reference/hooks/post_link/)

Filters the permalink for a post.

[apply\_filters( ‘post\_link\_category’, WP\_Term $cat, array $cats, WP\_Post $post )](https://developer.wordpress.org/reference/hooks/post_link_category/)

Filters the category that gets used in the %category% permalink token.

[apply\_filters( ‘pre\_post\_link’, string $permalink, WP\_Post $post, bool $leavename )](https://developer.wordpress.org/reference/hooks/pre_post_link/)

Filters the permalink structure for a post before token replacement occurs.

## Changelog

| Version | Description |
| --- | --- |
| [1.0.0](https://developer.wordpress.org/reference/since/1.0.0/) | Introduced. |
