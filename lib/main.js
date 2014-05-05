//Importa el API para modificiacion de paginas
var pageMod = require("sdk/page-mod");
//Importa el API self
var self = require("sdk/self");


pageMod.PageMod({
    include: "*.elempleo.com",
    contentScriptFile: [self.data.url("jquery-1.10.2.min.js"), 
                        self.data.url("camello.js")],
    onAttach: function(worker){
                //objeto con los nombres: ubicacion,  de las imagenes
                var camellos = {
                  camello1: self.data.url('camello.png'),
                  //camello2: self.data.url('camello.jpg'),
                  sintiempo: self.data.url('sintiempouno.png'),
                  baner: self.data.url('vip.png'),
                  chica: self.data.url('camellita.png'),
                  logopequeno: self.data.url('2logo.png'),
                };

                worker.port.emit("replacePage", camellos);    
            }
});

