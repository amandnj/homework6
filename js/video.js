var video = document.getElementById("myVideo");


window.addEventListener("load", function() {
	video.load();
	console.log("Starting");
	console.log(video.volume)
});

document.getElementById("play").addEventListener("click", function() {
	video.play();
	let vol = document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
});

document.getElementById("pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.getElementById("slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*0.9;
	console.log("Slow Down");
});

document.getElementById("faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*1.1;
	console.log(video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function(){
	video.currentTime+=5;
	console.log(video.currentTime);
});

document.getElementById("mute").addEventListener("click", function MuteUnmutevideo() {
		video.muted = !video.muted;
		document.getElementById("mute").innerHTML = video.muted ? 'Unmute' : 'Mute';
	});

document.querySelector("#volumeSlider").addEventListener("click", function(){
	console.log(this);
	console.log(this.value);
	let vol = (this.value);
	document.querySelector("#volume").innerHTML= vol + "%"
	console.log(vol);
});


document.getElementById("old").addEventListener("click", function(){
	let style = document.getElementsByClassName(".oldTime");
	video.style = style;
})

document.getElementById("original").addEventListener("click", function(){
	video.style.filter = "none";
});
