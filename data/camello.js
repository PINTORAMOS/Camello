//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(camellos){

  console.log("-------------- FF addon");

  //carga imagen desde internet
  //$('#logo_box').html('<img src="http://www.adelgazar.me/wp-content/uploads/2013/07/camello.jpg">' );
  
  // carga imagen local en la carpeta 'data'
  $('#logo_box').html('<img src="'+camellos.camello1+'">' );

  $(".subtitle").text("Porque siempre hay un mejor camello");
  $(".text1").html('Hola!! su hoja de vida en <span class="tex1_azul">elempleo.com</span> y aplique a las mejores ofertas de empleo de Latinoamérica. Miles de empresas buscan a sus candidatos a través de nuestra herramienta de selección de personal. Encuentre el trabajo que siempre ha querido en las mejores vacantes de la región.');

  $(".first-search-options-keyword").text("Buscar Camello");
  $(".optionText").text("Buscar Camello");
  $('#patrocinio').html('<img src="'+camellos.sintiempo+'">' );
  $(".subtitle").text("Porque siempre hay un mejor camello");

  // selecciona las imagenes del jumbotron
  var pics = $('.f-l>a>img');
  // selecciona la primera imagen
  $(pics[0]).attr('src', camellos.chica);
  $(pics[1]).attr('src', camellos.chica);

  $('.job-offer-name.text-type-5').text("Hola mundo");
  


  
  //$('.our-products-list').attr(erase);
  $( ".our-products-list" ).html('<img src="'+camellos.baner+'">' );
  $(".logo").html('<img src="'+camellos.logopequeno+'">' );

//$( "div.our-products-list" ).remove();


  //$('#our-products-list').html('<img src="'+camellos.baner+'">' );

});