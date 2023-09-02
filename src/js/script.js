
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    //ハンバーガーメニュー
    $('.js-hamburger').on('click', function () {
        if ($('.js-hamburger').hasClass('is-open')) {
            $('.js-drawer-menu').removeClass("is-open");
            $(this).removeClass('is-open');
        } else {
            $('.js-drawer-menu').addClass("is-open");
            $(this).addClass('is-open');
        }
    });

    
    //accordion
    $(function () {
        $(".accordion__content").css("display", "block");
        $(".accordion__title").addClass("show");
        $(".accordion__title").on("click", function () {
            $(this).next().slideToggle();
            $(this).toggleClass("show");
        });
    });
});
