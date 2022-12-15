<?php
    /** @var array $products */
    $products = $args['products'];

    function pgt_tab_label( string $key ): string {
        switch( $key ) {
            case 'on_sale':
                return 'On Sale';
            case 'featured':
                return 'Featured';
            case 'new':
                return 'New';
            default:
                return '';
        }
    }

    $keys      = array_keys( $products );
    $activeTab = count( $keys ) ? $keys[0] : null;
?>
<div class="product-grid-tabs">
    <div class="product-grid-tabs__header">
        <h4>Just arrived in our store</h4>
        <ul class="product-grid-tabs__tabs">
            <?php foreach( $products as $key => $v ): ?>
                <li <?= $activeTab === $key ? 'class="active"' : '' ?> data-tab="<?= $key ?>"><?= pgt_tab_label( $key ) ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
    <div class="product-grid-tabs__content">
        <?php foreach( $products as $type => $group ) : ?>
            <div class="product-grid-tabs__grid grid-x grid-margin-x <?= $activeTab === $type ? 'active' : '' ?>" id="tab-<?= $type ?>">
                <?php foreach( $group as $product ): ?>
                    <?php get_template_part( 'templates/gutenberg/product-mini', null, ['product' => $product] ); ?>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>