const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Yes button changes text and GIF
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay! I knew it 😍💖";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// No button moves smoothly
noBtn.addEventListener("mouseover", () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Define movement limits (50% of screen width & height)
    const maxX = screenWidth * 0.5; // 50% of screen width
    const maxY = screenHeight * 0.5; // 50% of screen height

    let randomX, randomY;
    do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;
    } while (
        Math.abs(randomX - noBtn.offsetLeft) < 50 &&
        Math.abs(randomY - noBtn.offsetTop) < 50
    ); // Ensures movement

    // Apply smooth transition
    noBtn.style.transition = "left 0.2s ease-out, top 0.2s ease-out";
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
