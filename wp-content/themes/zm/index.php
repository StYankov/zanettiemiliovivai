<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

get_header(); ?>

<main class="main-content">
	<div class="entry-content">
		<?php if (have_posts()) : ?>

			<?php /* Start the Loop */ ?>
			<?php while (have_posts()) : the_post(); ?>
				<?php get_template_part('template-parts/listing', get_post_format()); ?>
			<?php endwhile; ?>

		<?php else : ?>
			<?php get_template_part('template-parts/content', 'none'); ?>

		<?php endif; // End have_posts() check. 
		?>

		<?php /* Display navigation to next/previous pages when applicable */ ?>
		<?php
		if (function_exists('hlebarovpress_pagination')) :
			hlebarovpress_pagination();
		elseif (is_paged()) :
		?>
			<nav id="post-nav">
				<div class="post-previous"><?php next_posts_link(__('&larr; Older posts', 'hlebarovpress')); ?></div>
				<div class="post-next"><?php previous_posts_link(__('Newer posts &rarr;', 'hlebarovpress')); ?></div>
			</nav>
		<?php endif; ?>
	</div>
</main>
<?php get_footer();
