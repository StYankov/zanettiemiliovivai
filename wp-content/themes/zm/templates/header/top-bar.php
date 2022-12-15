<?php
    $shipping_info = get_theme_mod( 'tb-shipping_text' );
    $socials       = [ 
        'tb-twitter'    => 'fa-brands fa-twitter',
        'tb-facebook'   => 'fa-brands fa-facebook-f',
        'tb-instagram'  => 'fa-brands fa-instagram',
        'tb-youtube'    => 'fa-brands fa-youtube' 
    ];
?>
<div class="top-bar grid-container">
    <div class="grid-x top-bar__inner">
        <div class="cell medium-6">
            <?php if( $shipping_info ) : ?>
                <div class="top-bar__shipping">
                    <i class="fa-solid fa-truck-fast"></i>
                    <?= $shipping_info ?>
                </div>
            <?php endif; ?>
        </div>
        <div class="cell medium-6">
            <div class="top-bar__right">
                <div class="top-bar__socials">
                    <?php foreach( $socials as $key => $icon ) : ?>
                        <?php $url = get_theme_mod( $key ); ?>
                        <?php if( empty( $url ) ) { continue; } ?>
                        <a class="<?= $key ?>" target="_blank" href="<?= $url ?>">
                            <i class="<?= $icon ?>"></i>
                        </a>
                    <?php endforeach; ?>
                </div>
                <?php if( has_nav_menu( 'top-bar-r' ) ) : ?>
                    <?php wp_nav_menu( [
                        'theme_location' => 'top-bar-r',
                        'container_class' => 'top-bar__menu'
                    ] ); ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>