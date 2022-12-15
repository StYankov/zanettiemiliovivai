<?php

/**
 * HlebarovPress functions and definitions
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

/** Various clean up functions */

define('THEME_JSON', json_decode(file_get_contents(__DIR__ . "/theme.json"), true));

require_once 'library/optimizations/cleanup.php';
require_once 'library/optimizations/no-emoji.php';

/** Required for Foundation to work properly */
require_once 'library/foundation.php';

/** Format commentsf */
require_once 'library/class-hlebarovpress-comments.php';

/** Register all navigation menus */
require_once 'library/navigation.php';

/** Add menu walkers for top-bar and off-canvas */
require_once 'library/class-hlebarovpress-top-bar-walker.php';
require_once 'library/class-hlebarovpress-mobile-walker.php';

/** Create widget areas in sidebar and footer */
require_once 'library/widget-areas.php';

/** Enqueue scripts */
require_once 'library/enqueue-scripts.php';

/** Register Custom post types */
require_once 'library/cpt.php';

/** Register taxonomies */
require_once 'library/taxonomy.php';

/** Add theme support */
require_once 'library/theme-support.php';

/** Add Nav Options to Customer */
require_once 'library/custom-nav.php';

/** Configure responsive image sizes */
require_once 'library/responsive-images.php';

/** Gutenberg editor support */
require_once 'library/gutenberg.php';

/** All things acf */
require_once 'library/acf.php';

require_once 'library/woocommerce/class-wc-single-product.php';
require_once 'library/woocommerce/class-wc-cart.php';
require_once 'library/woocommerce/class-wc-shop-archive.php';

require_once 'library/footer-latest-posts.php';

/** Blocks scripts */
require_once 'library/blocks/index.php';

if (THEME_JSON["settings"]["devLabel"]) {
    require_once 'src/dev_env.php';
}

/** Register Necessary Rest Fields */
require_once 'library/rest.php';

add_filter( 'register_block_type_args', 'core_image_block_type_args', 10, 3 );
function core_image_block_type_args( $args, $name ) {
    if ( $name == 'core/latest-posts' ) {
        $args['render_callback'] = 'zm_latest_posts_render';
    }
    return $args;
}


function zm_latest_posts_render( $attributes ) {
    $query = new WP_Query([
        'post_type'      => 'post',
        'posts_per_page' => 3
    ]);

    ob_start();
    ?>
    <div class="latest-posts grid-x grid-margin-x">
        <?php while ( $query->have_posts() ) : $query->the_post(); ?>
            <?php get_template_part( 'template-parts/post-loop' ); ?>
        <?php endwhile; wp_reset_postdata(); ?>
    </div>

    <?php
    return ob_get_clean();
}