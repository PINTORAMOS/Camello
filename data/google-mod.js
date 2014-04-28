//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(message){

  console.log("-------------- FF addon");
  $('body').append('<div id="cam"></div>');

  this.Webcam.set({
    image_format: 'jpeg',
    jpeg_quality: 90
  });

  this.Webcam.attach('#cam');

  this.Webcam.on( 'load', function() {
    console.log("***************** libreria cargada");
  } );

  this.Webcam.on( 'live', function() {
    console.log("******************** camera live");
    var uir = Webcam.snap()
    console.log(uir);
  } );

  this.Webcam.on( 'error', function(err) {
    console.log("**************   error", err);
  } );

  var button = $("button.ml-btn"); //selector de Jquery

  var self = this;

  button.on('click', function(e){
    e.preventDefault();
    console.info("click on button");

    // take snapshot and get image data
    var data_uri = self.Webcam.snap();

    // display results in page
    $('body').html('<h2>Estos son nuestros nuevos productos!</h2>' + '<img src="'+data_uri+'"/>');
    
  });
});