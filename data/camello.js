//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(camellos){

  console.log("-------------- FF addon");

  //carga imagen desde internet
  //$('#logo_box').html('<img src="http://www.adelgazar.me/wp-content/uploads/2013/07/camello.jpg">' );
  
  // carga imagen local en la carpeta 'data'
  $('#logo_box').html('<img src="'+camellos.camello1+'">' );
});