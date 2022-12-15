<?php

/**
 * Register theme support for languages, menus, post-thumbnails, post-formats etc.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

if (!function_exists('hlebarovpress_theme_support')) :
	function hlebarovpress_theme_support()
	{
		// Add language support
		load_theme_textdomain('hlebarovpress', get_template_directory() . '/languages');

		// Switch default core markup for search form, comment form, and comments to output valid HTML5
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Add Logo in Theme Customizer
		add_theme_support('custom-logo');

		// Add menu support
		add_theme_support('menus');

		// Let WordPress manage the document title
		add_theme_support('title-tag');

		// Add post thumbnail support: http://codex.wordpress.org/Post_Thumbnails
		add_theme_support('post-thumbnails');

		// Additional theme support for woocommerce 3.0.+
		// add_theme_support( 'wc-product-gallery-zoom' );
		// add_theme_support( 'wc-product-gallery-lightbox' );
		// add_theme_support( 'wc-product-gallery-slider' );

		add_theme_support('editor-styles');

		add_editor_style('dist/css/editor.css');

		add_theme_support( 'woocommerce' );
	}

	add_action('after_setup_theme', 'hlebarovpress_theme_support');
endif;

/**
 * Google fonts
 */
// function google_fonts()
// {
// 	echo '<link rel="preconnect" href="https://fonts.googleapis.com">
// 	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// 	<link href="" rel="stylesheet">';
// }
// add_action('wp_head', 'google_fonts');
