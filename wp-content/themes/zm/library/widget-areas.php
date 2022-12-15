<?php

/**
 * Register widget areas
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

if (!function_exists('hlebarovpress_sidebar_widgets')) :
	function hlebarovpress_sidebar_widgets()
	{
		register_sidebar(
			array(
				'id'            => 'sidebar-widgets',
				'name'          => __('Sidebar widgets', 'hlebarovpress'),
				'description'   => __('Drag widgets to this sidebar container.', 'hlebarovpress'),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h6>',
				'after_title'   => '</h6>',
			)
		);

		for($i = 1; $i <= 5; $i++) {
			register_sidebar(
				array(
					'id'            => 'footer-' . $i,
					'name'          => __('Footer Column ' . $i, 'hlebarovpress'),
					'description'   => __('Drag widgets to this sidebar container.', 'hlebarovpress'),
					'before_widget' => '<section id="%1$s" class="widget %2$s">',
					'after_widget'  => '</section>',
					'before_title'  => '<h4>',
					'after_title'   => '</h4>',
				)
			);
		}

		register_sidebar(
			array(
				'id'            => 'footer-payments',
				'name'          => __('Footer Payments', 'hlebarovpress'),
				'description'   => __('Drag widgets to this sidebar container.', 'hlebarovpress'),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h4>',
				'after_title'   => '</h4>',
			)
		);

		register_sidebar(
			array(
				'id'            => 'shop',
				'name'          => __('Shop Sidebar', 'hlebarovpress'),
				'description'   => __('Drag widgets to this sidebar container.', 'hlebarovpress'),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h4>',
				'after_title'   => '</h4>',
			)
		);
	}
	add_action('widgets_init', 'hlebarovpress_sidebar_widgets');
endif;
