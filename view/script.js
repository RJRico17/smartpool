// let p1score = 0;
// let p2score = 0; 
// let p1attempt = 0;
// let p2attempt = 0;
// let p1make = 0;
// let p2make = 0;

// document.getElementById("btnClick").onclick = function() {
//     document.getElementById("racetovalue").innerHTML = document.getElementById("racevalue").value;
//     document.getElementById("p1name").innerHTML = document.getElementById("userone").value;
//     document.getElementById("p2name").innerHTML = document.getElementById("usertwo").value;
//     document.getElementById("p1flag").innerHTML = '<img src="img/' + document.getElementById("p1country").value +  '.png" width="45px" height="45px">';
//     document.getElementById("p2flag").innerHTML = '<img src="img/' + document.getElementById("p2country").value +  '.png" width="45px" height="45px">';
// }
// document.getElementById("btnReset").onclick = function() {
//     if (confirm("Are you sure you want to reset?")) {
//         document.getElementById("racetovalue").innerHTML = "0";
//         document.getElementById("p1name").innerHTML = "Lorem";
//         document.getElementById("p2name").innerHTML = "Ipsum";
//         document.getElementById("p1flag").innerHTML = '<img src="img/none.png" width="45px" height="45px">';
//         document.getElementById("p2flag").innerHTML = '<img src="img/none.png" width="45px" height="45px">';
//     }
// }

// document.getElementById("p1sub").onclick = function() {
//     p1score -= 1;
//     document.getElementById("p1score").innerHTML = p1score.toString();
// }
// document.getElementById("p1add").onclick = function() {
//     p1score += 1;
//     document.getElementById("p1score").innerHTML = p1score.toString();
// }
// document.getElementById("p2sub").onclick = function() {
//     p2score -= 1;
//     document.getElementById("p2score").innerHTML = p2score.toString();
// }
// document.getElementById("p2add").onclick = function() {
//     p2score += 1;
//     document.getElementById("p2score").innerHTML = p2score.toString();
// }

// document.getElementById("p1make").onclick = function() {
//     p1attempt+= 1;
//     p1make+= 1;
//     alert("attempted: " + p1attempt);
//     alert("made: " + p1make);
// }
// document.getElementById("p1miss").onclick = function() {
//     p1attempt+= 1;
//     alert("attempted: " + p1attempt);
//     alert("made: " + p1make);
// }

// document.getElementById("p1pot").onclick = function() {
//     const element = document.getElementById("p1info");
//     element.className = "p1infoshow";
// }

let p1score = 0, p2score = 0;
let p1attempt = 0, p2attempt = 0;
let p1make = 0, p2make = 0;

document.querySelector("#btnClick").onclick = function () {
    document.querySelector("#racetovalue").textContent = document.querySelector("#racevalue").value;
    document.querySelector("#p1name").textContent = document.querySelector("#userone").value;
    document.querySelector("#p2name").textContent = document.querySelector("#usertwo").value;

    document.querySelector("#p1flag").innerHTML = `<img src="img/${document.querySelector("#p1country").value}.png" width="45px" height="45px">`;
    document.querySelector("#p2flag").innerHTML = `<img src="img/${document.querySelector("#p2country").value}.png" width="45px" height="45px">`;
};

document.querySelector("#btnReset").onclick = function () {
    if (confirm("Are you sure you want to reset?")) {
        document.querySelector("#racetovalue").textContent = "0";
        document.querySelector("#p1name").textContent = "Lorem";
        document.querySelector("#p2name").textContent = "Ipsum";
        document.querySelector("#p1flag").innerHTML = '<img src="img/none.png" width="45px" height="45px">';
        document.querySelector("#p2flag").innerHTML = '<img src="img/none.png" width="45px" height="45px">';
    }
};

// Function to update scores
function updateScore(player, change) {
    if (player === "p1") {
        p1score += change;
        document.querySelector("#p1score").textContent = p1score;
    } else {
        p2score += change;
        document.querySelector("#p2score").textContent = p2score;
    }
}

// Attach event listeners dynamically
document.querySelector("#p1sub").onclick = () => updateScore("p1", -1);
document.querySelector("#p1add").onclick = () => updateScore("p1", 1);
document.querySelector("#p2sub").onclick = () => updateScore("p2", -1);
document.querySelector("#p2add").onclick = () => updateScore("p2", 1);

// Function to track attempts
function trackAttempt(player, made) {
    if (player === "p1") {
        p1attempt++;
        if (made) p1make++;
    } else {
        p2attempt++;
        if (made) p2make++;
    }
}

function calcPercentage(x, y) {
    return (x / y * 100);
}

document.querySelector("#p1make").onclick = () => trackAttempt("p1", true);
document.querySelector("#p1miss").onclick = () => trackAttempt("p1", false);
document.querySelector("#p2make").onclick = () => trackAttempt("p2", true);
document.querySelector("#p2miss").onclick = () => trackAttempt("p2", false);

// Show player info
document.querySelector("#p1pot").onclick = function () {
    document.querySelector("#p1statistic").innerHTML = "Pot Success Rate: " + calcPercentage(p1make,p1attempt).toFixed(0) + "%";
    document.querySelector("#p1info").classList.toggle("p1infoshow");
};
document.querySelector("#p1missed").onclick = function () {
    document.querySelector("#p1statistic").innerHTML = "Missed Balls: " +  (p1attempt - p1make);
    document.querySelector("#p1info").classList.toggle("p1infoshow");
};
document.querySelector("#p2pot").onclick = function () {
    document.querySelector("#p2statistic").innerHTML = "Pot Success Rate: " + calcPercentage(p2make,p2attempt).toFixed(0) + "%";
    document.querySelector("#p2info").classList.toggle("p2infoshow");
};
document.querySelector("#p2missed").onclick = function () {
    document.querySelector("#p2statistic").innerHTML = "Missed Balls: " +  (p2attempt - p2make);
    document.querySelector("#p2info").classList.toggle("p2infoshow");
};
