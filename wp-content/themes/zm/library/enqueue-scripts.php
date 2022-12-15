<?php

/**
 * Enqueue all styles and scripts
 *
 * Learn more about enqueue_script: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_script}
 * Learn more about enqueue_style: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_style }
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */


// Check to see if rev-manifest exists for CSS and JS static asset revisioning
//https://github.com/sindresorhus/gulp-rev/blob/master/integration.md

if (!function_exists('hlebarovpress_asset_path')) :
	function hlebarovpress_asset_path($filename)
	{
		$filename_split = explode('.', $filename);
		$dir            = end($filename_split);
		$manifest_path  = dirname(dirname(__FILE__)) . '/dist/assets/' . $dir . '/rev-manifest.json';

		if (file_exists($manifest_path)) {
			$manifest = json_decode(file_get_contents($manifest_path), true);
		} else {
			$manifest = array();
		}

		if (array_key_exists($filename, $manifest)) {
			return $manifest[$filename];
		}
		return $filename;
	}
endif;


if (!function_exists('hlebarovpress_scripts')) :
	function hlebarovpress_scripts()
	{
		$css_timestamp = include get_stylesheet_directory() . '/dist/css/style.asset.php';
		$js_timestamp = include get_stylesheet_directory() . '/dist/js/app.asset.php';

		// Enqueue the main Stylesheet.
		wp_enqueue_style('main-stylesheet', get_stylesheet_directory_uri() . '/dist/css/style.css', array(), $css_timestamp["version"], 'all');

		wp_enqueue_style( 'fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css' );

		// Deregister the jquery version bundled with WordPress.
		wp_deregister_script('jquery');

		// CDN hosted jQuery placed in the header, as some plugins require that jQuery is loaded in the header.
		wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', array(), '3.6.0', false);

		// Enqueue jQuery migrate. Uncomment the line below to enable.
		// wp_enqueue_script( 'jquery-migrate' );

		// Deregister the jquery-migrate version bundled with WordPress.
		wp_deregister_script('jquery-migrate');

		// Enqueue main scripts
		wp_enqueue_script('main-scripts', get_stylesheet_directory_uri() . '/dist/js/app.js', $js_timestamp["dependencies"], $js_timestamp["version"], true);

		// Add the comment-reply library on pages where it is necessary
		if (is_singular() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}

		if( is_product() ) {
			wp_enqueue_script( 'fs-lightbox', 'https://cdnjs.cloudflare.com/ajax/libs/fslightbox/3.0.9/index.min.js', false, false, true );
		}
	}

	add_action('wp_enqueue_scripts', 'hlebarovpress_scripts');
endif;

if (!function_exists('hlebarovpress_google_fonts')) :
	function hlebarovpress_google_fonts() {
		?>
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400&display=swap" rel="stylesheet">
		<?php
	}

	add_action( 'wp_head', 'hlebarovpress_google_fonts' );
	add_action( 'admin_head', 'hlebarovpress_google_fonts' );
endif;

if (!function_exists('hlebarovpress_block_style') ) :
	function hlebarovpress_block_style() {
		wp_enqueue_block_style( 'zm/jumbotron', [
			'handle' => 'zm-jumbotron',
			'src'	 => get_theme_file_uri( 'dist/css/blocks/jumbotron.css' ),
			'path'	 => get_theme_file_path( 'dist/css/blocks/jumbotron.css' )
		] );

		wp_enqueue_block_style( 'zm/category-item', [
			'handle' => 'zm-category-item',
			'src'    => get_theme_file_uri( 'dist/css/blocks/category-item.css' ),
			'path'   => get_theme_file_path( 'dist/css/blocks/category-item.css' )
		] );

		wp_enqueue_block_style( 'zm/parallax-block', [
			'handle' => 'zm-parallax-block',
			'src'	 => get_theme_file_uri( 'dist/css/blocks/parallax-block.css' ),
			'path'	 => get_theme_file_path( 'dist/css/blocks/parallax-block.css' )
		] );

		wp_enqueue_block_style( 'zm/product-grid-tabs', [
			'handle' => 'zm-product-grid-tabs',
			'src'	 => get_theme_file_uri( 'dist/css/blocks/product-grid-tabs.css' ),
			'path'	 => get_theme_file_path( 'dist/css/blocks/product-grid-tabs.css' )
		] );

		wp_enqueue_block_style( 'zm/product-grid', [
			'handle' => 'zm-product-grid',
			'src'    => get_theme_file_uri( 'dist/css/blocks/product-square.css' ),
			'path'   => get_theme_file_path( 'dist/css/blocks/product-square.css' )
		] );

	}
	add_action( 'after_setup_theme', 'hlebarovpress_block_style' );
endif;

if (!function_exists('hlebarovpress_block_style_handles') ) :
	function hlebarovpress_block_style_handles() {
		wp_register_style( 'zm-accordion', get_theme_file_uri( 'dist/css/blocks/accordion.css' ) );
	}
	add_action( 'admin_enqueue_scripts', 'hlebarovpress_block_style_handles' );
endif;

if (!function_exists('hlebarovpress_block_assets_register')) :
	function hlebarovpress_block_assets_register() {
		wp_register_script( 'zm-rellax', 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js' );
	}
	add_action( 'wp_enqueue_scripts', 'hlebarovpress_block_assets_register' );
endif;