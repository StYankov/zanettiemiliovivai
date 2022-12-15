<?php

defined( 'ABSPATH' ) or exit;

class WC_Single_Product {
    public function __construct() {
        add_filter( 'woocommerce_breadcrumb_defaults', [$this, 'wcc_change_breadcrumb_delimiter'] );   
        add_filter( 'use_block_editor_for_post_type', [$this, 'enable_gutenberg_for_products'], 10, 2 );
        add_filter( 'woocommerce_output_related_products_args', [$this, 'related_products_args'] );
        add_filter( 'woocommerce_related_products', [$this, 'filter_woocommerce_related_products'], 10, 3 );
        add_filter( 'woocommerce_product_related_products_heading', [$this, 'related_products_heading'] );

        remove_filter( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
    }

    public function wcc_change_breadcrumb_delimiter( $defaults ) {
        $defaults['delimiter'] = ' &gt; ';
        return $defaults;
    }

    public function enable_gutenberg_for_products( $can_edit, $post_type ){
        if( $post_type == 'product' ) {
            $can_edit = true;
        }
        
        return $can_edit;
    }

    public function related_products_args( $args ) {
        $args['posts_per_page'] = 6;
        $args['columns'] = 6;

        return $args;
    }

    public function filter_woocommerce_related_products( $related_posts, $product_id, $args ) {
        // Show products
        $show_products = 4;
        
        // Initialize
        $taxonomy = 'product_cat';
        
        // When empty
        if ( empty( $related_posts ) ) {
            // Get WooCommerce product categories WP_Term objects
            $product_cats_ids = get_terms( array(
                'taxonomy'  => $taxonomy,
                'fields'    => 'ids',
            ) );
            
            // Get product id(s) from a certain category, by category-id
            $product_ids_from_cats_ids = get_posts( array(
                'post_type'   => 'product',
                'numberposts' => $show_products + count( $args['excluded_ids'] ),
                'post_status' => 'publish',
                'fields'      => 'ids',
                'tax_query'   => array(
                    array(
                        'taxonomy' => $taxonomy,
                        'field'    => 'id',
                        'terms'    => $product_cats_ids,
                        'operator' => 'IN',
                    )
                ),
                'orderby'     => 'rand',
                'exclude'     => $args['excluded_ids'],
            ));
    
            // Extract a slice of the array
            $related_posts = array_slice( $product_ids_from_cats_ids, 0, $show_products );
        }
    
        // Return
        return $related_posts;
    }

    public function related_products_heading() {
        return 'You may also like';
    }
}

new WC_Single_Product;