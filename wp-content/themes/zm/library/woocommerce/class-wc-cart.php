<?php

defined( 'ABSPATH' ) or exit;

class WC_Cart_Template {
    public function __construct() {
        remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );
        add_action( 'woocommerce_after_cart', 'woocommerce_cross_sell_display' );

        add_filter( 'woocommerce_cart_ready_to_calc_shipping', [$this, 'disable_shipping_calc_on_cart'], 99 );
    }

    public function disable_shipping_calc_on_cart( $show_shipping ) {
        if( is_cart() ) {
            return false;
        }
        return $show_shipping;
    }

}

new WC_Cart_Template;