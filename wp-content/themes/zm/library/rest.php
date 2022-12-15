<?php

defined( 'ABSPATH' ) or exit;

add_action( 'rest_api_init', 'zm_product_cat_featured_image_field' );
function zm_product_cat_featured_image_field() {
    register_rest_field(
        'product_cat',
        'featured_image',
        [
            'get_callback' => function( array $object ) {
                $thumbnail_id = get_term_meta( $object['id'], 'thumbnail_id', true );
                $image_url    = wp_get_attachment_image_url( $thumbnail_id, 'woocommerce_single' );

                return $image_url;
            },
            'schema'    => null
        ]
    );
}

function zm_get_term_featured_image() {
    return 'ok';
}