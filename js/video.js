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
	console.log("Starting");
	console.log(video.volume)
});

playbutton.addEventListener("click", function() {
	video.play();
	let vol = document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
});

pausebutton.addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
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
	if (video.muted() = false){
		video.muted() = true;
	}
	else if (video.muted() = true) {
		mutebutton.innerHTML = "Mute";
	}	
	else (video.muted() = false) {
		mutebutton.innerHTML = "Unmute";
	}
});


document.querySelector("#volumeSlider").addEventListener("change", function(){
	console.log(this);
	console.log(this.value);
	let vol = document.querySelector("#volume").innerHTML= video.volume;

});

originalbutton.removeEventListener("click", function(){
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
});

oldbutton.addEventListener("click", function(){
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
})

