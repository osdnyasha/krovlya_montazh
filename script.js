(function(s) {
    var n;
    s(".works-block__names").on("click", "a:not(.active)", function(e) {
        e.preventDefault();
        $('.works-block__names a').removeClass("active");
        $(this).addClass("active");
        $('.works_tabs').hide('200');
        var n = $(this).attr('href');
        $(n).show('200');
     })
}
)(jQuery);