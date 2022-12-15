$(document).ready(function() {
    $('.product-grid-tabs__tabs li').on('click', function(e) {
        if($(this).hasClass('active'))
            return;

        $('.product-grid-tabs__tabs li.active').removeClass('active');
        $(this).addClass('active');

        const tab = $(this).data('tab');

        $('.product-grid-tabs__grid.active').removeClass('active');

        const $tabContent = $(`#tab-${tab}`);
        $tabContent.addClass('active');

        $tabContent.find('.cell').removeClass('fade-in-down').each(function(i, el) {
            el.classList.add('fade-in-down');
            $(el).attr('style', `--a-delay: ${Math.round(i * 0.15 * 100) / 100}s`);
        });
    });
});