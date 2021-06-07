$(document).ready(function() {
  /*--------  Video Pop-up  ----------*/
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function(){
    if($(".video-popup").hasClass("open")){
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src","");
    }
    else{
      $(".video-popup").addClass("open");
      if($("#player-1").attr("src")==''){
        $("#player-1").attr("src",videoSrc);
      }
    }
  });
});

/*-------- navbar ----------*/
$(".nav-link").on("click", function() {
  $(".navbar-collapse").collapse("hide")
})


  /*--------  Smooth scroll  ----------*/
   $(".navbar-collapse ul li a[href^='#']").on('click', function(e) {
    target = this.hash;
    e.preventDefault();

    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 600, function (){
      window.location.hash = target;
    });
  });
