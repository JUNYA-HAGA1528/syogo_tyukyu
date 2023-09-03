
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

    //ハンバーガーメニューのリンクをクリックしたら、メニューが閉じてスクロール
    $('#header__sp-nav a[href]').on('click', function(event) {
        $('.js-hamburger').trigger('click');
    });

   // ハンバーガーメニューが開いた際に、背景を固定する
    $('.js-hamburger').on('click', function () {
        if ($(this).hasClass('is-open')) {
            // メニューが開いている場合、bodyに固定位置を適用
            $('body').addClass('menu-open');
        } else {
            // メニューが閉じている場合、bodyから固定位置を解除
            $('body').removeClass('menu-open');
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


    //Campaign swiper
    var swiper = new Swiper(".js-works-swiper", {
      
        slidesPerView: "auto", //スライド枚数 1.26枚
        spaceBetween: 20,
        centeredSlides: true, // 中央寄せにする
        slidesPerView: 1.5,
        initialSlide: 2,
    
        //〇〇以上の画面幅で〇〇枚のスライドと幅が〇〇pxと設定する
        breakpoints: { 
            768: {
                spaceBetween: 56,
                centeredSlides: true, // 中央寄せにする
                slidesPerView: "auto",
            },
        },
   
        speed: 1000, 
        loop: true, 
        autoplay: {
            delay: 5000, 
            disableOnInteraction: false 
        },
        
    });
});
