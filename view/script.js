let p1score = 0;
let p2score = 0; 
document.getElementById("btnClick").onclick = function() {
    document.getElementById("racetovalue").innerHTML = document.getElementById("racevalue").value;
    document.getElementById("p1name").innerHTML = document.getElementById("userone").value;
    document.getElementById("p2name").innerHTML = document.getElementById("usertwo").value;
    document.getElementById("p1flag").innerHTML = '<img src="img/' + document.getElementById("p1country").value +  '.png" width="45px" height="45px">';
    document.getElementById("p2flag").innerHTML = '<img src="img/' + document.getElementById("p2country").value +  '.png" width="45px" height="45px">';
}
document.getElementById("btnReset").onclick = function() {
    if (confirm("Are you sure you want to reset?")) {
        document.getElementById("racetovalue").innerHTML = 0;
        document.getElementById("p1name").innerHTML = "Lorem";
        document.getElementById("p2name").innerHTML = "Ipsum";
        document.getElementById("p1flag").innerHTML = '<img src="img/none.png" width="45px" height="45px">';
        document.getElementById("p2flag").innerHTML = '<img src="img/none.png" width="45px" height="45px">';
    }
}

document.getElementById("p1sub").onclick = function() {
    p1score -= 1;
    document.getElementById("p1score").innerHTML = p1score.toString();
}
document.getElementById("p1add").onclick = function() {
    p1score += 1;
    document.getElementById("p1score").innerHTML = p1score.toString();
}
document.getElementById("p2sub").onclick = function() {
    p2score -= 1;
    document.getElementById("p2score").innerHTML = p2score.toString();
}
document.getElementById("p2add").onclick = function() {
    p2score += 1;
    document.getElementById("p2score").innerHTML = p2score.toString();
}