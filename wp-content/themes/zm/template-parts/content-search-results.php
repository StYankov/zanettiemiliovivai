<?php

/**
 * The default template for displaying search results
 *
 * Used for both single and index/archive/search.
 *
 * @package HlebarovPress
 * @since HlebarovPress 1.0.0
 */

$post_class = 'search-result';
?>

<article id="post-<?php the_ID(); ?>" <?php post_class($post_class); ?>>
	<div class="search-result__title">
		<a href="<?php echo the_permalink(); ?>">
			<h3>
				<?php the_title(); ?>
			</h3>
		</a>
	</div>

	<div class="search-result__content">
		<?php echo wp_trim_words(get_the_content(), 40, '...'); ?>
	</div>

	<a class="search-result__link" href="<?php echo the_permalink(); ?>">
		<?php echo the_permalink(); ?>
	</a>
</article>