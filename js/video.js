var video = document.getElementById("myVideo");
var playbutton = document.getElementById("play");
var pausebutton = document.getElementById("pause");
var slowerbutton = document.getElementById("slower");
var fasterbutton = document.getElementById("faster");
var skipbutton = document.getElementById("skip");
var mutebutton = document.getElementById("mute");


window.addEventListener("load", function() {
	document.getElementById(video).load();
});

playbutton.addEventListener("click", function() {
	video.play();
	console.log("Played Video");
});

pausebutton.addEventListener("click", function() {
	video.pause();
	console.log("Paused Video");
});

slowerbutton.addEventListener("click", function(){
	video.playbackRate = 0.5;
	console.log("Slow Down");
});

fasterbutton.addEventListener("click", function(){
	video.playbackRate = 2.0;
	console.log("Speed Up");
});

skipbutton.addEventListener("click", function(){
	video.currentTime(video.currentTime() + 15);
	console.log("Skip Ahead");
});

mutebutton.addEventListener("click", function(){
	if (video.mute == false) 
	{
		document.getElementById(video).muted = true;
	}
	else 
	{
		video.mute = true 
		document.getElementById(video).muted = false;
	}
	console.log("Muted")
});