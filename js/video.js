var Video

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.getElementById('#play').addEventListener("click", function(){
	myVideo.play();
	console.log("Play Video");
});

document.getElementById('#pause').addEventListener("click", function(){
	myVideo.pause();
	console.log("Pause Video");
});

document.getElementById('#faster').addEventListener("click", function(){
	myVideo.playbackRate = 2.0;
	console.log("Speed Up");
});

document.getElementById('#slower').addEventListener("click", function(){
	myVideo.playbackRate = 0.5;
	console.log("Slow Down");
});

document.getElementById('#skip').addEventListener("click", function(){
	myVideo.currentTime(myVideo.currentTime() + 15);
	console.log("Skip Ahead");
});