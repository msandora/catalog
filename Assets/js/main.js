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



// window.onload = function() {
//   if ({D.CONTENT_VERSION_ID} == 40717) {
//         console.log('Do something for version 40717')
//         $(".thank-info").html('<pre style="white-space: pre-wrap; font-family:inherit">Usted recibirá un correo electrónico de confirmación en breve con la información de este pedido (revise bajo la carpeta de “correos no deseados” si no lo ve pronto) pero asegúrese de anotar su número de confirmación para estar seguro! Los cargos por su pedido aparecerán en el estado de cuenta de su tarjeta bajo el nombre de <b>Sheer Science</b>.</pre><br/><pre style="white-space: pre-wrap; font-family:inherit">Imprima este recibo para sus registros. ¿Tiene preguntas sobre este pedido? Puede comunicarse con nosotros por correo electrónico customercare@plexaderm.com o por teléfono (800) 681-0366. Tenga en cuenta que es posible que su pedido no aparezca en nuestro sistema de atención al cliente durante las próximas 24-48 horas. <b style="font-size:14px;">Haga clic <a href="https://plexaderm.com/faqandtips">here</a> para obtener información importante sobre el uso de Plexaderm®.</b></pre><br/><pre style="white-space: pre-wrap; font-family:inherit">Gracias de nuevo por comprar con Sheer Science. Apreciamos su negocio y esperamos poder servirle en un futuro cercano.</pre><br/><pre style="white-space: pre-wrap; font-family:inherit"> Información de contacto:<b>Sheer Science®</b><br/>Servicio al Cliente: (800) 681-0366<br/><b>Sheer Science®</b></pre>');
//  }
// };

