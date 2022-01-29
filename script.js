function oblicz() {
    var number = document.getElementById("drawnNumber").value;
    var numberDisplay = parseInt(number);
    document.getElementById("bigNumberDisplay").innerHTML = numberDisplay;
    document.getElementById(number).style.backgroundColor  = "#1C67BA";
    document.getElementById(number).style.color  = "#F1FDFD";
}
