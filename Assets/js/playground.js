window.onload = function() {
  if ({D.CONTENT_VERSION_ID} == 40717) {
        console.log('Do something for version 40717')
        $(".thank-info").html('<pre style="white-space: pre-wrap; font-family:inherit">Usted recibirá un correo electrónico de confirmación en breve con la información de este pedido (revise bajo la carpeta de “correos no deseados” si no lo ve pronto) pero asegúrese de anotar su número de confirmación para estar seguro! Los cargos por su pedido aparecerán en el estado de cuenta de su tarjeta bajo el nombre de <b>Sheer Science</b>.</pre><br/><pre style="white-space: pre-wrap; font-family:inherit">Imprima este recibo para sus registros. ¿Tiene preguntas sobre este pedido? Puede comunicarse con nosotros por correo electrónico customercare@plexaderm.com o por teléfono (800) 681-0366. Tenga en cuenta que es posible que su pedido no aparezca en nuestro sistema de atención al cliente durante las próximas 24-48 horas. <b style="font-size:14px;">Haga clic <a href="https://plexaderm.com/faqandtips">here</a> para obtener información importante sobre el uso de Plexaderm®.</b></pre><br/><pre style="white-space: pre-wrap; font-family:inherit">Gracias de nuevo por comprar con Sheer Science. Apreciamos su negocio y esperamos poder servirle en un futuro cercano.</pre><br/><pre style="white-space: pre-wrap; font-family:inherit"> Información de contacto:<b>Sheer Science®</b><br/>Servicio al Cliente: (800) 681-0366<br/><b>Sheer Science®</b></pre>');
 }
};



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