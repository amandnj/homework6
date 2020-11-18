var video = document.getElementById("myVideo");
var playbutton = document.getElementById("play");
var pausebutton = document.getElementById("pause");
var slowerbutton = document.getElementById("slower");
var fasterbutton = document.getElementById("faster");
var skipbutton = document.getElementById("skip");
var mutebutton = document.getElementById("mute");
var currentVol = document.getElementById("volume")
var oldbutton = document.getElementById("old");
var originalbutton = document.getElementById("original")


window.addEventListener("load", function() {
	document.getElementById(video).load();
});

playbutton.addEventListener("click", function() {
	video.play();
	console.log(currentVol);
});

pausebutton.addEventListener("click", function() {
	video.pause();
	console.log("Paused Video");
});

slowerbutton.addEventListener("click", function(){
	video.playbackRate = 10%;
	console.log("Slow Down");
});

fasterbutton.addEventListener("click", function(){
	video.playbackRate = 10%;
	console.log(video.playbackRate);
});

skipbutton.addEventListener("click", function(){
	video.currentTime(video.currentTime() + 5);
	console.log(video.currentTime);
});

mutebutton.addEventListener("click", function(){
	if(video.muted){
		video.muted = false;
		mutebutton.innerHTML = "Mute";
	} 
	else {
		video.muted = true;
		mutebutton.innerHTML = "Unmute";
	}
});

var volumeControl = document.getElementById("volumeSlider");
var setVolume = function(){
	currentVol.innerHTML=(video.volume = this.value / 100;)
};
volumeControl.addEventListener('change',setVolume);
volumeControl.addEventListener('input',setVolume);

var bgCanvas= document.createElement("canvas");
function makeItGrey() {
    bgContext.drawImage(video, 0, 0, w, h);
    var pixelData = bgContext.getImageData(0, 0, w, h);
    for (var i = 0; i < pixelData.data.length; i += 4 ) {
        var r = pixelData.data[i];
        var g = pixelData.data[i+1];
        var b = pixelData.data[i+2];
        var averageColour = (r + g + b) / 3;
        pixelData.data[i] = averageColour;
        pixelData.data[i+1] = averageColour;
        pixelData.data[i+2] = averageColour;
    }
    context.putImageData(pixelData, 0, 0);
}

oldbutton.addEventListener("click", function() {
    video.setInterval(makeItGrey(), 33);
}, false);

originalbutton.addEventListener("click", function(){
	document.getElementById(video).load();
});