var video = document.getElementById("myVideo");
var playbutton = document.getElementById("play");
var pausebutton = document.getElementById("pause");
var slowerbutton = document.getElementById("slower");
var fasterbutton = document.getElementById("faster");
var skipbutton = document.getElementById("skip");
var mutebutton = document.getElementById("mute");
var oldbutton = document.getElementById("old");
var originalbutton = document.getElementById("original");
var volslider = document.getElementById("volumeSlider")
var currentvolume = document.querySelector("myVideo").volume;


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


document.getElementById("volume").addEventListener("click", function(){
	currentvolume.innerHTML(currentvolume);
});

originalbutton.addEventListener("click", function(){
	document.getElementById("myVideo");
});

oldbutton.addEventListener("click", function(){
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
})

