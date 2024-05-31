function openSolution(evt, solutionName) {
    var i, x, tablinks;
    var x = document.getElementsByClassName("solution");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" solution-selected", "");
    }
    document.getElementById(solutionName).style.display = "flex";
    evt.currentTarget.className += " solution-selected";
}