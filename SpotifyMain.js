const audio = document.querySelector(".audio-player");

const playPauseButton = document.querySelector(".controladorCima-circulo");
const playPause = document.querySelector(".controladorCima-play");

const playIcon = "icons/playbutton.svg";
const pauseIcon = "icons/pause-icon.svg";

const progressRange = document.querySelector(".controladorBaixo-progresso");

const currentTime = document.querySelector(".controladorBaixo-inicio");
const totalTime = document.querySelector(".controladorBaixo-fim");

const volume = document.querySelector(".volumes-regulador");
const volumeImg = document.querySelector(".volumes-volumeIcon");


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

audio.volume = volume.value;
volume.style.setProperty('--volume', `${volume.value * 100}%`);

volume.addEventListener('input', () => {
    audio.volume = volume.value;

    const volumePercent = volume.value * 100;
    volume.style.setProperty('--volume', `${volumePercent}%`);
})

volumeImg.addEventListener('click', () => {
    if(audio.volume > 0){
        audio.dataset.lastVolume = audio.volume;
        audio.volume = 0;
        volume.value = 0;
        volume.style.setProperty('--volume', '0%');
    }else{
        const last = audio.dataset.lastVolume || 0.2;
        audio.volume = last;
        volume.value = last;
        volume.style.setProperty('--volume', `${last * 100}%`)
    }
})