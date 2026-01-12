const audio = document.querySelector(".audio-player");

const playPauseButton = document.querySelector(".controladorCima-circulo");
const playPause = document.querySelector(".controladorCima-play");

const playIcon = "icons/playbutton.svg";
const pauseIcon = "icons/pause-icon.svg";

const progressRange = document.querySelector(".controladorBaixo-progresso");

const currentTime = document.querySelector(".controladorBaixo-inicio");
const totalTime = document.querySelector(".controladorBaixo-fim");

audio.volume = 0.2;

playPauseButton.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        playPause.src = pauseIcon;
        playPause.style.marginLeft = "0px";
    }else{
        audio.pause();
        playPause.src = playIcon;
        playPause.style.marginLeft = "4px";
    }
})

function formatTime(seconds){
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);

    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

audio.addEventListener('loadedmetadata', () => {
    progressRange.max = audio.duration;
    totalTime.textContent = formatTime(audio.duration);
})

audio.addEventListener('timeupdate', () => {
    progressRange.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);

    const percent = (audio.currentTime / audio.duration) * 100;
    progressRange.style.setProperty('--progress', `${percent}%`);
})

progressRange.addEventListener('input', () => {
    audio.currentTime = progressRange.value;
})