$(document).ready(function () {
  // start manage
  $("div.manage div.header li").click(function () {
    $(this).addClass("active");
    $(this).nextAll().removeClass("active");
    $(this).prevAll().removeClass("active");
  });

  $("div.manage div.header li.inner-fly").click(function () {
    $("div.bg-banner img.inner-fly").addClass("active");
    $("div.bg-banner img.inner-fly").nextAll().removeClass("active");
    $("div.bg-banner img.inner-fly").prevAll().removeClass("active");
    $("div.manage div.body div.inner-fly").addClass("active");
    $("div.manage div.body div.inner-fly").nextAll().addClass("-z-10");
    $("div.manage div.body div.inner-fly").nextAll().removeClass("active");
  });
  $("div.manage div.header li.foregin-fly").click(function () {
    $("div.bg-banner img.foregin-fly").addClass("active");
    $("div.bg-banner img.foregin-fly").nextAll().removeClass("active");
    $("div.bg-banner img.foregin-fly").prevAll().removeClass("active");
    $("div.manage div.body div.foregin-fly").addClass("active");
    $("div.manage div.body div.foregin-fly").removeClass("-z-10");
    $("div.manage div.body div.foregin-fly").prev().removeClass("active");
    $("div.manage div.body div.foregin-fly").nextAll().removeClass("active");
    $("div.manage div.body div.foregin-fly").nextAll().addClass("-z-10");
  });
  $("div.manage div.header li.train").click(function () {
    $("div.bg-banner img.train").addClass("active");
    $("div.bg-banner img.train").nextAll().removeClass("active");
    $("div.bg-banner img.train").prevAll().removeClass("active");
    $("div.manage div.body div.train").addClass("active");
    $("div.manage div.body div.train").removeClass("-z-10");
    $("div.manage div.body div.train").prevAll().removeClass("active");
    $("div.manage div.body div.train").nextAll().removeClass("active");
    $("div.manage div.body div.train").nextAll().addClass("-z-10");
  });
  $("div.manage div.header li.bus").click(function () {
    $("div.bg-banner img.bus").addClass("active");
    $("div.bg-banner img.bus").nextAll().removeClass("active");
    $("div.bg-banner img.bus").prevAll().removeClass("active");
    $("div.manage div.body div.bus").addClass("active");
    $("div.manage div.body div.bus").removeClass("-z-10");
    $("div.manage div.body div.bus").prevAll().removeClass("active");
    $("div.manage div.body div.bus").nextAll().removeClass("active");
    $("div.manage div.body div.bus").nextAll().addClass("-z-10");
  });
  $("div.manage div.header li.tour").click(function () {
    $("div.bg-banner img.tour").addClass("active");
    $("div.bg-banner img.tour").nextAll().removeClass("active");
    $("div.bg-banner img.tour").prevAll().removeClass("active");
    $("div.manage div.body div.tour").addClass("active");
    $("div.manage div.body div.tour").removeClass("-z-10");
    $("div.manage div.body div.tour").prevAll().removeClass("active");
    $("div.manage div.body div.tour").nextAll().removeClass("active");
    $("div.manage div.body div.tour").nextAll().addClass("-z-10");
  });
  $("div.manage div.header li.hotel").click(function () {
    $("div.bg-banner img.hotel").addClass("active");
    $("div.bg-banner img.hotel").nextAll().removeClass("active");
    $("div.bg-banner img.hotel").prevAll().removeClass("active");
    $("div.manage div.body div.hotel").addClass("active");
    $("div.manage div.body div.hotel").removeClass("-z-10");
    $("div.manage div.body div.hotel").prevAll().removeClass("active");
    $("div.manage div.body div.hotel").nextAll().removeClass("active");
    $("div.manage div.body div.hotel").nextAll().addClass("-z-10");
  });
  $("div.manage div.header li.villa").click(function () {
    $("div.bg-banner img.villa").addClass("active");
    $("div.bg-banner img.villa").nextAll().removeClass("active");
    $("div.bg-banner img.villa").prevAll().removeClass("active");
  });
  $("div.manage div.header li.travel-tent").click(function () {
    $("div.bg-banner img.villa").addClass("active");
    $("div.bg-banner img.villa").nextAll().removeClass("active");
    $("div.bg-banner img.villa").prevAll().removeClass("active");
    $("div.manage div.body div.travel-tent").addClass("active");
    $("div.manage div.body div.travel-tent").removeClass("-z-10");
    $("div.manage div.body div.travel-tent").prevAll().removeClass("active");
    $("div.manage div.body div.travel-tent").nextAll().removeClass("active");
    $("div.manage div.body div.travel-tent").nextAll().addClass("-z-10");
  });

  $(
    "div.manage div.body div.details div.three-side button div.dropdown div.button"
  ).click(function () {
    $(this).before(
      "<div class='contain flex flex-col pb-[10px] border-t-2 pt-[30px] mt-[20px]'><div class='edit'><p class='text-lg mb-[20px] font-bold float-right'>اتاق جدید</p><i class='fa fa-trash float-left text-xl text-red-500'></i><span class='text-lg text-red-500 float-left font-bold ml-[10px]'>حذف</span></div><li class='flex items-baseline justify-between big'><div class='span'><span class='title ml-[10px]'>بزرگسالان</span><span class='description text-gray-500'>(12 سال به بالا)</span></div><div class='counter flex items-center justify-between'><a href='#' class='increase fa fa-plus bg-blue-500 p-[5px] px-[8px] rounded-[5px] text-white transition-colors duration-200 hover:bg-blue-600'></a><span class='number mx-[10px]'>1</span><a href='#' class='decrease fa fa-minus bg-blue-500 p-[5px] px-[8px] rounded-[5px] text-white cursor-not-allowed'></a></div></li><li class='flex items-baseline justify-between medium mt-[30px]'><div class='span'><span class='title ml-[10px]'>کودک</span><span class='description text-gray-500'>(2 تا 12 سال)</span></div><div class='counter flex items-center justify-between'><a href='#' class='increase fa fa-plus bg-blue-500 p-[5px] px-[8px] rounded-[5px] text-white transition-colors duration-200 hover:bg-blue-600'></a><span class='number mx-[10px]'>1</span><a href='#' class='decrease fa fa-minus bg-blue-500 p-[5px] px-[8px] rounded-[5px] text-white cursor-not-allowed'></a></div></li><li class='flex items-baseline justify-between small mt-[30px]'><div class='span'><span class='title ml-[10px]'>نوزاد</span><span class='description text-gray-500'>(10 روز تا 12 سال)</span></div><div class='counter flex items-center justify-between'><a href='#' class='increase fa fa-plus bg-blue-500 p-[5px] px-[8px] rounded-[5px] text-white transition-colors duration-200 hover:bg-blue-600'></a><span class='number mx-[10px]'>1</span><a class='decrease fa fa-minus bg-blue-500 p-[5px] px-[8px] rounded-[5px] text-white cursor-not-allowed'></a></div></li></div>"
    );
    $(
      "div.manage div.body div.details div.three-side div.dropdown div.contain div.edit span"
    ).click(function () {
      $(this).parents("div.contain").fadeOut();
    });
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 90) {
      $("div.manage div.header").addClass("active");
      $("div.container-fluid.nav div.responsive-logo").addClass("active");
      $('div.container-fluid.nav').addClass('shadow-md');
    } else {
      $("div.manage div.header").removeClass("active");
      $("div.container-fluid.nav div.responsive-logo").removeClass("active");
      $("div.container-fluid.nav").removeClass("shadow-md");
    }
  });

  $("div.container-fluid.accordion div.question").click(function () {
    $(this).toggleClass("active");
    $(this).prevAll().removeClass("active");
    $(this).nextAll().removeClass("active");
  });
  $("div.container-fluid.footer div.text div.button").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).find("a").text("کمتر");
    } else {
      $(this).find("a").text("بیشتر");
    }
    $("div.container-fluid.footer div.text div.dropdown ul").toggleClass(
      "active"
    );
    $("div.container-fluid.footer div.text div.dropdown ul a.foregin-plan")
      .next()
      .toggleClass("hidden");
    $("div.container-fluid.footer div.text div.dropdown ul a.foregin-plan")
      .next()
      .toggleClass("inline-block");
    $("div.container-fluid.footer div.text div.dropdown ul a.foregin-plan")
      .nextAll("span.est")
      .toggleClass("hidden");
    $("div.container-fluid.footer div.text div.dropdown ul a.foregin-plan")
      .nextAll("span.est")
      .toggleClass("inline-block");
  });
  $("div.container-fluid.footer div.first li").click(function () {
    $(this).toggleClass("active");
    $(this).nextAll().removeClass("active");
    $(this).prevAll().removeClass("active");
  });
  $('div.container-fluid.nav div.tools li.login a').click(function(){
    $('div.container-fluid.nav div.tools li.login').find('div.modal').addClass('md:block');
    $('div.container-fluid.nav div.tools li.login').find('div.screen').addClass('md:block');
  })
  $("div.container-fluid.nav div.tools div.modal div.button-close button").click(function () {
    $(this).parents('div.modal').removeClass('md:block');
    $(this).parents('div.modal').prev().removeClass('md:block');
  });
  $("div.container-fluid.nav-responsive div.container li").click(function () {
   $(this).addClass('active');
   $(this).nextAll().removeClass('active');
   $(this).prevAll().removeClass('active');
  });
  $("div.container-fluid.mobile-application div.button-close svg").click(function(){
    $(this).parents("div.container-fluid.mobile-application").fadeOut();
  });
  // end manage
});