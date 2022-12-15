<?php

defined( 'ABSPATH' ) or exit;

add_shortcode( 'f_latest_posts', 'f_latest_posts_shortcode' );

function f_latest_posts_shortcode() {
    $posts = get_posts(['numberposts' => 2]);

    if( empty($posts) )
        return '';

    ob_start();
    ?>
    <div class="f-latest-posts">
        <?php foreach( $posts as $post ) : ?>
            <div class="f-post">
                <a class="f-post__thumbnail" href="<?= get_permalink( $post ) ?>">
                    <?= get_the_post_thumbnail( $post ) ?>
                </a>

                <div class="f-post__body">
                    <a class="f-post__title" href="<?= get_permalink( $post->ID ) ?>"><?= $post->post_title ?></a>
                    <div class="f-post__date"><?= date( 'F m, Y', strtotime( $post->post_date ) ) ?></div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <?php
    return ob_get_clean();
}