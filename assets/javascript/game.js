var computerChoices =["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y", "z"]

var win = 0;
var losses =0;
var guesses=9;
document.onkeyup = function(event) {
    
    var userGuess = event.key;

    computerChoices = computerChoices [Math.floor(Math.random()*computerChoices.length)] ;

    if(userGuess === computerChoices){
        win++;
    } else(userGuess !== computerChoices)
    { losses++}

    var html=
    "<p>Wins:" + win +"</p>"+
    "<p>Losses:" + losses + "</p>";

    document.querySelector("#game").innerHTML;


}