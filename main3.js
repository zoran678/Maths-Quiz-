function  updateScore() {
     
    Score = score +2 ;
    document.getElementById("score").innerHTML= "score"+ score;

}

function saveScore() {

    localStorage.setItem("score",score);
}


function nextPage () 
{
    window.location= "index2.html";

}