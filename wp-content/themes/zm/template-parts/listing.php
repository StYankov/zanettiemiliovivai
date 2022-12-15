<?php

/**
 * The default template for displaying content
 *
 * Used for index/archive/search.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

$post_class = '';

?>

<article id="post-<?php the_ID(); ?>" <?php post_class($post_class); ?>>
  <h1>
    <?php the_title(); ?>
  </h1>
</article>