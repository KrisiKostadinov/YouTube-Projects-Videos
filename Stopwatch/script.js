const buttonStart = document.querySelector('[data-start-button]');
const buttonStop = document.querySelector('[data-stop-button]');
const buttonReset = document.querySelector('[data-reset-button]');
const buttonFullScreen = document.querySelector('[data-full-screen-button]');
const result = document.querySelector('[data-result]');

let millis = 0,
    seconds = 0,
    minutes = 0
interval = null;

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);
buttonReset.addEventListener('click', reset);
buttonFullScreen.addEventListener('click', toggleFullScreen);

function start() {
    interval = setInterval(() => {
        millis++;
        calc();
        toString();
    }, 10);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    millis = 0;
    seconds = 0;
    minutes = 0;
    toString();
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function toString() {

    function padTo2Digits(num) {
        return num <= 9 ? `0${num}` : num;
    }

    result.innerHTML = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}:${padTo2Digits(millis)}`;
}

function calc() {
    if (millis > 99) {
        seconds++;
        millis = 0;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }
}