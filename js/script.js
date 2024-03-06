document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const clock = document.getElementById("showClock");
    const weekDays = document.getElementById("dayOfWeek");
    let intervalId;

    function updateTime() {
        const time = new Date();
        const currentTime = time.toLocaleTimeString();
        const dayOfWeek = time.toLocaleDateString('en-US', { weekday: 'long' });

        clock.innerHTML = currentTime;
        weekDays.innerHTML = dayOfWeek;
    }

    function getRandomColor() {
        return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * Math.pow(16, 2));
    }

    function changeColor() {
        clock.style.color = getRandomColor();
    }

    function startClock() {
        intervalId = setInterval(() => {
            updateTime();
            changeColor();
        }, 1000);
    }

    startButton.addEventListener('click', startClock);

    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
    });
    startClock();
    updateTime();
    changeColor();
});