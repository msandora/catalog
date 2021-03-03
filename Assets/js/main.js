$('#suggestionCarousel').carousel({
  interval: 10000
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
  if ($(window).width() > 768) {
    var content = $(".content");
    var promo = $(".MarketingContainer__marketing-container");
    var navbar = $(".navbar");
    var pos = content.position();
      $(window).scroll(function () {
          var windowpos = $(window).scrollTop();
          if (windowpos >= pos.top & windowpos >= 20) {
            content.addClass("content--unpinned");
            promo.addClass("py-2");
            navbar.addClass("py-0");
          } else {
            content.removeClass("content--unpinned");
            promo.removeClass("py-2");
            navbar.removeClass("py-0");
          }
      });
  }
});

$(function () {
  function createYoutubeVideo() {
      // Create  image placeholder from youtube to create wrapper
      var videos = $(".plx-youtube");
      $.each(videos, function () {
          var embedId = $(this).find(".video_id").text();
          var videoPath;
          var iframe;
              
          // Once clicked replaces placeholder image for video iframe
          $(this).click(function () {
              videoPath = "https://www.youtube.com/embed/" + embedId + "?rel=0&showinfo=0&autoplay=1&mute=1&playsinline=1&modestbranding=1";
              iframe = $("<iframe width='100%' height='280px'>").attr("frameborder", "0").attr("allowfullscreen", "").attr("src", videoPath);
              $(this).empty();
              $(this).append(iframe);
          });
  
          $(this).keypress(function(e) {
              if (e.which === 13) {
                  videoPath = "https://www.youtube.com/embed/" + embedId + "?rel=0&showinfo=0&autoplay=1&mute=1&playsinline=1&modestbranding=1";
                  iframe = $("<iframe width='100%' height='280px'>").attr("frameborder", "0").attr("allowfullscreen", "").attr("src", videoPath);
                  $(this).empty();
                  $(this).append(iframe);
              }
          });
      });
  }
  
  //Create Youtube Video Iframe
  createYoutubeVideo();
  });