<?php

/**
 * The default template for displaying content
 *
 * Used for single.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

$post_class = '';

?>

<article id="post-<?php the_ID(); ?>" <?php post_class($post_class); ?>>
	<div class="entry-content">
		<?php the_content() ?>
	</div>
</article>