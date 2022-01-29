function oblicz() {
    const number = document.getElementById("drawnNumber").value;
    document.getElementById("bigNumberDisplay").innerHTML = number;
    document.getElementById(number).style.backgroundColor = "#1C67BA";
    document.getElementById(number).style.color = "#F1FDFD";
    if (number == " " || number >= 91 || number <= 0) {
        document.getElementById("Error").innerHTML = "Błędne wpisanie liczby";
    }
}