<?php

/**
 * Advanced Custom Fields (ACF) related functions
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */


// Include acf blocks if present
if (file_exists(get_theme_file_path('/blocks/acf/acf-blocks.php'))) {
	include get_theme_file_path('/blocks/acf/acf-blocks.php');
}


// ACF Theme Options (and add boilerplate for GTM)
if (function_exists('acf_add_options_page')) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

require_once 'acf-options.php';
