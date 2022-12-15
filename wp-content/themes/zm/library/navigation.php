<?php

/**
 * Register Menus
 *
 * @link http://codex.wordpress.org/Function_Reference/register_nav_menus#Examples
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

register_nav_menus(
	array(
		'top-bar-r'  => esc_html__('Right Top Bar', 'hlebarovpress'),
		'main-menu'  => esc_html__('Main Menu', 'hlebarovpress'),
		'footer-nav'  => esc_html__('Footer', 'hlebarovpress'),
		'mobile-nav' => esc_html__('Mobile', 'hlebarovpress'),
	)
);


/**
 * Desktop navigation - right top bar
 *
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if (!function_exists('hlebarovpress_top_bar_r')) {
	function hlebarovpress_top_bar_r()
	{
		wp_nav_menu(
			array(
				'container'      => false,
				'menu_class'     => 'dropdown menu desktop-menu',
				'items_wrap'     => '<ul id="%1$s" class="%2$s" data-dropdown-menu>%3$s</ul>',
				'theme_location' => 'main-menu',
				'depth'          => 3,
				'fallback_cb'    => false,
				'walker'         => new hlebarovpress_Top_Bar_Walker(),
			)
		);
	}
}


/**
 * Footer navigation
 *
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if (!function_exists('hlebarovpress_footer_nav')) {
	function hlebarovpress_footer_nav()
	{
		wp_nav_menu(
			array(
				'container'      => false,
				'menu_class'     => 'menu footer-menu',
				'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
				'theme_location' => 'footer-nav',
				'depth'          => 1,
				'fallback_cb'    => false,
			)
		);
	}
}


/**
 * Mobile navigation - topbar (default) or offcanvas
 * 
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if (!function_exists('hlebarovpress_mobile_nav')) {
	function hlebarovpress_mobile_nav()
	{
		wp_nav_menu(
			array(
				'container'      => false, // Remove nav container
				'menu'           => __('mobile-nav', 'hlebarovpress'),
				'menu_class'     => 'vertical menu',
				'theme_location' => 'mobile-nav',
				'items_wrap'     => '<ul id="%1$s" class="%2$s" data-accordion-menu data-submenu-toggle="true">%3$s</ul>',
				'fallback_cb'    => false,
				'walker'         => new hlebarovpress_Mobile_Walker(),
			)
		);
	}
}


/**
 * Add support for buttons in the top-bar menu:
 * 1) In WordPress admin, go to Apperance -> Menus.
 * 2) Click 'Screen Options' from the top panel and enable 'CSS CLasses' and 'Link Relationship (XFN)'
 * 3) On your menu item, type 'has-form' in the CSS-classes field. Type 'button' in the XFN field
 * 4) Save Menu. Your menu item will now appear as a button in your top-menu
 */
if (!function_exists('hlebarovpress_add_menuclass')) {
	function hlebarovpress_add_menuclass($ulclass)
	{
		$find    = array('/<a rel="button"/', '/<a title=".*?" rel="button"/');
		$replace = array('<a rel="button" class="button"', '<a rel="button" class="button"');

		return preg_replace($find, $replace, $ulclass, 1);
	}
	add_filter('wp_nav_menu', 'hlebarovpress_add_menuclass');
}
