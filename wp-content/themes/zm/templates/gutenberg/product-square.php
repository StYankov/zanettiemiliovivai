<?php
    /** @var WC_Product $product */
    $product = $args['product'];
?>
<div class="cell small-6 medium-3">
    <div class="product-square">
        <div class="product-square__thumbnail">
            <?= $product->get_image( 'woocommerce_single' ) ?>
        </div>
        <div class="product-square__overlay">
            <h5 class="product-square__title"><?= $product->get_name(); ?></h5>
            <div class="product-square__price"><?= $product->get_price_html(); ?></div>
        </div>
        <a href="<?= $product->get_permalink() ?>" class="product-square__permalink"></a>
    </div>
</div>