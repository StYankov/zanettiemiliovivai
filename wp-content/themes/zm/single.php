<?php

/**
 * The template for displaying all single posts and attachments
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

get_header(); ?>

<main class="main-content">
	<?php while (have_posts()) : the_post(); ?>
		<?php get_template_part('template-parts/content', ''); ?>
	<?php endwhile; ?>
</main>
<?php get_footer();
