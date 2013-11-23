function changeSlide(){

        //LG Fireweb DPI: 16 | Alcatel One Touch Fire DPI: 24
        var deviceSpecs = (screen.pixelDepth == 16)?'#lgSpecs':'#alcatelSpecs'; 
        showFox();
        setTimeout(function(){showSpecs(deviceSpecs);}, 15000);	
        setTimeout(function(){changeSlide();},35000);
}


function showFox(){
        var foxy = $("#foxy");
        var specs = $("#specs");
        foxy.css("left", "50px");
        specs.css("left", "-500px");
}

function showSpecs(deviceSpecs){
        var foxy = $("#foxy");
        var specs = $(deviceSpecs);
        foxy.css("left", "-500px");
        specs.css("left", "0px");
}
