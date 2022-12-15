<?php

/**
 * Configure responsive images sizes
 *
 * @package WordPress
 * @subpackage HlebarovPress
 * @since HlebarovPress 2.6.0
 */

// Add additional image sizes
// add_image_size('fp-small', 640);
// add_image_size('fp-medium', 1024);
// add_image_size('fp-large', 1200);
// add_image_size('fp-xlarge', 1920);

// Register the new image sizes for use in the add media modal in wp-admin
function hlebarovpress_custom_sizes($sizes)
{
	return array_merge(
		$sizes,
		array()
	);
}
add_filter('image_size_names_choose', 'hlebarovpress_custom_sizes');
