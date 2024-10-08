export type Music = {
    name: string;
    author: string;
    //description: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        name: "GUstavo",
        author: "GUstavo",
       // description: "musica 01",
        urlAudio: "audios/01 - Gusttavo Lima.mp3",
        image: "./imagens/GUstavo.jpg"
    },
    {
        name: "GUstavo",
        author: "GUstavo",
       // description: "musica 02",
        urlAudio: "musicas/02 - Gusttavo Lima.mp3",
        image: "./imagens/GUstavo.jpg"
    },
    {
        name: "GUstavo",
        author: "GUstavo",
       // description: "musica 03",
        urlAudio: "/musicas/03 - Gusttavo Lima.mp3",
        image: "./imagens/GUstavo.imagem"
    }
];