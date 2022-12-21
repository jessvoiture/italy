let videos = document.querySelectorAll('video');
let isPaused = false;
let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
    if(entry.intersectionRatio<0.3  && !entry.paused){
        entry.target.pause();
        isPaused = true;
    }
    else if(isPaused) {
        entry.target.play(); 
        isPaused=false
    }
    });
}, {threshold: 0.3});

for (const video of videos) observer.observe(video);
