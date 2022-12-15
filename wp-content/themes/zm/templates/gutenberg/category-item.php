<?php
    /** @var WP_Term $category */
    $category     = $args['category'];
    $thumbnail_id = get_term_meta( $category->term_id, 'thumbnail_id', true );
?>
<div class="category-item">
    <div class="category-item__thumbnail">
        <?= wp_get_attachment_image( $thumbnail_id, 'woocommerce_single' ) ?>
    </div>
    <a class="category-item__link" href="<?= get_term_link( $category ) ?>">
        <span class="category-item__name h4"><?= $category->name ?></span>
        <span class="category-item__count"><?= $category->count ?> products</span>
    </a>
</div>