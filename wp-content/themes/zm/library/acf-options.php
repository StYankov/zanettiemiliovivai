<?php

/**
 * Advanced Custom Fields (ACF) based theme options
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

if (function_exists('acf_add_local_field_group')) :

	acf_add_local_field_group(array(
		'key' => 'group_625308842236c',
		'title' => 'Theme Options',
		'fields' => array(
			array(
				'key' => 'field_6253088f1bde2',
				'label' => 'Marketing header',
				'name' => 'hlwp_marketing_header',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'new_lines' => '',
			),
			array(
				'key' => 'field_6253089c1bde3',
				'label' => 'Marketing body',
				'name' => 'hlwp_marketing_body',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'new_lines' => '',
			),
			array(
				'key' => 'field_625308a31bde4',
				'label' => 'Marketing footer',
				'name' => 'hlwp_marketing_footer',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'new_lines' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'options_page',
					'operator' => '==',
					'value' => 'theme-general-settings',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_rest' => 0,
	));

endif;


/**
 * GTM code
 */
// function gtm_header()
// {
// echo get_field('hlwp_marketing_header', 'option');
// }
// add_action('wp_head', 'gtm_header');

// function gtm_body()
// {
// echo get_field('hlwp_marketing_body', 'option');
// }
// add_action('after_body', 'gtm_body');

// function gtm_footer()
// {
// echo get_field('hlwp_marketing_footer', 'option');
// }
// add_action('wp_footer', 'gtm_body');