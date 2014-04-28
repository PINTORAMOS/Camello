//Importa el API para modificiacion de paginas
var pageMod = require("sdk/page-mod");
//Importa el API self
var self = require("sdk/self");


pageMod.PageMod({
    include: "*.elempleo.com.co",
    contentScriptFile: [self.data.url("jquery-1.10.2.min.js"), 
                        self.data.url("camello.js")],
    onAttach: function(worker){
                //objeto con los nombres: ubicacion,  de las imagenes
                var camellos = {
                  camello1: self.data.url('camello.jpg'),
                  camello2: self.data.url('camello.jpg'),
                };

                worker.port.emit("replacePage", camellos);    
            }
});

