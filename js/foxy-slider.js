function changeSlide(){

	var deviceSpecs
	if(navigator.userAgent.indexOf("LG-D300")>=0){
		deviceSpecs = '#lgSpecs';
	} else if(navigator.userAgent.indexOf("ALCATEL ONE TOUCH 4012")>=0)	{
		deviceSpecs = '#alcatelSpecs';
	} else {
		deviceSpecs = '#unsupported';
	}
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
