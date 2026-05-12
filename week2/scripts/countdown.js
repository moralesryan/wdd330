//practicing setTimeout() | setInterval()
const countdown = document.getElementById('countdown');
let startingTime = 10;

const button = document.getElementById('startButton');
button.addEventListener('click', () => {
    const timer = setInterval(() => {
        startingTime--;
        countdown.textContent = startingTime;

        if (startingTime === 0) {
            clearInterval(timer);
            countdown.textContent = `Time is up!😛`;
        }

    }, 1000);
});
