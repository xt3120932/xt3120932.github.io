(function ($) {
  "use strict";
  var nav_offset_top = $("header").height() + 50;
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
  //* Navbar Fixed
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
})(jQuery);

$(document).ready(function () {
  //================== panel area start ==================

  function set_color_phone() {
    if ($(window).width() > 511) {
      $(".phone_color").append('<p id="ap_color">顏色</p>');
      $(".phone_color").append('<div id="color_wrap"></div>');
      $("#color_wrap").append('<button class="co_set color1"></button>');
      $("#color_wrap").append('<button class="co_set color2"></button>');
      $("#color_wrap").append('<button class="co_set color3"></button>');
      $("#color_wrap").append('<button class="co_set color4"></button>');
      $("#color_wrap").append('<button class="co_set color5"></button>');
      $("#color_wrap").append('<button class="co_set color6"></button>');
      $("#ap_color").css({
        position: "absolute",
        top: "3%",
        left: "0%",
      });
      $("#color_wrap").css({
        position: "absolute",
        top: "50%",
        left: "0%",
        width: "50%",
        "text-align": "center",
      });
      $(".color1").css({
        "background-color": "#EA0000",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".color2").css({
        "background-color": "#009100",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".color3").css({
        "background-color": "#E1E100",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".color4").css({
        "background-color": "#7700FF",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".color5").css({
        "background-color": "#A20055",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".color6").css({
        "background-color": "	#FF00FF",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".phone_color").append('<p id="ap_pattern">花紋</p>');
      $(".phone_color").append('<div id="pattern_wrap"></div>');
      $("#pattern_wrap").append('<button class="pa_set pattern1">1</button>');
      $("#pattern_wrap").append('<button class="pa_set pattern2">2</button>');
      $("#pattern_wrap").append('<button class="pa_set pattern3">3</button>');
      $("#ap_pattern").css({
        position: "absolute",
        top: "3%",
        left: "50%",
      });
      $("#pattern_wrap").css({
        position: "absolute",
        top: "40%",
        right: "0%",
        width: "50%",
        "text-align": "center",
      });
      $(".pa_set").css({
        "background-color": "white",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
      });
    }
    if ($(window).width() < 510) {
      $(".phone_color").append('<p id="ap_color">顏色</p>');
      $(".phone_color").append('<div id="color_wrap"></div>');
      $("#color_wrap").append('<button class="co_set color1"></button>');
      $("#color_wrap").append('<button class="co_set color2"></button>');
      $("#color_wrap").append('<button class="co_set color3"></button>');
      $("#ap_color").css({
        position: "absolute",
        top: "3%",
        left: "0%",
        "font-size": "8px",
      });
      $("#color_wrap").css({
        position: "absolute",
        top: "40%",
        left: "0%",
        width: "50%",
        "text-align": "center",
      });
      $(".color1").css({
        "background-color": "#EA0000",
        height: "15px",
        width: "15px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "3px",
        cursor: "pointer",
      });
      $(".color2").css({
        "background-color": "#009100",
        height: "15px",
        width: "15px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "3px",
        cursor: "pointer",
      });
      $(".color3").css({
        "background-color": "#E1E100",
        height: "15px",
        width: "15px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "3px",
        cursor: "pointer",
      });
      $(".phone_color").append('<p id="ap_pattern">花紋</p>');
      $(".phone_color").append('<div id="pattern_wrap"></div>');
      $("#pattern_wrap").append('<button class="pa_set pattern1">1</button>');
      $("#pattern_wrap").append('<button class="pa_set pattern2">2</button>');
      $("#pattern_wrap").append('<button class="pa_set pattern3">3</button>');
      $("#ap_pattern").css({
        position: "absolute",
        top: "3%",
        left: "50%",
        "font-size": "8px",
      });
      $("#pattern_wrap").css({
        position: "absolute",
        top: "30%",
        right: "0%",
        width: "50%",
        "text-align": "center",
      });
      $(".pa_set").css({
        "background-color": "white",
        height: "15px",
        width: "15px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "3px",
        "font-size": "6px",
      });
    }
  }
  function set_color() {
    $("#btncustom").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").append("<p>顏色</p>");
      $("#panelid").append('<div id="color_wrap"></div>');
      $("#color_wrap").append('<button class="co_set color1"></button>');
      $("#color_wrap").append('<button class="co_set color2"></button>');
      $("#color_wrap").append('<button class="co_set color3"></button>');
      $("#color_wrap").append('<button class="co_set color4"></button>');
      $("#color_wrap").append('<button class="co_set color5"></button>');
      $("#color_wrap").append('<button class="co_set color6"></button>');
      $("#color_wrap").css({
        width: "100%",
        "text-align": "center",
      });
      $(".color1").css({
        "background-color": "#EA0000",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
      });
      $(".color2").css({
        "background-color": "#009100",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
      });
      $(".color3").css({
        "background-color": "#E1E100",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
      });
      $(".color4").css({
        "background-color": "#7700FF",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".color5").css({
        "background-color": "#A20055",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $(".color6").css({
        "background-color": "	#FF00FF",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
        cursor: "pointer",
      });
      $("#panelid").append("<hr>");
      $("#panelid").append("<p>花紋</p>");
      $("#panelid").append('<div id="pattern_wrap"></div>');
      $("#pattern_wrap").append('<button class="pa_set pattern1">1</button>');
      $("#pattern_wrap").append('<button class="pa_set pattern2">2</button>');
      $("#pattern_wrap").append('<button class="pa_set pattern3">3</button>');
      $("#pattern_wrap").css({
        width: "100%",
        "text-align": "center",
      });
      $(".pa_set").css({
        "background-color": "white",
        height: "25px",
        width: "25px",
        "border-width": "0px",
        "border-radius": "20px",
        margin: "5px",
      });
    });
  }

  $(document).on("click", ".color1", function () {
    $(".color_control").css("display", "block");
    $(".color_control").attr("type", "color");
    $(".color_control").attr("value", "#EA0000");
  });
  $(document).on("click", ".color2", function () {
    $(".color_control").css("display", "block");
    $(".color_control").attr("type", "color");
    $(".color_control").attr("value", "#009100");
  });
  $(document).on("click", ".color3", function () {
    $(".color_control").css("display", "block");
    $(".color_control").attr("type", "color");
    $(".color_control").attr("value", "#E1E100");
  });

  $(document).on("click", ".color4", function () {
    $(".color_control").css("display", "block");
    $(".color_control").attr("type", "color");
    $(".color_control").attr("value", "#7700FF");
  });
  $(document).on("click", ".color5", function () {
    $(".color_control").css("display", "block");
    $(".color_control").attr("type", "color");
    $(".color_control").attr("value", "#A20055");
  });
  $(document).on("click", ".color6", function () {
    $(".color_control").css("display", "block");
    $(".color_control").attr("type", "color");
    $(".color_control").attr("value", "#FF00FF");
  });
  $(document).on("click", ".pattern1", function () {
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/01.jpg");
  });
  $(document).on("click", ".pattern2", function () {
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/02.jpg");
  });
  $(document).on("click", ".pattern3", function () {
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/03.jpg");
  });

  //================== panel area end ==================

  //================== product menu start ==================
  var i = 0;
  page();
  $("#bta").click(function () {
    $("#pr_a").empty(".page_set");
    for (i = 0; i <= 54; i++) {
      $("#pr_a").prepend(
        ' <div class="page_set glass col-lg-2"><img class="p_img" src="/img/LiquanGlass_image/動物造型/利銓-動物造型_200813.jpg" /></div>'
      );
    }
    page();
  });

  $("#btb").click(function () {
    $("#pr_a").empty(".page_set");
    for (i = 0; i <= 54; i++) {
      $("#pr_a").prepend(
        '<div class="page_set pattern col-lg-2"><img class="p_img" src="/img/LiquanGlass_image/器皿/利銓-器皿類_200813_101.jpg" /></div>'
      );
    }
    page();
  });
  $("#btc").click(function () {
    $("#pr_a").empty(".page_set");
    for (i = 0; i <= 54; i++) {
      $("#pr_a").prepend(
        '<div class="page_set light col-lg-2"><img class="p_img" src="/img/LiquanGlass_image/器皿/利銓-器皿類_200813_134.jpg" /></div>'
      );
    }
    page();
  });
  $("#btd").click(function () {
    $("#pr_a").empty(".page_set");
    for (i = 0; i <= 55; i++) {
      $("#pr_a").prepend(
        '<div class="page_set other col-lg-2"><img class="p_img" src="/img/LiquanGlass_image/藝術花容器/利銓-藝術花器（容器）_200813_7.jpg" /></div>'
      );
    }
    page();
  });
  //================== product menu end ==================

  //================== product List area start==================
  $(document).on("click", ".glass", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );

    $(".color_control").attr("type", "");
    $(".p_v").attr(
      "src",
      "/img/LiquanGlass_image/動物造型/利銓-動物造型_200813.jpg"
    );
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", ".pattern", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );

    $(".color_control").attr("type", "");
    $(".p_v").attr(
      "src",
      "/img/LiquanGlass_image/器皿/利銓-器皿類_200813_101.jpg"
    );
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", ".light", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr(
      "src",
      "/img/LiquanGlass_image/器皿/利銓-器皿類_200813_134.jpg"
    );
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );

    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", ".other", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr(
      "src",
      "/img/LiquanGlass_image/藝術花容器/利銓-藝術花器（容器）_200813_7.jpg"
    );
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });

  //==================================== product List area end =========================
  //==================================== test area ====================================

  $(document).on("click", "#pr_1", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/01.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_2", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );

    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/02.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_3", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/03.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );

    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_4", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/04.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_5", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/05.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_6", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );

    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/06.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_7", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/07.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );

    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_8", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/08.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_9", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/09.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );

    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  $(document).on("click", "#pr_10", function () {
    $(".video-container").remove();
    $("#panelid").empty(".panel_content");
    $("#panelid").prepend(
      "<h3>商品資訊</h3>",
      "<li>品名 :</li>",
      "<li>編號 :</li>",
      "<li>價格 :</li>",
      "<hr>",
      "<h3>商品介紹</h3>",
      "<li>內容</li>"
    );
    $(".color_control").attr("type", "");
    $(".p_v").attr("src", "/img/LiquanGlass_image/used/10.jpg");
    $("html, body").animate(
      {
        scrollTop: $(".product_view").offset().top,
      },
      900
    );
    $("#btncontent").click(function () {
      $("#panelid").empty(".panel_content");
      $("#panelid").prepend(
        "<h3>商品資訊</h3>",
        "<li>品名 :</li>",
        "<li>編號 :</li>",
        "<li>價格 :</li>",
        "<hr>",
        "<h3>商品介紹</h3>",
        "<li>內容</li>"
      );
    });
    set_color();

    if ($(window).width() < 769) {
      $(".phone_color").empty("#color_wrap");
      $(".phone_color").empty("#pattern_wrap");
      set_color_phone();
    }
  });
  //==================================== test area ====================================
  //==================================== page start ====================================
  function page() {
    var paginate = {
      startPos: function (pageNumber, perPage) {
        // determine what array position to start from
        // based on current page and # per page
        return pageNumber * perPage;
      },

      getPage: function (items, startPos, perPage) {
        // declare an empty array to hold our page items
        var page = [];

        // only get items after the starting position
        items = items.slice(startPos, items.length);

        // loop remaining items until max per page
        for (var i = 0; i < perPage; i++) {
          page.push(items[i]);
        }

        return page;
      },

      totalPages: function (items, perPage) {
        // determine total number of pages
        return Math.ceil(items.length / perPage);
      },

      createBtns: function (totalPages, currentPage) {
        // create buttons to manipulate current page
        var pagination = $('<div class="pagination" />');

        // add a "first" button
        pagination.append('<span class="pagination-button">&laquo;</span>');

        // add pages inbetween
        for (var i = 1; i <= totalPages; i++) {
          // truncate list when too large
          if (totalPages > 5 && currentPage !== i) {
            // if on first two pages
            if (currentPage === 1 || currentPage === 2) {
              // show first 5 pages
              if (i > 5) continue;
              // if on last two pages
            } else if (
              currentPage === totalPages ||
              currentPage === totalPages - 1
            ) {
              // show last 5 pages
              if (i < totalPages - 4) continue;
              // otherwise show 5 pages w/ current in middle
            } else {
              if (i < currentPage - 2 || i > currentPage + 2) {
                continue;
              }
            }
          }

          // markup for page button
          var pageBtn = $('<span class="pagination-button page-num" />');

          // add active class for current page
          if (i == currentPage) {
            pageBtn.addClass("active");
          }

          // set text to the page number
          pageBtn.text(i);

          // add button to the container
          pagination.append(pageBtn);
        }

        // add a "last" button
        pagination.append($('<span class="pagination-button">&raquo;</span>'));

        return pagination;
      },

      createPage: function (items, currentPage, perPage) {
        // remove pagination from the page
        $(".pagination").remove();

        // set context for the items
        var container = items.parent(),
          // detach items from the page and cast as array
          items = items.detach().toArray(),
          // get start position and select items for page
          startPos = this.startPos(currentPage - 1, perPage),
          page = this.getPage(items, startPos, perPage);

        // loop items and readd to page
        $.each(page, function () {
          // prevent empty items that return as Window
          if (this.window === undefined) {
            container.append($(this));
          }
        });

        // prep pagination buttons and add to page
        var totalPages = this.totalPages(items, perPage),
          pageButtons = this.createBtns(totalPages, currentPage);

        container.after(pageButtons);
      },
    };

    // stuff it all into a jQuery method!
    $.fn.paginate = function (perPage) {
      var items = $(this);

      // default perPage to 5
      if (isNaN(perPage) || perPage === undefined) {
        perPage = 5;
      }

      // don't fire if fewer items than perPage
      if (items.length <= perPage) {
        return true;
      }

      // ensure items stay in the same DOM position
      if (items.length !== items.parent()[0].children.length) {
        items.wrapAll('<div class="pagination-items" />');
      }

      // paginate the items starting at page 1
      paginate.createPage(items, 1, perPage);

      // handle click events on the buttons
      $(document).on("click", ".pagination-button", function (e) {
        // get current page from active button
        var currentPage = parseInt($(".pagination-button.active").text(), 10),
          newPage = currentPage,
          totalPages = paginate.totalPages(items, perPage),
          target = $(e.target);

        // get numbered page
        newPage = parseInt(target.text(), 10);
        if (target.text() == "«") newPage = 1;
        if (target.text() == "»") newPage = totalPages;

        // ensure newPage is in available range
        if (newPage > 0 && newPage <= totalPages) {
          paginate.createPage(items, newPage, perPage);
        }
      });
    };

    if ($(window).width() < 767) {
      $(".page_set").paginate(4);
    }
    if ($(window).width() < 777) {
      $(".page_set").paginate(6);
    }
    if ($(window).width() < 784) {
      $(".page_set").paginate(6);
    }
    if ($(window).width() < 992) {
      $(".page_set").paginate(9);
    }
    if ($(window).width() < 999) {
      $(".page_set").paginate(15);
    }
    if ($(window).width() > 1000) {
      $(".page_set").paginate(15);
    }
  }

  //==================================== page end ====================================

  //==================================== panel btn start =============================

  var isclick = 0;
  if ($(window).width() < 500) {
    isclick = 0;
    $(".btn_control").click(function () {
      if (isclick == 0) {
        $(".btn_control").text("<");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "0%",
          },
          530
        );
        isclick = 1;
      } else if (isclick == 1) {
        $(".btn_control").text(">");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "19%",
          },
          550
        );
        isclick = 0;
      }
    });
  }
  if ($(window).width() < 769) {
    isclick = 2;
    $(".btn_control").click(function () {
      if (isclick == 2) {
        $(".btn_control").text("<");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "0%",
          },
          530
        );
        isclick = 3;
      } else if (isclick == 3) {
        $(".btn_control").text(">");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "19%",
          },
          550
        );
        isclick = 2;
      }
    });
  }

  if ($(window).width() < 1200) {
    isclick = 4;
    $(".btn_control").click(function () {
      if (isclick == 4) {
        $(".btn_control").text("<");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "0%",
          },
          530
        );

        isclick = 5;
      } else if (isclick == 5) {
        $(".btn_control").text(">");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "19%",
          },
          550
        );
        isclick = 4;
      }
    });
  }
  if ($(window).width() > 1201) {
    isclick = 6;
    $(".btn_control").click(function () {
      if (isclick == 6) {
        $(".btn_control").text("<");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "0%",
          },
          530
        );

        isclick = 7;
      } else if (isclick == 7) {
        $(".btn_control").text(">");
        $(".product_sidepanel").animate(
          {
            width: "toggle",
          },
          550
        );
        $(".btn_control").animate(
          {
            right: "24%",
          },
          550
        );
        isclick = 6;
      }
    });
  }
  //==================================== panel btn start =============================

  // $(window).resize(function () {
  //     window.location.reload();
  // });
});
