$(document).ready(function() {
    $('.quantity__control.minus').on('click', function(e) {
        e.preventDefault();
        var $input = $(this).parent().find('input');
        var min = parseInt($input.attr('min'));
        var current = parseInt($input.val());

        if(current == min)
            return;

        $input.val(current - 1).trigger('change');
    });

    $('.quantity__control.plus').on('click', function(e) {
        e.preventDefault();
        var $input = $(this).parent().find('input');
        var max = parseInt($input.attr('max'));
        var current = parseInt($input.val());

        if(max == current)
            return;

        $input.val(current + 1).trigger('change');
    });
});