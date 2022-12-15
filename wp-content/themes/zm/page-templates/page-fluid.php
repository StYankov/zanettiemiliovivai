<?php
/*
Template Name: Page Fluid
*/

get_header(); ?>

<main class="main-content">
	<div class="grid-container-full">
		<?php while (have_posts()) : the_post(); ?>
			<?php get_template_part('template-parts/content', 'page'); ?>
		<?php endwhile; ?>
	</div>
</main>

<?php get_footer();
