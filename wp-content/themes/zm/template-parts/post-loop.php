<?php
    $terms = get_the_terms( get_the_ID(), 'category' );
    $term  = null;

    if( count($terms) )
        $term = $terms[0];
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('cell medium-4 post-loop'); ?>>
    <div class="entry-header">
        <div class="entry-header__thumbnail">
            <?php the_post_thumbnail( 'medium' ); ?>
        </div>

        <a class="entry-header__link" href="<?php the_permalink(); ?>"></a>

        <?php if( $term ) : ?>
            <a class="category" href="<?= get_term_link( $term, 'category' ) ?>">
                <?= $term->name ?>
            </a>
        <?php endif; ?>
    </div>
	<div class="entry-content">
        <p class="entry-content__date"><?= get_the_date( 'F m, Y' ) ?></p> 
        <h4 class="entry-content__title"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h4>
        <div class="entry-content__excerpt">
		    <?php the_excerpt() ?>
        </div>
	</div>
</article>