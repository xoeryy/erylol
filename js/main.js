function overlay(){
    var btn = document.getElementById("overlay-start");
    var wrapper = document.getElementById("wrapper");
    btn.style.opacity = 0;
    wrapper.style.cssText = "visibility: visible;";
    mediaPlay();
}

function mediaPlay() {
    var audio = document.getElementById("audio");
    var video = document.getElementById("bgvid");
    audio.muted = !audio.muted;
    audio.volume = 0.01;
    audio.play()
    video.play()
}

document.addEventListener('DOMContentLoaded', function () {
    const badBots = ['HTTrack', 'WebCopier', 'Wget', 'Offline Explorer'];
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;

    if (badBots.some(bot => userAgent.includes(bot)) || badBots.some(bot => referrer.includes(bot))) {
        document.body.innerHTML = "Access Denied";
    }
});
