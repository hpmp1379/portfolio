// JQuery
$(function () {
  let n = 0;
  let winH = $(window).height();
  let winW = $(window).width();
  $(window).resize(function () {
    winH = $(window).height();
    winW = $(window).width();
    if (winW > 767) {
      $(".menuWrap").fadeIn(300);
    }
  });

  $(".menuWrap")
    .find("#menuClose")
    .click(function () {
      $(".menuWrap").fadeOut(300);
    });
  // $('').find('').click(function(){
  //     $('').fadeIn(300);
  // })

  //   bnw On Off
  $(".bnwOnOff").click(function () {
    $("body").toggleClass("bnw");
    $(".hdrWrap").toggleClass("bnw");
    $(".menuWrap").toggleClass("bnw");
    $(".container").toggleClass("bnw");
  });
});
