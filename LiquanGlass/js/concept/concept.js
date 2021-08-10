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

//all AOS animation
AOS.init();

// idea area
$(document).ready(function () {
  var isclick = [0, 0];

  if ($(window).width() < 766) {
    $(".leftbtn").click(function () {
      if (isclick[0] == 1) {
        click2();
        isclick[0] = 0;
      } else if (isclick[0] == 0) {
        isclick[0] = 1;
        $(".ideabottom_set").fadeIn(1000);
        $(".ideabottom_set").text(
          "「品質第一」是本企業生命的指導原則。這個原則要求我們：不論是個人或團隊，均需瞭解、預測並超越我們顧客的要求與期望。「品質第一」要求對所有的製程、產品以及服務做不斷的改進。我們的成功所憑藉的正是，我們所有員工能從經驗中學習、勇於求變，並全力投入。"
        );
        $(".ideabottom_set").css({
          "background-color": "black",
          color: "white",
        });
      }
    });

    function click2() {
      $(".ideabottom_set").slideUp();
    }

    $(".rightbtn").click(function () {
      if (isclick[1] == 1) {
        click4();
        isclick[1] = 0;
      } else if (isclick[1] == 0) {
        isclick[1] = 1;
        $(".ideabottom_phone").fadeIn(1000);
        $(".ideabottom_phone").text(
          "在全球化競爭下，社會追求經濟發展，但貧富差距加遽、生態環境破壞、民主發展停滯等現象，卻也接踵而至。較之理工、生醫領域藉著技術研發、產學合作參與經濟生產的學術實踐模式，人文社會科學則可透過概念創新與社會實踐，提出回應全球社經發展負面效應的有效解決方案，甚至從積極面走向更具行動力、更富含社會公益價值的創新模式。"
        );
        $(".ideabottom_phone").css({
          "background-color": "#07141E",
          color: "white",
        });
      }
    });
    function click4() {
      $(".ideabottom_phone").slideUp();
    }
  }

  if ($(window).width() > 767) {
    $(".leftbtn").click(function () {
      if (isclick[0] == 2) {
        isclick[1] = 0;
        isclick[0] = 1;
        $(".ideabottom_set").text(
          "「品質第一」是本企業生命的指導原則。這個原則要求我們：不論是個人或團隊，均需瞭解、預測並超越我們顧客的要求與期望。「品質第一」要求對所有的製程、產品以及服務做不斷的改進。我們的成功所憑藉的正是，我們所有員工能從經驗中學習、勇於求變，並全力投入。"
        );
      } else if (isclick[0] == 1) {
        $(".ideabottom_set").slideUp();
        isclick[0] = 0;
      } else if (isclick[0] == 0) {
        isclick[0] = 1;
        isclick[1] = 2;
        $(".ideabottom_set").fadeIn(1000);
        $(".ideabottom_set").text(
          "「品質第一」是本企業生命的指導原則。這個原則要求我們：不論是個人或團隊，均需瞭解、預測並超越我們顧客的要求與期望。「品質第一」要求對所有的製程、產品以及服務做不斷的改進。我們的成功所憑藉的正是，我們所有員工能從經驗中學習、勇於求變，並全力投入。"
        );
        $(".ideabottom_set").css({
          "background-color": "#07141E",
          color: "white",
        });
      }
    });
    $(".rightbtn").click(function () {
      if (isclick[1] == 2) {
        isclick[0] = 0;
        isclick[1] = 1;
        $(".ideabottom_set").text(
          "在全球化競爭下，社會追求經濟發展，但貧富差距加遽、生態環境破壞、民主發展停滯等現象，卻也接踵而至。較之理工、生醫領域藉著技術研發、產學合作參與經濟生產的學術實踐模式，人文社會科學則可透過概念創新與社會實踐，提出回應全球社經發展負面效應的有效解決方案，甚至從積極面走向更具行動力、更富含社會公益價值的創新模式。"
        );
      } else if (isclick[1] == 1) {
        $(".ideabottom_set").slideUp();
        isclick[1] = 0;
      } else if (isclick[1] == 0) {
        isclick[0] = 2;
        isclick[1] = 1;
        $(".ideabottom_set").fadeIn(1000);
        $(".ideabottom_set").text(
          "在全球化競爭下，社會追求經濟發展，但貧富差距加遽、生態環境破壞、民主發展停滯等現象，卻也接踵而至。較之理工、生醫領域藉著技術研發、產學合作參與經濟生產的學術實踐模式，人文社會科學則可透過概念創新與社會實踐，提出回應全球社經發展負面效應的有效解決方案，甚至從積極面走向更具行動力、更富含社會公益價值的創新模式。"
        );
        $(".ideabottom_set").css({
          "background-color": "#07141E",
          color: "white",
        });
      }
    });
  }

  var x = 0;

  $(".talkbox").click(function () {
    $("[name='past_page1']").attr("style", "display:block");
    page_appear();
    $("#cover").attr("style", "display:block");
  });
  $(".talkbox1").click(function () {
    $("[name='now_page1']").attr("style", "display:block");
    page_appear();
    $("#cover").attr("style", "display:block");
    x = 3;
  });

  $(".talkbox2").click(function () {
    $("[name='future_page1']").attr("style", "display:block");
    page_appear();
    $("#cover").attr("style", "display:block");
    x = 6;
  });
  $("#del_page_but").click(function () {
    $(".page").attr("style", "display:none");
    $(".page_but").attr("style", "display:none");
    $("#del_page_but").attr("style", "display:none");
    $("#cover").attr("style", "display:none");
    x = 0;
  });

  function page_appear() {
    $("#page_but_right").attr("style", "display:block");
    $("#del_page_but").attr("style", "display:block");
  }

  $("#page_but_left").click(function () {
    x--;
    switch (x) {
      case 0:
        $("[name='past_page1']").attr("style", "display:block");
        $("[name='past_page2']").attr("style", "display:none");
        $("#page_but_left").attr("style", "display:none");
        break;
      case 1:
        $("#page_but_right").attr("style", "display:block");
        $("[name='past_page2']").attr("style", "display:block");
        $("[name='past_page3']").attr("style", "display:none");
        break;

      case 3:
        $("[name='now_page1']").attr("style", "display:block");
        $("[name='now_page2']").attr("style", "display:none");
        $("#page_but_left").attr("style", "display:none");
        break;

      case 4:
        $("#page_but_right").attr("style", "display:block");
        $("[name='now_page2']").attr("style", "display:block");
        $("[name='now_page3']").attr("style", "display:none");
        break;

      case 6:
        $("[name='future_page1']").attr("style", "display:block");
        $("[name='future_page2']").attr("style", "display:none");
        $("#page_but_left").attr("style", "display:none");
        break;

      case 7:
        $("#page_but_right").attr("style", "display:block");
        $("[name='future_page2']").attr("style", "display:block");
        $("[name='future_page3']").attr("style", "display:none");
        break;
    }
  });
  $("#page_but_right").click(function () {
    x++;
    switch (x) {
      case 1:
        $("#page_but_left").attr("style", "display:block");
        $("[name='past_page2']").attr("style", "display:block");
        $("[name='past_page1']").attr("style", "display:none");
        break;

      case 2:
        $("[name='past_page3']").attr("style", "display:block");
        $("[name='past_page2']").attr("style", "display:none");
        $("#page_but_right").attr("style", "display:none");
        break;

      case 4:
        $("#page_but_left").attr("style", "display:block");
        $("[name='now_page2']").attr("style", "display:block");
        $("[name='now_page1']").attr("style", "display:none");
        break;

      case 5:
        $("[name='now_page3']").attr("style", "display:block");
        $("[name='now_page2']").attr("style", "display:none");
        $("#page_but_right").attr("style", "display:none");
        break;

      case 7:
        $("#page_but_left").attr("style", "display:block");
        $("[name='future_page2']").attr("style", "display:block");
        $("[name='future_page1']").attr("style", "display:none");
        break;

      case 8:
        $("[name='future_page3']").attr("style", "display:block");
        $("[name='future_page2']").attr("style", "display:none");
        $("#page_but_right").attr("style", "display:none");
        break;
    }
  });
});
