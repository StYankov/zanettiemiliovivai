<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

get_header(); ?>


<main class="main-content">
	<article>
		<div class="entry-content">
			<header>
				<h1 class="entry-title"><?php _e('File Not Found', 'hlebarovpress'); ?></h1>
			</header>
			<div class="error">
				<p class="bottom"><?php _e('The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.', 'hlebarovpress'); ?></p>
			</div>
			<p><?php _e('Please try the following:', 'hlebarovpress'); ?></p>
			<ul>
				<li>
					<?php _e('Check your spelling', 'hlebarovpress'); ?>
				</li>
				<li>
					<?php
					/* translators: %s: home page url */
					printf(
						__('Return to the <a href="%s">home page</a>', 'hlebarovpress'),
						home_url()
					);
					?>
				</li>
				<li>
					<?php _e('Click the <a href="javascript:history.back()">Back</a> button', 'hlebarovpress'); ?>
				</li>
			</ul>

			<p><?php _e('Search for something:', 'hlebarovpress'); ?></p>
			<?php get_search_form(); ?>
		</div>
	</article>
</main>

<?php get_footer();
