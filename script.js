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
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate max positions to ensure it stays inside
    const maxX = Math.min(viewportWidth - noBtnRect.width, wrapperRect.width - noBtnRect.width);
    const maxY = Math.min(viewportHeight - noBtnRect.height, wrapperRect.height - noBtnRect.height);

    // Ensure it moves to a new position
    let randomX, randomY;
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (Math.abs(randomX - noBtn.offsetLeft) < 50 && Math.abs(randomY - noBtn.offsetTop) < 50);

    // Apply smooth transition
    noBtn.style.transition = "left 0.2s ease-out, top 0.2s ease-out";
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
