let keys = document.querySelectorAll(".whitekey, .blackkey");

keys.forEach((key) => {
    key.addEventListener("click", (event) => {
        event.stopPropagation(); 
        let audioFile = key.dataset.audio; 
        console.log("Clicked:", key.dataset.key);
        playMusic(audioFile);
    });
});

function playMusic(num) {
   
    let clickedKey = new Audio(`Audios/${num} (1).mp3`);
    clickedKey.play();
}
