const enterButton = document.getElementById("enterWebsite");

let music;

try {
    music = new Audio("music.mp3");
    music.loop = true;
    music.volume = 0.35;
} catch (e) {}

enterButton.addEventListener("click", () => {

    document.body.classList.add("entering");

    if (music) {

        music.play().catch(() => {});

    }

    setTimeout(() => {

        alert("Next: Home Page");

    },1200);

});