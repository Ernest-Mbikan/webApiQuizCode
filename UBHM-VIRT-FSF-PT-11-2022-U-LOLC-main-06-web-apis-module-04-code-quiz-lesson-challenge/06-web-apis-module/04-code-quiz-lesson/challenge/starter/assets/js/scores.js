var goBackBtn = document.querySelector("index.html"),
var clearBtn = document.querySelector("clear"),

highScoresEl = JSON.parse(localStorage.highscores || "[]"),
highScoreList = document.getElementById("highscores"); 

highScoresEl.sort(function (x, y) {
    return y.score - x.score
})

for (var i = 0; i < highScoresEl.length; i++) {
    var newLi = document.createElement("li")
    newLi.textContent = highScoresEl[i].name + " - " + highScoresEl[i].score
    highScoreList.appendChild(newLi)
}

clearBtn.addEventListener("click", function(){
    localStorage.clear();
    history.back();
})
goBackBtn.addEventListener("click", function (){
    history.back();
});