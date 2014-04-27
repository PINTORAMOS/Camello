//Importa el API para modificiacion de paginas
var pageMod = require("sdk/page-mod");
//Importa el API self
var self = require("sdk/self");


pageMod.PageMod({
    include: "*.mercadolibre.com.co",
    contentScriptFile: [self.data.url("jquery-1.10.2.min.js"), 
                        self.data.url("google-mod.js")],
    onAttach: function(worker){
                worker.port.emit("replacePage", "Page Matches ruleset");    
            }
});

