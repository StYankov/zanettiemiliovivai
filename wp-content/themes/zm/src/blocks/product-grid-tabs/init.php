<?php

defined( 'ABSPATH' ) or exit;

function zm_product_grid_tabs_render( array $attributes ) {
    $products = [];

    if( $attributes['onSaleProducts'] )
        $products['on_sale'] = wc_get_products( ['include' => wc_get_product_ids_on_sale(), 'limit' => 8 ] );

    if( $attributes['featuredProducts'] )
        $products['featured'] = wc_get_products( ['featured' => true, 'limit' => 8 ] );

    if( $attributes['newProducts'] )
        $products['new'] = wc_get_products( ['orderby' => 'date', 'order', 'DESC', 'limit' => 8] );

    ob_start();
    get_template_part( 'templates/gutenberg/product-grid-tabs', null, ['products' => $products] );

    return ob_get_clean();
}