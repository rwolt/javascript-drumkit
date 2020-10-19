window.addEventListener('keydown', (e) => {
        const audio = document.querySelector(`audio[data-key="${e.code}"]`);
        const key = document.querySelector(`div[data-key="${e.code}"]`);
        if(!audio) return;
        audio.currentTime = 0; //rewind to the start
        audio.play();
        key.classList.add('playing');
    });

    const keys = document.querySelectorAll('.btn');
    
    keys.forEach(key =>key.addEventListener(`transitionend`, removeTransition));

    function removeTransition(e) {
        if (e.propertyName !== `transform`)return;
        this.classList.remove(`playing`);
    }