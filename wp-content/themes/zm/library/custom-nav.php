<?php

/**
 * Allow users to select Topbar or Offcanvas menu. Adds body class of offcanvas or topbar based on which they choose.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

if (!function_exists('wpt_register_theme_customizer')) :
	function wpt_register_theme_customizer($wp_customize)
	{

		// Create custom panels
		$wp_customize->add_panel(
			'theme_settings',
			array(
				'priority'       => 1000,
				'theme_supports' => '',
				'title'          => __('Theme Settings', 'hlebarovpress'),
				'description'    => __('Off-canvas or Top bar', 'hlebarovpress'),
			)
		);

		// Create custom field for mobile navigation layout
		$wp_customize->add_section(
			'mobile_menu_layout',
			array(
				'title'    => __('Mobile navigation layout', 'hlebarovpress'),
				'panel'    => 'theme_settings',
				'priority' => 1000,
			)
		);

		$wp_customize->add_section(
			'top_bar_settings',
			[
				'title'    => 'Top Bar',
				'panel'    => 'theme_settings',
				'priority' => 100
			]
		);

		// Set default navigation layout
		$wp_customize->add_setting(
			'wpt_mobile_menu_layout',
			array(
				'default' => __('offcanvas', 'hlebarovpress'),
			)
		);

		// Top Bar Settings
		$top_bar_settings = [
			'tb-shipping_text' => 'Shipping Text',
			'tb-twitter'	   => 'Twitter', 
			'tb-facebook'	   => 'Facebook',
			'tb-instagram'	   => 'Instagram', 
			'tb-youtube'	   => 'Youtube'
		];
		foreach( $top_bar_settings as $setting => $_ )
			$wp_customize->add_setting( $setting );
		
		// Add options for navigation layout
		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'mobile_menu_layout',
				array(
					'type'     => 'radio',
					'section'  => 'mobile_menu_layout',
					'settings' => 'wpt_mobile_menu_layout',
					'choices'  => array(
						'topbar'    => 'Topbar',
						'offcanvas' => 'Offcanvas',
					),
				)
			)
		);

		foreach( $top_bar_settings as $setting => $label )
			$wp_customize->add_control( $setting, [
				'label'   => $label,
				'section' => 'top_bar_settings',
				'type'    => 'text'
			] );
	}

	add_action('customize_register', 'wpt_register_theme_customizer');

	// Add class to body to help w/ CSS
	add_filter('body_class', 'mobile_nav_class');
	function mobile_nav_class($classes)
	{
		if (!get_theme_mod('wpt_mobile_menu_layout') || get_theme_mod('wpt_mobile_menu_layout') === 'topbar') :
			$classes[] = 'topbar';
		elseif (get_theme_mod('wpt_mobile_menu_layout') === 'offcanvas') :
			$classes[] = 'offcanvas';
		endif;
		return $classes;
	}
endif;
