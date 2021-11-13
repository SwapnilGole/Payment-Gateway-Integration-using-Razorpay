$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //----> toggle menu <----
  $(".menu-btn").click(() => {
    $(".navbar .nav-list").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".navbar .nav-link").click(() => {
    $(".navbar .nav-list").removeClass("active");
    $(".menu-btn i").removeClass("active");
  });
});