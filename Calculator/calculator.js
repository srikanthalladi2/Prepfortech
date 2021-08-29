function output(val) {
    document.getElementById("outputscreen").value += val;
    if (isNaN(val)) {
        disableoperator();
    }
}

function disableoperator() {
    var operators = document.querySelectorAll(
        ".addition, .subtraction, .multiplication, .division"
    );
    for (let i = 0; i < operators.length; i++) {
        operators[i].disabled = true;
    }
}

function enableoperator() {
    var operators = document.querySelectorAll(
        ".addition, .subtraction, .multiplication, .division"
    );
    for (let i = 0; i < operators.length; i++) {
        operators[i].disabled = false;
    }
}

function result() {
    var total = document.getElementById("outputscreen").value;
    document.getElementById("outputscreen").value = eval(total);
    enableoperator();
}

function clearscreen() {
    console.log((document.getElementById("outputscreen").value = ""));
    enableoperator();
}