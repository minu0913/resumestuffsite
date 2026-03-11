function openTab(evt, tabName) {
    var content = document.getElementsByClassName("tab-content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[i].classList.remove("active");
    }
    var buttons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active");
    }, 10);
    evt.currentTarget.classList.add("active");
}
