$(document).ready(function() {
    $('.accordion').each(function(i, parent) {
        $(parent).find('.accordion-item').each(function(i, el) {
            if(i === 0)
                return;

            $(el).removeClass('is-active');
            $(el).find('.accordion-content').hide();
        });
    });
});