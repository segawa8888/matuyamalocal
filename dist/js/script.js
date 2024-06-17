jQuery(function ($) { // $はjQueryを表す

  // c-nav

$(document).ready(function() {
    $('.c-nav-bar').on('click', function() {
      $('.c-space').toggleClass('c-hidden-space');
      $('.c-nav').toggleClass('c-hidden-nav');
      $('.c-admin-nav').toggleClass('c-hidden-admin-nav');
      $('.c-nav-bar').toggleClass('c-hidden-nav-bar');
      $('.c-header').toggleClass('c-hidden-header');
      $('.c-main').toggleClass('c-hidden-main');
      $('.c-footer').toggleClass('c-hidden-footer');
      $('.c-floating').toggleClass('c-hidden-floating');
      $('.p-video-mv').toggleClass('p-hidden-video-mv');
    });

$(window).scroll(function(){
  if($(window).scrollTop() > 80){
  $('.c-header').addClass('c-header-fixed');
  }else{
    $('.c-header').removeClass('c-header-fixed');
  }
});
  
});

// c-nav-general accordion 

$(function () {
  $(".js-c-nav-accordion").on("click", function () {
    // 次の要素の表示/非表示を切り替える
    $(this).next().slideToggle(300);

    // クリックされた要素に open クラスをトグル
    $(this).toggleClass("open", 300);

    // クリックされた要素の親要素に active クラスをトグル
    $(this).parent().toggleClass("active", 300);
  });
});


// c-search

$(".c-search").click(function () {
    $(".c-search-nav").toggleClass('open');
});

$(".c-search-nav a").click(function () {
    $(".c-search-nav").removeClass('open');
});


// p-top-swiper MV

const topSwiper = new Swiper(".p-top-mv", {
  loop: true,
  autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// p-top-video

document.querySelectorAll('.p-top-video__swiper').forEach(function(swiperContainer) {
  new Swiper(swiperContainer, {
    spaceBetween: 16,
    slidesPerView: 1.5,
    speed:500,
    SimulateTouch: true,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 22,
      },
    },
    navigation: {
      nextEl: swiperContainer.querySelector('.p-top-video-swiper-next'),
      prevEl: swiperContainer.querySelector('.p-top-video-swiper-prev'),
    },
    on: {
      init: function () {
        this.navigation.prevEl.style.display = 'none';
      },
      slideChange: function () {
        let prevEl = this.navigation.prevEl;
        let nextEl = this.navigation.nextEl;

        prevEl.style.display = this.isBeginning ? 'none' : 'flex';
        nextEl.style.display = this.isEnd ? 'none' : 'flex';
      }
    }
  });
});


// p-top-swiper 縦長

const videoSwiper02 = new Swiper(".swiper02", {
  spaceBetween: 26,
  slidesPerView: 1.5,
  speed:500,
  SimulateTouch: true,
  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
  },
  navigation: {
    nextEl: ".p-top-video-swiper-next",
    prevEl: ".p-top-video-swiper-prev",
  },
  on: {
    init: function () {
      // 初期状態で prev ボタンを非表示にする
      document.querySelector('.p-top-video-swiper-prev').style.display = 'none';
    },
    slideChange: function () {
      let prevEl = document.querySelector('.p-top-video-swiper-prev');
      let nextEl = document.querySelector('.p-top-video-swiper-next');

      // 最初のスライドの場合
      if (this.isBeginning) {
        prevEl.style.display = 'none';
      } else {
        prevEl.style.display = 'flex';
      }

      // 最後のスライドの場合
      if (this.isEnd) {
        nextEl.style.display = 'none';
      } else {
        nextEl.style.display = 'flex';
      }
    }
  }
});

// p-register-form-plan radio

// 'p-register-form-plan-input'クラスを持つラジオボタンを取得
const btns = document.querySelectorAll('.p-register-form-plan-input');

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    // 同じクラスを持つ他のラジオボタンの親要素のボーダーを初期化
    btns.forEach(otherBtn => {
      otherBtn.parentNode.style.border = "none";
    });

    // 選択されたラジオボタンの親要素にボーダーを追加
    if (btn.checked) {
      btn.parentNode.style.border = "2px solid #2196E2";
    }
  });
});



// c-floating

$(function(){
  $(window).on("scroll", function() {
    const bodyHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footerHeight = $("#footer").innerHeight();

    if (bodyHeight - scrollPosition <= footerHeight) {
      $("#js_floatingBanner").css({
        position: "absolute",
        bottom: 0
      });
    } else {
      $("#js_floatingBanner").css({
        position: "fixed",
        bottom: 0
      });
    }
  });
});

// });


});
