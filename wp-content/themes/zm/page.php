<?php

/**
 * This is the template that displays all pages by default.
 * This template is the same as page-full-width.php
 */

get_header(); ?>

<main class="main-content">
	<div class="grid-container">
		<?php while (have_posts()) : the_post(); ?>
			<?php get_template_part('template-parts/content', 'page'); ?>
		<?php endwhile; ?>
	</div>
</main>

<?php get_footer();
