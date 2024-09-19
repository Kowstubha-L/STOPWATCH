const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsed = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsed; 
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsed = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsed = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const curr = Date.now();
    elapsed = curr - startTime;

    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let min = Math.floor((elapsed / (1000 * 60)) % 60);
    let sec = Math.floor((elapsed / 1000) % 60);
    let millisec = Math.floor((elapsed % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    millisec = String(millisec).padStart(2, "0");

    display.textContent = `${hours}:${min}:${sec}:${millisec}`;
}
