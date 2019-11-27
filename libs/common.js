 jQuery(function($){
     $("#phone").mask("+7 (999) 999-9999");
     $(".parts__form--phone").mask("+7 (999) 999-9999");

     $('.nav__insideList').children("a").on('click', function() {
        $('#nav__toggle').prop('checked',false);
    })
        
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn(800)
}).eq(0).addClass("active");

});