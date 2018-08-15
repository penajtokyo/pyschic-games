var computerChoices =["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y", "z"]

var wins = 0;
var losses =0;
var guesses=9;
var reset = 9;
document.onkeyup = function(event)  {
    
    var userGuess = event.key;

    computerChoices = computerChoices [Math.floor(Math.random()*computerChoices.length)] ;

    if(userGuess === computerChoices){
        win++;
    } else{
        guesses--;
    }
    if(guesses ===0){
        losses++
    }

document.getElementById("wins").innerHTML = "wins: " + wins;
document.getElementById("losses").innerHTML = "losses: " + losses;
document.getElementById("guesses").innerHTML = "guesses: " + guesses;
document.getElementById("guesses").reset()
}



