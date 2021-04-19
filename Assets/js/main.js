$(window).scroll(function(){
  if ($(window).scrollTop() == 0) {
   $(".navbar").removeClass("fixed-top");
  } else {
    $(".navbar").addClass("fixed-top");
  }
});

$(".dropdown a.nav-link").click(function() {
  // if ($(".navbar-collapse").hasClass("show")) {
  //   $("nav.navbar").addClass('open-nav');
  // } else {
  //   $("nav.navbar").removeClass('open-nav');
  // }
  // if ($(window).width() > 990) {
    $("nav.navbar").toggleClass('open-nav');
  // }
});
// $(".navbar-toggler").click(function() {
//   if ($(window).width() < 992) {
//     $("nav.navbar").toggleClass('open-nav');
//  }
// });


$('#beforeAfterCarousel').carousel({
  interval: 5000
})

$('#beforeAfterCarousel.carousel .carousel-item').each(function(){
  // var minPerSlide = 2;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  // for (var i=0;i<minPerSlide;i++) {
  //     next=next.next();
  //     if (!next.length) {
  //       next = $(this).siblings(':first');
  //     }
      
  //     next.children(':first-child').clone().appendTo($(this));
  //   }
});

$('#suggestionCarousel').carousel({
  interval: 5000
})

$('#suggestionCarousel.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});



$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
      // console.log('click');
  });
});


$(function () {
  function createVimeoVideo() {
      // Create  image placeholder from youtube to create wrapper
      var videos = $(".plx-vimeo");
      $.each(videos, function () {
          var embedId = $(this).find(".video_id").text();
          var videoPath;
          var iframe;
              
          // Once clicked replaces placeholder image for video iframe
          $(this).click(function () {
              // videoPath = "https://www.youtube.com/embed/" + embedId + "?rel=0&showinfo=0&autoplay=1&mute=1&playsinline=1&modestbranding=1";
              videoPath = "https://player.vimeo.com/video/" + embedId;

              iframe = $("<iframe width='100%' height='340' style='border:none'>").attr("src", videoPath);
              $(this).empty();
              $(this).append(iframe);
          });
  
          $(this).keypress(function(e) {
              if (e.which === 13) {
                videoPath = "https://player.vimeo.com/video/" + embedId;

                  // videoPath = "https://www.youtube.com/embed/" + embedId + "?rel=0&showinfo=0&autoplay=1&mute=1&playsinline=1&modestbranding=1";
                  iframe = $("<iframe width='100%' height='340' style='border:none'>").attr("src", videoPath);
                  $(this).empty();
                  $(this).append(iframe);
              }
          });
      });
  }
  
  //Create Youtube Video Iframe
  createVimeoVideo();
});
