$(document).ready(function() {
  //城市选择页面
  $(".citylist li").click(function() {
    var cityname = $(this).text();
    $(".city-btn").text(cityname);
    $(".current-city").text(cityname);

  });
  $(".citylist li,.off-icon").click(function() {
    $(".selectCity").addClass("hide");
    $(".md-header,.showing,.nav").removeClass("hide");
    $('.showing,.upcoming').scrollTop(0);
  });
  $(".city-btn").click(function() {
    $(".selectCity").removeClass("hide");
    $(".md-header,.showing,.upcoming,.nav").addClass("hide");
  });

  //列表页面切换
  $(".reying").click(function() {
    $(".showing").removeClass("hide");
    $(".upcoming").addClass("hide");
  });
  $(".shangying").click(function() {
    $(".showing").addClass("hide");
    $(".upcoming").removeClass("hide");
  });
  $(".header-tab>ul>li").click(function() {
    $(this)
      .css("color", "#ff4d64")
      .siblings()
      .css("color", "#777");
  });
  $(".reying").click(function() {
    var trans = "translate3d(0px, 0px, 0px)";
    $(".tab-line").css("transform", trans);
  });
  $(".shangying").click(function() {
    var rule = $(this).width();
    var trans = "translate3d(" + rule + "px, 0px, 0px)";
    $(".tab-line").css("transform", trans);
  });

  //  焦点图

  $(".banner-wrap").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    titCell: ".hd ul li",
    depayTime: 2500,
    trigger: "mouseover"
  });

  //底部导航
  $(".nav-wrap>a").click(function(param) {
    $(this)
      .css("color", "#ff4d64")
      .siblings()
      .css("color", "#777");
  });
  $(".hot-wrap").click(function() {
    $(".hot").css("background-image", "url(./image/reying-2.png)");
    $(".movie").css("background-image", "url(./image/yingyuan-1.png)");
    $(".self").css("background-image", "url(./image/wode-1.png)");
  });
  $(".movieicon-wrap").click(function() {
    $(".hot").css("background-image", "url(./image/reying-1.png)");
    $(".movie").css("background-image", "url(./image/yingyuan-2.png)");
    $(".self").css("background-image", "url(./image/wode-1.png)");
  });
  $(".self-wrap").click(function() {
    $(".hot").css("background-image", "url(./image/reying-1.png)");
    $(".movie").css("background-image", "url(./image/yingyuan-1.png)");
    $(".self").css("background-image", "url(./image/wode-2.png)");
  });
});
