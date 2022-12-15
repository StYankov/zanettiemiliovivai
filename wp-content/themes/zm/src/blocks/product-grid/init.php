<?php

defined( 'ABSPATH' ) or exit;

function zm_product_grid_render( array $attributes ) {
    $category = intval( $attributes['category'] );

    $products = [];

    if( $category !== 0 ) {
        $term = get_term_by( 'ID', $category, 'product_cat' );
        $products = wc_get_products( ['limit' => 4, 'category' => $term->slug] );
    } else 
        $products = wc_get_products( ['limit' => 4, 'featured' => true] );

    ob_start();
    ?>
    <div class="product-grid-square grid-x grid-margin-x">
        <?php foreach( $products as $product ) : ?>
            <?php get_template_part( 'templates/gutenberg/product-square', null, ['product' => $product] ); ?>
        <?php endforeach; ?>
    </div>
    <?php

    return ob_get_clean();
}