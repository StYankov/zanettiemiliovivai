<?php

/**
 * The template for displaying search results pages.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

get_header(); ?>

<main id="search-results" class="main-content">
	<div class="entry-content">

		<header class="search-results-header">
			<h1 class="entry-title has-text-align-center">
				<?php
				/* Search Count */
				$allsearch = new WP_Query("s=$s&showposts=-1");
				$count = $allsearch->post_count;
				_e('');
				_e('<span class="search-terms">');
				echo $count . ' ';
				_e('results for ', 'hlebarovpress');
				$key = esc_html($s, 1);
				wp_reset_query();
				echo ' "' . $key . '"';
				_e('</span>');
				?>
			</h1>
		</header>

		<?php if (have_posts()) : ?>
			<?php while (have_posts()) : the_post(); ?>
				<?php get_template_part('template-parts/content', 'search-results'); ?>
			<?php endwhile; ?>
		<?php else : ?>
			<?php get_template_part('template-parts/content', 'none'); ?>
		<?php endif; ?>

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
