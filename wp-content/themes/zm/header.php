<?php

/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php do_action('after_body'); ?>

	<?php if (get_theme_mod('wpt_mobile_menu_layout') === 'offcanvas') : ?>
		<?php get_template_part('template-parts/mobile-off-canvas'); ?>
	<?php endif; ?>

	<?php get_template_part( 'templates/header/top-bar' ); ?>

	<header class="site-header" role="banner">
		<div class="grid-container">
			<div class="grid-x top-part">
				<div class="cell medium-2 show-for-medium">
					<?php get_template_part( 'templates/header/call-us' ); ?>
				</div>
				<div class="cell medium-3 show-for-medium">
					<?php get_search_form(); ?>
				</div>
				<div class="cell small-7 medium-2 text-center">
					<?php the_custom_logo() ?>
				</div>
				<div class="cell small-5 medium-5">
					<?php get_template_part( 'templates/header/mini-cart' ); ?>
					<button aria-label="<?php _e('Main Menu', 'hlebarovpress'); ?>" class="menu-icon hide-for-medium" type="button" data-toggle="<?php hlebarovpress_mobile_menu_id(); ?>">
						<i class="fa-solid fa-bars"></i>
					</button>
				</div>
			</div>
			<div class="grid-x">
				<nav class="site-navigation" role="navigation" id="<?php hlebarovpress_mobile_menu_id(); ?>">
					<?php hlebarovpress_top_bar_r(); ?>

					<?php if (!get_theme_mod('wpt_mobile_menu_layout') || get_theme_mod('wpt_mobile_menu_layout') === 'topbar') : ?>
						<?php get_template_part('template-parts/mobile-top-bar'); ?>
					<?php endif; ?>
				</nav>
			</div>
		</div>
	</header>