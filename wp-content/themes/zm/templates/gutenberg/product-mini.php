<?php
    /**
     * @var WC_Product $product
     */
    $product = $args['product'];
    $columns = isset( $args['columns'] ) ? intval( $args['columns'] ) : 3;

    $now  = time();
    $date = strtotime( $product->get_date_created() ); 

    $dateDiff = round(($now - $date) / (60 * 60 * 24));

    $is_new = $dateDiff < 30;

    $new_upper = $is_new && ! $product->is_on_sale();


?>
<div class="cell small-6 medium-<?= $columns ?> animated">
    <div class="product-mini<?= $new_upper ? ' new-top' : '' ?>">
        <div class="product-mini__thumbnail">
            <img src="<?= wp_get_attachment_image_url( $product->get_image_id(), 'woocommerce_single' ) ?>" />
        </div>
        <div class="product-mini__caption">
            <h6 class="product-mini__title"><?= $product->get_title() ?></h6>
            <div class="product-mini__price">
                <?= $product->get_price_html() ?>
            </div>
        </div>
        <?php if( $product->is_on_sale() ) : ?>
            <div class="product-mini__sale">-10%</div>
        <?php endif; ?>
        <?php if( $is_new ) : ?>
            <div class="product-mini__new">New</div>
        <?php endif; ?>
        <a href="<?= $product->get_permalink() ?>" class="product-mini__permalink"></a>
    </div>
</div>