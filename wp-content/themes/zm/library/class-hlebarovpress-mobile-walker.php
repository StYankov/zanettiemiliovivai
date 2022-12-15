<?php

/**
 * Customize the output of menus for Foundation mobile walker
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

/**
 * Big thanks to Brett Mason (https://github.com/brettsmason) for the awesome walker
 */

if (!class_exists('hlebarovpress_Mobile_Walker')) :
	class hlebarovpress_Mobile_Walker extends Walker_Nav_Menu
	{
		function start_lvl(&$output, $depth = 0, $args = array())
		{
			$indent  = str_repeat("\t", $depth);
			$output .= "\n$indent<ul class=\"vertical nested menu\">\n";
		}

		public function start_el(&$output, $data_object, $depth = 0, $args = null, $current_object_id = 0)
		{
			// Restores the more descriptive, specific name for use within this method.
			$menu_item = $data_object;

			if (isset($args->item_spacing) && 'discard' === $args->item_spacing) {
				$t = '';
				$n = '';
			} else {
				$t = "\t";
				$n = "\n";
			}
			$indent = ($depth) ? str_repeat($t, $depth) : '';

			$classes   = empty($menu_item->classes) ? array() : (array) $menu_item->classes;
			$classes[] = 'menu-item-' . $menu_item->ID;

			/**
			 * Filters the arguments for a single nav menu item.
			 *
			 * @since 4.4.0
			 *
			 * @param stdClass $args      An object of wp_nav_menu() arguments.
			 * @param WP_Post  $menu_item Menu item data object.
			 * @param int      $depth     Depth of menu item. Used for padding.
			 */
			$args = apply_filters('nav_menu_item_args', $args, $menu_item, $depth);

			/**
			 * Filters the CSS classes applied to a menu item's list item element.
			 *
			 * @since 3.0.0
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param string[] $classes   Array of the CSS classes that are applied to the menu item's `<li>` element.
			 * @param WP_Post  $menu_item The current menu item object.
			 * @param stdClass $args      An object of wp_nav_menu() arguments.
			 * @param int      $depth     Depth of menu item. Used for padding.
			 */
			$class_names = implode(' ', apply_filters('nav_menu_css_class', array_filter($classes), $menu_item, $args, $depth));
			$class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';

			/**
			 * Filters the ID attribute applied to a menu item's list item element.
			 *
			 * @since 3.0.1
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param string   $menu_item_id The ID attribute applied to the menu item's `<li>` element.
			 * @param WP_Post  $menu_item    The current menu item.
			 * @param stdClass $args         An object of wp_nav_menu() arguments.
			 * @param int      $depth        Depth of menu item. Used for padding.
			 */
			$id = apply_filters('nav_menu_item_id', 'menu-item-' . $menu_item->ID, $menu_item, $args, $depth);
			$id = $id ? ' id="' . esc_attr($id) . '"' : '';

			$output .= $indent . '<li' . $id . $class_names . '>';

			$atts           = array();
			$atts['title']  = !empty($menu_item->attr_title) ? $menu_item->attr_title : '';
			$atts['target'] = !empty($menu_item->target) ? $menu_item->target : '';
			if ('_blank' === $menu_item->target && empty($menu_item->xfn)) {
				$atts['rel'] = 'noopener';
			} else {
				$atts['rel'] = $menu_item->xfn;
			}
			$atts['href']         = !empty($menu_item->url) ? $menu_item->url : '';
			$atts['aria-current'] = $menu_item->current ? 'page' : '';

			/**
			 * Filters the HTML attributes applied to a menu item's anchor element.
			 *
			 * @since 3.6.0
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param array $atts {
			 *     The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
			 *
			 *     @type string $title        Title attribute.
			 *     @type string $target       Target attribute.
			 *     @type string $rel          The rel attribute.
			 *     @type string $href         The href attribute.
			 *     @type string $aria-current The aria-current attribute.
			 * }
			 * @param WP_Post  $menu_item The current menu item object.
			 * @param stdClass $args      An object of wp_nav_menu() arguments.
			 * @param int      $depth     Depth of menu item. Used for padding.
			 */
			$atts = apply_filters('nav_menu_link_attributes', $atts, $menu_item, $args, $depth);

			$attributes = '';
			foreach ($atts as $attr => $value) {
				if (is_scalar($value) && '' !== $value && false !== $value) {
					$value       = ('href' === $attr) ? esc_url($value) : esc_attr($value);
					$attributes .= ' ' . $attr . '="' . $value . '"';
				}
			}

			/** This filter is documented in wp-includes/post-template.php */
			$title = apply_filters('the_title', $menu_item->title, $menu_item->ID);

			/**
			 * Filters a menu item's title.
			 *
			 * @since 4.4.0
			 *
			 * @param string   $title     The menu item's title.
			 * @param WP_Post  $menu_item The current menu item object.
			 * @param stdClass $args      An object of wp_nav_menu() arguments.
			 * @param int      $depth     Depth of menu item. Used for padding.
			 */
			$title = apply_filters('nav_menu_item_title', $title, $menu_item, $args, $depth);

			$has_children = in_array( 'menu-item-has-children', (array)$menu_item->classes );

			$item_output  = $args->before;
			$item_output .= '<a' . $attributes . '>';
			$item_output .= $args->link_before . $title . $args->link_after;

			if( $has_children )
				$item_output .= '<span class="menu-item-parent-toggle"><i class="fa-solid fa-chevron-right"></i></span>';

			$item_output .= '</a>';
			$item_output .= $args->after;

			/**
			 * Filters a menu item's starting output.
			 *
			 * The menu item's starting output only includes `$args->before`, the opening `<a>`,
			 * the menu item's title, the closing `</a>`, and `$args->after`. Currently, there is
			 * no filter for modifying the opening and closing `<li>` for a menu item.
			 *
			 * @since 3.0.0
			 *
			 * @param string   $item_output The menu item's starting HTML output.
			 * @param WP_Post  $menu_item   Menu item data object.
			 * @param int      $depth       Depth of menu item. Used for padding.
			 * @param stdClass $args        An object of wp_nav_menu() arguments.
			 */
			$output .= apply_filters('walker_nav_menu_start_el', $item_output, $menu_item, $depth, $args);
		}
	}
endif;
