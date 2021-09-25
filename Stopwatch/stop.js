let seconds = 0;
let minutes = 0;
let hours = 0;
let secondsdisplay = 0;
let minutesdisplay = 0;
let hoursdisplay = 0;
let status = "stopped";
let interval;

function Stopwatch() {
    //increment seconds
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    if (seconds < 10) {
        secondsdisplay = '0' + seconds.toString();
    } else {
        secondsdisplay = seconds;
    }
    if (minutes < 10) {
        minutesdisplay = '0' + minutes.toString();
    } else {
        minutesdisplay = minutes;
    }
    if (hours < 10) {
        hoursdisplay = '0' + hours.toString();
    } else {
        hoursdisplay = hours;
    }
    document.getElementById("display").innerHTML = hoursdisplay + ":" + minutesdisplay + ":" + secondsdisplay;
}
//display the updated time values on screen


function Startstop() {
    if (status === "stopped") {
        interval = window.setInterval(Stopwatch, 1000);
        console.log(interval);
        status = "started";
        document.getElementById("startstop").innerHTML = "Stop";
    } else {
        window.clearInterval(interval);
        status = "stopped";
        document.getElementById("startstop").innerHTML = "Start";
    }
}

function Reset() {
    status = "stopped";
    window.clearInterval(interval);
    document.getElementById("startstop").innerHTML = "Start";
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}