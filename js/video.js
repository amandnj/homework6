var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector(video);
});

document.getElementById('#play').addEventListener("click", function(){
	video.play();
	console.log("Play Video");
});

document.getElementById('#pause').addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
});

document.getElementById('#faster').addEventListener("click", function(){
	video.playbackRate = 2.0;
	console.log("Speed Up");
});

document.getElementById('#slower').addEventListener("click", function(){
	video.playbackRate = 0.5;
	console.log("Slow Down");
});

document.getElementById('#skip').addEventListener("click", function(){
	video.currentTime(myVideo.currentTime() + 15s);
	console.log("Skip Ahead");
});