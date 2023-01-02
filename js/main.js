// JQuery
$(function () {
  let winW = $(window).width();
  $(window).resize(function () {
    winW = $(window).width();
    if (winW > 767) {
      $(".menuWrap").css({ display: "block" });
    } else if (winW < 768) {
      $(".menuWrap").css({ display: "none" });
    }
  });

  // menu show/hide (respon < 768)
  // click X or menu to close
  $(".menuWrap")
    .find("#menuClose")
    .click(function () {
      $(".menuWrap").fadeOut(300);
    });
  $(".bnwOnOff .burgerIcon").click(function () {
    $(".menuWrap").fadeToggle(300);
  });

  //   bnw On Off
  $(".bnwOnOff .bnwToggle").click(function () {
    $("body").toggleClass("bnw");
    $(".hdrWrap").toggleClass("bnw");
    $(".menuWrap").toggleClass("bnw");
    $(".container").toggleClass("bnw");
  });
});
