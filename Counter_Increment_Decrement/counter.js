var count = 0;

function increment() {
    document.getElementsByClassName("number")[0].innerText = ++count;
}

function decrement() {
    document.getElementsByClassName("number")[0].innerText = --count;
}

function reset() {
    count = 0;
    document.getElementsByClassName("number")[0].innerText = count;
}