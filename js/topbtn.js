//scroll to top cusdor
topbtn = document.getElementById("top-btn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//video play-pause btn
    $(".play-btn .play-img").on("click",()=>{
        $(".play-btn .play-img").fadeOut();
        $(".play-btn .pause-img").fadeIn();
        $("#dentist-video")[0].play();
    })
    $(".play-btn .pause-img").on("click",()=>{
        $(".play-btn .pause-img").fadeOut();
        $(".play-btn .play-img").fadeIn();
        $("#dentist-video")[0].pause();
        if ("#dentist-video"[0].end()) {
          $(".play-btn .pause-img").fadeIn();
          $(".play-btn .play-img").fadeOut();
        }
    })