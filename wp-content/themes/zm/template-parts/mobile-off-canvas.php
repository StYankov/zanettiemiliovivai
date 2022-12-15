<?php

/**
 * Template part for off canvas menu
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

?>

<nav class="mobile-off-canvas-menu off-canvas position-left" id="<?php hlebarovpress_mobile_menu_id(); ?>" data-off-canvas data-transition="overlap" data-auto-focus="false" role="navigation">
	<div class="off-canvas-close">
		<button aria-label="<?php _e('Close Menu', 'hlebarovpress'); ?>" class="menu-close" type="button" data-toggle="<?php hlebarovpress_mobile_menu_id(); ?>"><i class="fa-solid fa-xmark"></i></button>
	</div>

	<?php hlebarovpress_mobile_nav(); ?>
</nav>

<div class="off-canvas-content" data-off-canvas-content>