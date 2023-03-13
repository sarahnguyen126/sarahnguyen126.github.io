$(document).ready(function() {
    $(".nav > li").click(function() {
        $(".nav > li").removeClass('current');
        $(this).addClass('current');
    });
});