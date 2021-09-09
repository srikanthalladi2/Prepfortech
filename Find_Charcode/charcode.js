document.addEventListener("keydown", function(event) {
    if (event.keyCode == 32) {
        document.getElementsByClassName("text")[0].innerHTML =
            "The key pressed is <span class ='red-color'>SPACE</span> and the Key Code is " +
            "<span class='red-color'>" +
            event.keyCode +
            "</span>";
    } else {
        document.getElementsByClassName("text")[0].innerHTML =
            "The key pressed is " +
            "<span class='red-color'>" +
            event.key +
            "</span>" +
            " and the Key Code is " +
            "<span class='red-color'>" + event.keyCode + "</span>";
    }
});