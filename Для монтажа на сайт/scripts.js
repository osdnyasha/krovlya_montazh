jQuery(document).ready(function(){
 
 if($(window).scrollTop() > 162) {
    $('.main_main_menu').addClass('scrolling');
}
else {
 $('.main_main_menu').removeClass('scrolling');
}
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

$(window).scroll(function(){

    if($(window).scrollTop() > 162) {
        $('.main_main_menu').addClass('scrolling');
    }
    else {
     $('.main_main_menu').removeClass('scrolling');
 }

 jQuery('.sort_hover').mouseover(function(){
    jQuery(this).children('.sort_options').fadeIn();
});
 jQuery('.sort_hover').mouseleave(function() {
    jQuery(this).children('.sort_options').fadeOut();
});

 jQuery('.list-view').click(function() {
    jQuery('.product_block').addClass('list-item');
});

 jQuery('.grid-view').click(function() {
    jQuery('.product_block').removeClass('list-item');
    jQuery('.product_block').removeClass('list-item__mobile');
});

 jQuery('.list-view__mobile').click(function() {
    jQuery('.product_block').addClass('list-item__mobile');
})

 
 $(window).resize(function() {
    if($(window).width() < 650) {
        $('.product_block.list-item').removeClass('list-item');
    }

});



})


Slider();

jQuery('.phone_mask').mask('+7(999)-999-99-99');

jQuery('.home_slider .jcarousel-pagination').css({'margin-top':-jQuery('.home_slider .jcarousel-pagination').outerHeight()/2+'px'});
var max=0;
jQuery('.product_block_in').each(function(){
    if(jQuery(this).outerHeight()>max)
    {
        max=jQuery(this).outerHeight()
    }
});
    //jQuery('.product_block_in').height(max);

    $("#quantitySales").on('keyup',function(){
        jQuery('.btn_product_add_cart').attr('onclick','cart.add('+jQuery('.btn_product_add_cart').attr('data-id')+','+$("#quantitySales").val()+');');
    });

    jQuery('.plus').click(function(){
        jQuery(this).prev().val(parseInt(jQuery(this).prev().val())+1);
        jQuery('.btn_product_add_cart').attr('onclick','cart.add('+jQuery('.btn_product_add_cart').attr('data-id')+','+jQuery(this).prev().val()+');')
        jQuery('#price_m').html((parseFloat(jQuery('#p_price').attr('data-price'))/parseFloat(jQuery('#p_price').attr('data-m'))).toFixed(2)+' р.');
        jQuery('#m2').html((parseFloat(jQuery('#p_price').attr('data-m'))*parseInt(jQuery('input[name="quantity"]').val())).toFixed(1)+' м<sup>2</sup>');

    });
    jQuery('.minus').click(function(){
        if(parseInt(jQuery(this).next().val())>1)
        {
            jQuery(this).next().val(parseInt(jQuery(this).next().val())-1);
            jQuery('.btn_product_add_cart').attr('onclick','cart.add('+jQuery('.btn_product_add_cart').attr('data-id')+','+jQuery(this).next().val()+');')
            jQuery('#price_m').html((parseFloat(jQuery('#p_price').attr('data-price'))/parseFloat(jQuery('#p_price').attr('data-m'))).toFixed(2)+' р.');
            jQuery('#m2').html((parseFloat(jQuery('#p_price').attr('data-m'))*parseInt(jQuery('input[name="quantity"]').val())).toFixed(1)+' м<sup>2</sup>');

        }

    });
    jQuery('.boc_order_btn').click(function(){
        jQuery('#boc_order').css({'margin-top':-jQuery('#boc_order').outerHeight()/2+'px'});
        jQuery('#boc_order,.over_all').fadeIn();
    });

    jQuery('.close,.over_all').click(function(){
        jQuery('#boc_order,.over_all,.m_form').fadeOut();
    });

    jQuery('.m_form').each(function(){
        jQuery(this).css({'margin-top':-jQuery(this).outerHeight()/2+'px'});
    });

    jQuery('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        jQuery(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq(jQuery(this).index()).addClass('active');

    });

    jQuery('#price_m').html((parseFloat(jQuery('#p_price').attr('data-price'))/parseFloat(jQuery('#p_price').attr('data-m'))).toFixed(2)+' р.');
    jQuery('#m2').html((parseFloat(jQuery('#p_price').attr('data-m'))*parseInt(jQuery('input[name="quantity"]').val())).toFixed(1)+' м<sup>2</sup>');

    jQuery('.call_link').click(function(){
        jQuery('#call_form,.over_all').fadeIn();
    });
    jQuery('#open_calc_form').click(function(){
        jQuery('#calc_form,.over_all').fadeIn();
    });

    jQuery('.call_send').click(function(e){
        e.preventDefault();
        var error=0;
        if(jQuery('input[name="call_name"]').val().length<3)
        {
            jQuery('input[name="call_name"]').addClass('error');
            error=1;
        }
        else
        {
            jQuery('input[name="call_name"]').removeClass('error');
        }
        if(jQuery('input[name="call_phone"]').val().length<3)
        {
            jQuery('input[name="call_phone"]').addClass('error');
            error=1;
        }
        else
        {
            jQuery('input[name="call_phone"]').removeClass('error');
        }
        if(error==0)
        {
            jQuery.ajax({
                url:'/index.php?route=extension/module/sobfeedback/send',
                type:'post',
                data:{
                    'sob_input[1][Имя]': jQuery('input[name="call_name"]').val(),
                    'sob_input[2][Телефон]': jQuery('input[name="call_phone"]').val(),
                    'link_page': location.href,
                    'module_name': 'Обратный звонок',
                    'module_id': 43,
                    'form_success': 'Сообщение успешно отправлено'
                },
                success:function (data) {
                    jQuery('#call_form').fadeOut();
                    jQuery('#thank_call_form').fadeIn();
                    setTimeout(function(){
                        jQuery('.m_form,.over_all').fadeOut();
                    },3000);
                }
            });
        }
        
    });

    jQuery('.calc_send').click(function(e){
        e.preventDefault();
        var error=0;
        if(jQuery('input[name="calc_name"]').val().length<3)
        {
            jQuery('input[name="calc_name"]').addClass('error');
            error=1;
        }
        else
        {
            jQuery('input[name="calc_name"]').removeClass('error');
        }
        if(jQuery('input[name="calc_phone"]').val().length<3)
        {
            jQuery('input[name="calc_phone"]').addClass('error');
            error=1;
        }
        else
        {
            jQuery('input[name="calc_phone"]').removeClass('error');
        }
        if(error==0)
        {
            jQuery.ajax({
                url:'/index.php?route=extension/module/sobfeedback/send',
                type:'post',
                data:{
                    'sob_input[1][Имя]': jQuery('input[name="calc_name"]').val(),
                    'sob_input[2][Телефон]': jQuery('input[name="calc_phone"]').val(),
                    'sob_input[3][Описание]': jQuery('input[name="calc_descr"]').val(),
                    'sob_input[3][Описание]': jQuery('input[name=\'file\']').val(),
                    'link_page': location.href,
                    'module_name': 'Заказать расчёт',
                    'module_id': 44,
                    'form_success': 'Сообщение успешно отправлено'
                },
                success:function (data) {
                    jQuery('#calc_form').fadeOut();
                    jQuery('#thank_calc_form').fadeIn();
                    setTimeout(function(){
                        jQuery('.m_form,.over_all').fadeOut();
                    },3000);
                }
            });
        }
        
    });
    $('button[id^=\'button-upload\']').on('click', function() {
        var node = this;

        $('#form-upload').remove();

        $('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');

        $('#form-upload input[name=\'file\']').trigger('click');

        $('#form-upload input[name=\'file\']').on('change', function() {
            $.ajax({
                url: 'index.php?route=extension/module/sobfeedback/send',
                type: 'post',
                dataType: 'json',
                data: new FormData($(this).parent()[0]),
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function() {

                },
                complete: function() {

                },
                success: function(json) {
                    $('.text-danger').remove();

                    if (json['error']) {
                        $(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
                    }

                    if (json['success']) {
                        alert(json['success']);
                        $(node).parent().find('.success').html(json['file']);
                        $(node).parent().find('input').attr('value', json['file']);
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    // alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                    alert("Произошла ошибка при загрузке файла");
                }
            });
        });
    });

    jQuery('.m_link').click(function(){
        jQuery('.m_menu').show();
        jQuery('.m_menu').animate({'left':0},500);
        jQuery('.over_menu').fadeIn(500);
    });
    jQuery('.over_menu,.close-btn').click(function(){

        jQuery('.over_menu').fadeOut(500);
        jQuery('.m_menu').animate({'left':'-100%'},500);
        setTimeout(function(){
            jQuery('.m_menu').hide();
        },500);

    });
});


function Slider()
{
    var jcarousel = $('.jcarousel');
    
    // jcarousel.swipe({
    //     swipeLeft: function(event, direction, distance, duration, fingerCount) { jcarousel.jcarousel('scroll', '+=1'); },
    //     swipeRight: function(event, direction, distance, duration, fingerCount) { jcarousel.jcarousel('scroll', '-=1'); }
    // });

    jcarousel
    .on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
        width = carousel.innerWidth();

        if (width >= 600) {
            width = width / $(this).attr('data-col');
        } else if (width >= 350) {
            width = width;
        }

        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
    })
    .jcarousel({
        wrap: 'circular'
    });

    $('.jcarousel-control-prev')
    .jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-control-next')
    .jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    .on('click', function(e) {
        e.preventDefault();
    })
    .jcarouselPagination({
        perPage: 1,
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });
    $('.jcarousel').jcarouselSwipe();
    jcarousel.jcarouselSwipe();

}

