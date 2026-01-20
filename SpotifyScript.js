import { playlist } from "./SpotifyPlaylist.js";

const audio = document.querySelector(".audio-player");

//variaveis do botão play pause
const playPauseButton = document.querySelector(".controladorCima-circulo");
const playPause = document.querySelector(".controladorCima-play");

const playIcon = "icons/playbutton.svg";
const pauseIcon = "icons/pause-icon.svg";

//variaveis do progresso
const progressRange = document.querySelector(".controladorBaixo-progresso");

const currentTime = document.querySelector(".controladorBaixo-inicio");
const totalTime = document.querySelector(".controladorBaixo-fim");

//variaveis do volume
const volume = document.querySelector(".volumes-regulador");
const volumeImg = document.querySelector(".volumes-volumeIcon");

const volumeMute = "icons/volumeMute-icon.svg";
const volumeMin = "icons/volumeMin-icon.svg";
const volumeMid = "icons/volumeMid-icon.svg";
const volumeMax = "icons/volumeMax-icon.svg";

//variaveis da playlist
let currentTrackIndex = 0;

const nextButton = document.querySelector(".controladorCima-next");
const previuosButton = document.querySelector(".controladorCima-previous");

const nomeMusica = document.querySelector("#player-name");
const nomeArtista = document.querySelector("#player-artist");
const imgMusica = document.querySelector("#resumo-imgContent");

const nomeMusicaRight = document.querySelector("#nomes-nomeMusica");
const nomeArtistaRight = document.querySelector("#nomes-autor");
const imgMusicaRight = document.querySelector("#rightside-img");

//adicionar
const addButtonRight = document.querySelector("#addButtonRight");
const addButtonPlayer = document.querySelector("#addButtonPlayer");
const addIcon = "icons/add-icon.svg"
const addCheckIcon = "icons/addCheck-icon.svg";

//resumo
const resumoArtista = document.querySelector("#resumo-artista");
const resumoOuvintes = document.querySelector("#ouvintes");
const resumoSobre = document.querySelector("#sobre");
const resumoImagem = document.querySelector("#resumo-img");
const followButton = document.querySelector("#seguindo-button");

const deixarDeSeguir = "Deixar de seguir";
const seguir = "Seguir";

//botão play pause
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


//progresso
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


//volume
audio.volume = volume.value;
volume.style.setProperty('--volume', `${volume.value * 100}%`);

volume.addEventListener('input', () => {
    audio.volume = volume.value;

    const volumePercent = volume.value * 100;
    volume.style.setProperty('--volume', `${volumePercent}%`);

    switchVolumeIcon(volumePercent);
})

volumeImg.addEventListener('click', () => {
    if(audio.volume > 0){
        audio.dataset.lastVolume = audio.volume;
        audio.volume = 0;
        volume.value = 0;
        volume.style.setProperty('--volume', '0%');
        switchVolumeIcon(audio.volume * 100);
    }else{
        const last = audio.dataset.lastVolume || 0.2;
        audio.volume = last;
        volume.value = last;
        volume.style.setProperty('--volume', `${last * 100}%`);
        switchVolumeIcon(last * 100);
    }
})

function switchVolumeIcon(volumeValue){
    if(volumeValue >= 70){
        volumeImg.src = volumeMax;
    }else if(volumeValue >= 35){
        volumeImg.src = volumeMid;
    }else if(volumeValue > 0){
        volumeImg.src = volumeMin;
    }else{
        volumeImg.src = volumeMute;
    }
}


//playlist
nomeMusica.textContent = playlist[0].music.name;
nomeArtista.textContent = playlist[0].music.artist;
imgMusica.src = playlist[0].music.imgSrc;

nomeMusicaRight.textContent = playlist[0].music.name;
nomeArtistaRight.textContent = playlist[0].music.artist;
imgMusicaRight.src = playlist[0].music.imgSrc;

resumoArtista.textContent = playlist[0].music.artist;
resumoImagem.style.backgroundImage = `url(${playlist[0].about.imgSrc})`;
resumoOuvintes.textContent = `${playlist[0].about.listeners} ouvintes mensais`;
resumoSobre.textContent = playlist[0].about.bio;


function loadTrack(index){
    const { music, about } = playlist[index];

    audio.src = music.src;
    audio.load();

    nomeMusica.textContent = music.name;
    nomeArtista.textContent = music.artist;
    imgMusica.src = music.imgSrc;

    nomeMusicaRight.textContent = music.name;
    nomeArtistaRight.textContent = music.artist;
    imgMusicaRight.src = music.imgSrc;

    resumoArtista.textContent = music.artist;
    resumoImagem.style.backgroundImage = `url(${about.imgSrc})`;
    resumoOuvintes.textContent = `${about.listeners} ouvintes mensais`;
    resumoSobre.textContent = about.bio;
    
    switchAddUI();
    switchFollowUI();

    audio.play();
    playPause.src = pauseIcon;
    playPause.style.marginLeft = "0px";
}

nextButton.addEventListener('click', () => {
    currentTrackIndex++;

    if(currentTrackIndex >= playlist.length){
        currentTrackIndex = 0;
    }

    loadTrack(currentTrackIndex);
})

previuosButton.addEventListener('click', () => {
    if(audio.currentTime > 3){
        audio.currentTime = 0;
        return;
    }

    currentTrackIndex--;

    if(currentTrackIndex < 0){
        currentTrackIndex = playlist.length - 1;
    }

    loadTrack(currentTrackIndex);
})

audio.addEventListener('ended', () => {
    currentTrackIndex++;

    if(currentTrackIndex >= playlist.length){
        currentTrackIndex = 0;
    }

    loadTrack(currentTrackIndex);
})


//adicionar
function switchAddUI(){
    const { music } = playlist[currentTrackIndex];

    const icon = music.isCheck ? addCheckIcon : addIcon;

    addButtonPlayer.src = icon;
    addButtonRight.src = icon;
}

function toggleAdd(){
    const { music } = playlist[currentTrackIndex];

    music.isCheck = !music.isCheck;
    switchAddUI();
}

addButtonPlayer.addEventListener('click', toggleAdd);

addButtonRight.addEventListener('click', toggleAdd);


//seguir
function switchFollowUI(){
    const { about } = playlist[currentTrackIndex];

    if(about.isFollowing){
        followButton.textContent = deixarDeSeguir;
        followButton.style.width = "138px";
    }else{
        followButton.textContent = seguir;
        followButton.style.width = "78px";
    }
}

function toggleFollow(){
    const { about } = playlist[currentTrackIndex];

    about.isFollowing = !about.isFollowing;
    switchFollowUI();
}

followButton.addEventListener('click', toggleFollow);