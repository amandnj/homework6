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
var volslider = document.getElementById("volumeSlider")


window.addEventListener("load", function() {
	video.load();
});

playbutton.addEventListener("click", function() {
	video.play();
	video.volume();
	console.log(currentVol);
});

pausebutton.addEventListener("click", function() {
	video.pause();
	console.log("Paused Video");
});

slowerbutton.addEventListener("click", function(){
	video.playbackRate = 0.9;
	console.log("Slow Down");
});

fasterbutton.addEventListener("click", function(){
	video.playbackRate = 1.1;
	console.log(video.playbackRate);
});

skipbutton.addEventListener("click", function(){
	video.currentTime+=5;
	console.log(video.currentTime);
});

mutebutton.addEventListener("click", function(){
	video.muted() = true;
	mutebutton.innerHTML = "Mute";	
	video.muted() = false;
	mutebutton.innerHTML = "Unmute"
});


document.getElementById("volume").addEventListener("volumechange", function(){
	video.volume();
	document.getElementById("volume").innerHTML(video.volume());
	console.log(video.volume());

});

originalbutton.addEventListener("click", function(){
	video.load();
});

oldbutton.addEventListener("click", function(){
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
})

