document.addEventListener("DOMContentLoaded", () => {
    // Injecting HTML into the body
    document.body.innerHTML = `
        <div class="wrapper">
            <h2 class="question">How are you feeling after this coffee session</h2>
            <img class="gif" alt="gif" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJvdWZzYXc1NGJ6aGp1cDE3b2dyNnVzOGN1andkMjVrMmRzeGwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif" />
            <div class="btn-group">
                <button class="yes-btn">Good</button>
                <button class="no-btn">Bad</button>
            </div>
        </div>
    `;

    // Injecting CSS dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: whitesmoke;
        }
        .wrapper {
            position: relative;
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        h2 {
            font-size: 2em;
            color: #e94d58;
            margin: 15px 0;
        }
        .gif {
            width: 100%;
            max-width: 300px;
        }
        .btn-group {
            margin-top: 50px;
            position: relative;
            height: 40px;
        }
        button {
            width: 150px;
            height: inherit;
            color: white;
            font-size: 1.2em;
            border-radius: 30px;
            outline: none;
            cursor: pointer;
            box-shadow: 0 2px 4px gray;
            border: 2px solid #e94d58;
        }
        button.yes-btn {
            background: #e94d58;
        }
        button.no-btn {
            background: white;
            color: #e94d58;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    `;
    document.head.appendChild(style);

    // Selecting elements
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");

    // Change text and gif when "Yes" button is clicked
    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Thanks for the feedback";
        gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
    });

    // Make "No" button move randomly on hover
    noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate max positions to ensure the button stays inside the screen
    const maxX = Math.min(viewportWidth - noBtnRect.width, wrapperRect.width - noBtnRect.width);
    const maxY = Math.min(viewportHeight - noBtnRect.height, wrapperRect.height - noBtnRect.height);

    // Get current position
    let currentX = noBtn.offsetLeft;
    let currentY = noBtn.offsetTop;

    // Generate a new position that is different from the current one
    let randomX, randomY;
    do {
        randomX = Math.max(0, Math.floor(Math.random() * maxX));
        randomY = Math.max(0, Math.floor(Math.random() * maxY));
    } while (Math.abs(randomX - currentX) < 50 && Math.abs(randomY - currentY) < 50);  // Ensures movement

    // Apply new position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});


});

