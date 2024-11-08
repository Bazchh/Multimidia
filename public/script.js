const videos = [
    { src: "https://www.youtube.com/embed/UCDuUN2DWRE", title: "Vídeo 1", description: "Luffy em Batalha" },
    { src: "https://www.youtube.com/embed/RJ2phodbEmA", title: "Vídeo 2", description: "One Piece" },
    { src: "https://www.youtube.com/embed/LpSY1lBbZaw", title: "Vídeo 3", description: "Dragon Ball" },
];

let currentVideoIndex = 0;

function loadVideo(index) {
    currentVideoIndex = index;
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = `<iframe width="800" height="450" src="${videos[index].src}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.getElementById("videoDescription").innerText = videos[index].description; // Atualiza a descrição
}

function togglePlay() {
    const iframe = document.querySelector("#videoPlayer iframe");
    if (iframe) {
        const videoURL = iframe.src;
        if (videoURL.includes("autoplay=1")) {
            iframe.src = videoURL.replace("autoplay=1", "autoplay=0");
        } else {
            iframe.src = videoURL.replace("autoplay=0", "autoplay=1");
        }
    }
}

function muteVideo() {
    const iframe = document.querySelector("#videoPlayer iframe");
    if (iframe) {
        const videoURL = iframe.src;
        if (videoURL.includes("mute=1")) {
            iframe.src = videoURL.replace("mute=1", "mute=0");
        } else {
            iframe.src = videoURL.replace("mute=0", "mute=1");
        }
    }
}

function setTime() {
    // A API do YouTube não permite controlar o tempo diretamente a partir de um iframe, você precisaria usar a API do YouTube
}

function setVolume() {
    // A API do YouTube não permite controlar o volume diretamente a partir de um iframe, você precisaria usar a API do YouTube
}
