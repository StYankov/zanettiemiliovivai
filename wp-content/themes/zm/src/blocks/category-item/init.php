<?php

defined( 'ABSPATH' ) or exit;

function zm_category_item_render( array $attributes ) {
    if( empty( $attributes['categoryId'] ) )
        return null;

    $term = get_term_by( 'ID', intval( $attributes['categoryId'] ), 'product_cat' );

    if( empty( $term ) )
        return null;

    ob_start();
    get_template_part( 'templates/gutenberg/category-item', null, ['category' => $term] );

    return ob_get_clean();
}