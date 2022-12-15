<?php

defined( 'ABSPATH' ) or exit;

class WC_Shop_Archive {
    public function __construct() {
        if( is_shop() ) 
            remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );

        remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );

        add_action( 'woocommerce_before_shop_loop', [$this, 'woocomemrce_filters_open'], 20 );
    }

    public function woocomemrce_filters_open() {
        echo '<button class="open-filters" data-toggle="off-canvas-shop"><i class="fa-solid fa-filter"></i> Show filters</button>';
    }
}

new WC_Shop_Archive;