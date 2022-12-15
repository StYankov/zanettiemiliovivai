<div class="menu-mini-cart">
    <a class="cart-link" href="<?php wc_get_cart_url() ?>">
        <i class="fa-solid fa-cart-shopping"></i>

        <span class="cart-link__count"><?= WC()->cart->get_cart_contents_count() ?></span>
    </a>
    <div class="mini-cart-contents show-for-medium">
        <?php woocommerce_mini_cart() ?>
    </div>
</div>