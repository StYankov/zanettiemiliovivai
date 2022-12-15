<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the "off-canvas-wrap" div and all content after.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */
?>

<footer>
	<div class="footer">
		<div class="grid-container">
			<div class="grid-x margin-bottom-2">
				<div class="cell medium-col-1/5">
					<?php dynamic_sidebar( 'footer-1' ); ?>
				</div>

				<div class="cell medium-col-1/5">
					<?php dynamic_sidebar( 'footer-2' ); ?>
				</div>

				<div class="cell medium-col-1/5">
					<?php dynamic_sidebar( 'footer-3' ); ?>
				</div>

				<div class="cell medium-col-1/5">
					<?php dynamic_sidebar( 'footer-4' ); ?>
				</div>

				<div class="cell medium-col-1/5">
					<?php dynamic_sidebar( 'footer-5' ); ?>
				</div>
			</div>
		</div>


		<div class="grid-container mp-0">
			<div class="grid-x post-footer">
				<div class="cell medium-6">
					<?php hlebarovpress_footer_nav(); ?>
				</div>
				<div class="cell medium-6">
					<?php dynamic_sidebar( 'footer-payments' ); ?>
				</div>
			</div>
		</div>
	</div>
</footer>

<?php if (get_theme_mod('wpt_mobile_menu_layout') === 'offcanvas') : ?>
	</div><!-- Close off-canvas content -->
<?php endif; ?>

<?php wp_footer(); ?>
</body>

</html>