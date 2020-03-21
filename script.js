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


$(document).ready(function() {
	$('.choose__parent li').click(function() {
		$('.choose__parent li').removeClass('active');
		$('.choose__child li').removeClass('active');
		$(this).toggleClass('active');
		$('.card-category').fadeIn();
	})

	$('.choose__child li').click(function() {
		$('.choose__child li').removeClass('active');
		$(this).toggleClass('active');
		var cur_id = $(this).attr('id');
		$('.card-category').fadeOut(0);
		$('.card-category.' + cur_id).fadeIn();
		
	})

	if(document.location.href == "https://osdnyasha.github.io/krovlya_montazh/index4.html") {
		$('.absolute-btn .first').addClass('active');
	}
	else {
		$('.absolute-btn .scnd').addClass('active');
	}

});