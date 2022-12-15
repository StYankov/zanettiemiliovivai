$(document).ready(function() {
    $('.category-dropdown').on('show.zf.dropdown', function(e) {
        $('.category-select').addClass('active');
    });

    $('.category-dropdown').on('hide.zf.dropdown', function(e) {
        $('.category-select').removeClass('active');
    });

    $('.category-dropdown li').on('click', function(e) {
        const categoryId = $(e.target).data('id');
        const $container = $(e.target).closest('#searchform');

        $container.find('.value').text($(e.target).text());
        $container.find('[name="product_cat"]').val(categoryId);

        $('.category-dropdown').foundation('close');
    });
});