document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    var enter = document.getElementById("enter");
    var logoEntrance = document.getElementById("logo-entrance");
    var socialMediaLinks = document.getElementById("social-media-links");

    setTimeout(() => {
        logoEntrance.style.opacity = '1';
        logoEntrance.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        socialMediaLinks.style.opacity = '1';
    }, 1000);

    enter.addEventListener("click", function() {
        enter.style.opacity = '0';
        enter.addEventListener('transitionend', () => enter.remove());

        if (typeof window.orientation == 'undefined') { 
            audio.volume = 0.05;
            audio.play();
        }
    });
});