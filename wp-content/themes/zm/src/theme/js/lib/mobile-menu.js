$(document).ready(function() {
    $('.menu-item-parent-toggle').click(function(e) {
        e.preventDefault();

        var $parent = $(e.target).closest('.menu-item');

        $parent.toggleClass('toggled').find('> .nested').slideToggle();
    });
});