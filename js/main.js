//****** スクロールすると画像が拡大 ******//
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
    //スクロール値を定義
    //header-imgの背景
    $('#mainvisuals').css({
    transform: 'scale('+(100 + scroll/10)/100+')',
    //スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
    top: -(scroll/50)  + "%",
    //スクロール値を代入してtopの位置をマイナスにずらす
  });
});

//****** ＳＰ時、スクロールすると画像が縮小 ******//
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
    //スクロール値を定義
    //header-imgの背景
    $('#mainvisuals-sp').css({
    transform: 'scale('+(100 - scroll/30)/100+')',
    //スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
    top: -(scroll/50)  + "%",
    //スクロール値を代入してtopの位置をマイナスにずらす
  });
});

//****** ハンバーガー押すとメニューが上から出てくる ******//
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.menu').addClass('active');
      } else {
          $('.menu').removeClass('active');
      }
  });
});

//****** メニュー内のボタンを押下するとメニューが消える ******//
$(function() {
  $('.menu-btn').click(function() {
          $('.menu').removeClass('active');
          $('.hamburger').removeClass('active');
      })
});

//****** スクロールすると下からふわっと出てくる ******//
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('fadein');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

//****** タイトル、三本線メニュー スクロールするとふわっと出てくる ******//
var window_h = $(window).height();
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $(".hamburger, .h-title").each(function() {
    var elem_pos = $(this).offset().top;
    if (scroll_top >= 800) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

//****** Inquiry スクロールすると横からふわっと出てくる ******//
var window_h = $(window).height();
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $(".scroll_right").each(function() {
    var elem_pos = $(this).offset().top;
    if (scroll_top >= 4000) {
      $(this).removeClass("fadein");
    } else if (scroll_top >= 1200) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

//****** Accessにて背景画面を出現させる ******//
$(function(){
  $('#access').on('inview', function(event, isInView) {
      if(isInView) { 
          $('.g-img').addClass('acss');
          $('.main').addClass('acss');
          $('#mainvisuals').addClass('acss');
          $('.bg-flower').addClass('acss');
      } else {
        $('.g-img').removeClass('acss');
        $('.main').removeClass('acss');
        $('#mainvisuals').removeClass('acss');
        $('.bg-flower').removeClass('acss');
      }
  });
});

$(function(){
  $('.b-cntct').on('inview', function(event, isInView) {
      if(isInView) { 
          $('.main').addClass('cntct');
      } else {
        // $('.g-img').addClass('acss');
        $('.main').removeClass('cntct');
        // $('#mainvisuals').addClass('acss');
        // $('.bg-flower').addClass('acss');
      }
  });
});

$(function(){
  $('.dummy').on('inview', function(event, isInView) {
      if(isInView) { 
          $('#mainvisuals').removeClass('acss');
      }
  });
});

// $('.inqbtn').click(function () {
// // $('.inquiry').click(function () {
//   $('#mainvisuals').removeClass('acss');
//   // $('#mainvisuals').addClass('acss2');
//   $('.main').removeClass('acss');
//   $('.main').removeClass('cntct');
//   $('h1').addClass('acss');
//   // $('#mainvisuals').addClass('acss');
// });

// $('.inquiry').on('click', function () {
//   // $('h1').addClass('change-color');
//   $('#mainvisuals').removeClass('acss');
//   $('h1').addClass('acss');
// });

//****** Accessにて背景画面を出現させる ******//
// var scroll;
// var winH = $(window).height();
// var objTop = $('.access').offset().top;
// $(window).on('scroll', function(){
//   scroll = $(window).scrollTop();
//   if(scroll >= objTop - winH) {
//     //ここに処理
//     // $('.g-img').addClass('acss');
//     $(this).addClass('acss');

//     // } else {
//     //   $('.g-img').removeClass("acss");
//     }
// });

$(function(){
  $('.dummy').on('inview', function(event, isInView) {
      if(isInView) { 
          // $('.g-img').removeClass('acss');
          // $('.main').removeClass('acss');
          $('#mainvisuals').removeClass('acss');
          // $('.bg-flower').removeClass('acss');
          // $('.main').removeClass('cntct');
      // } else {
      //   $('.g-img').addClass('acss');
      //   $('.main').addClass('acss');
      //   $('#mainvisuals').addClass('acss');
        // $('.bg-flower').addClass('acss');
      }
  });
});