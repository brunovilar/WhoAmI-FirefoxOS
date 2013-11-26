function changeSlide(){
  var deviceSpecs
  if(navigator.userAgent.indexOf("LG-D300")>=0){
    deviceSpecs = '#lgSpecs';
  } else if(navigator.userAgent.indexOf("ALCATEL ONE TOUCH 4012")>=0)  {
    deviceSpecs = '#alcatelSpecs';
  } else if(navigator.userAgent.indexOf("ZTEOPEN")>=0) {
	deviceSpecs = '#zteSpecs';
  } else {
    deviceSpecs = '#unsupported';
  }

  $("#lgSpecs").css("display", "none");
  $("#alcatelSpecs").css("display", "none");
  $("#zteSpecs").css("display", "none");
  $("#unsupported").css("display", "none");

  showFox(deviceSpecs);
  setTimeout(function(){showSpecs(deviceSpecs);}, 15000);  
  setTimeout(function(){changeSlide();},35000);
}

function showFox(deviceSpecs){
  var foxy = $("#foxy");
  var specs = $("#specs");  
  var deviceSpecs = $(deviceSpecs);  
  foxy.css("left", "50px");
  specs.css("left", "-500px");
  deviceSpecs.css("display", "none");
}

function showSpecs(deviceSpecs){
  var foxy = $("#foxy");
  var specs = $("#specs");  
  var deviceSpecs = $(deviceSpecs);  

  foxy.css("left", "-500px");
  specs.css("left", "0px");
  deviceSpecs.css("display", "");
}
