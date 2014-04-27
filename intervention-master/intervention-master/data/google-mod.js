//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(message){
    var button = $("#button"); //selector de Jquery
	var data_uri = Webcam.snap();
	document.getElementById('results').innerHTML = 
				 
				'<img src="'+data_uri+'"/>';
    
     

    

