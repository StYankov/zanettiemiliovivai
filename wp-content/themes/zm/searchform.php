<?php

/**
 * The template for displaying search form
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

$terms = get_terms( [
	'taxonomy'   => 'product_cat',
	'hide_empty' => true
] );

?>

<form role="search" method="get" id="searchform" action="<?php echo home_url('/'); ?>">
	<div class="input-group">
		<input type="hidden" name="swoof" value="1">
		<input type="hidden" name="product_cat" value="">
		<input type="text" class="input-group-field" value="" name="s" id="s" aria-label="Search" placeholder="<?php esc_attr_e('Search', 'hlebarovpress'); ?>">
		<button type="button" class="category-select" data-toggle="category-dropdown">
			<span class="value">All categories</span>
			<i class="fa-solid fa-angle-down"></i>
		</button>
		<div class="dropdown-pane category-dropdown" id="category-dropdown" data-dropdown data-auto-focus data-close-on-click="true" data-position="bottom" data-parent-class="input-group">
			<ul>
				<li data-id="">All Categories</li>
				<?php foreach( $terms as $term ) : ?>
					<li data-id="<?= $term->slug ?>"><?= $term->name ?></li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="input-group-button">
			<button type="submit">
				<i class="fa-solid fa-magnifying-glass"></i>
			</button>
		</div>
	</div>
</form>