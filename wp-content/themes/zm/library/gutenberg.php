<?php

if (!function_exists('hlebarovpress_gutenberg_support')) :
	function hlebarovpress_gutenberg_support()
	{
		add_theme_support('align-wide');
		add_theme_support('responsive-embeds');
	}

	add_action('after_setup_theme', 'hlebarovpress_gutenberg_support');
endif;

function register_pattern_categories()
{
	register_block_pattern_category(
		'hlwp',
		array('label' => __('HLWP', 'hlebarovpress'))
	);

	register_block_pattern_category(
		'zm',
		array('label' => 'Zanetti')
	);
}

add_action('after_setup_theme', 'register_pattern_categories');

function remove_pattern_categories()
{
	remove_theme_support('core-block-patterns');
	remove_theme_support('buttons');
	remove_theme_support('query');
}
add_action('after_setup_theme', 'remove_pattern_categories');
