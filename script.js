let mybutton = document.querySelector("button");

const arr = [["h","a","y","a","o","","s","a","s","h"],
["o","r","a","l","b","","a","l","o","e"],
["t","e","s","l","a","","l","a","d","y"],
["","","","e","m","u","s","","",""],
["","m","i","y","a","z","a","k","i",""],
["l","e","s","s","s","o","","a","n","t"],
["i","l","l","","","","s","i","t","e"],
["e","t","a","","i","r","i","s","e","s"],
["t","e","n","","t","a","l","e","n","t"],
["o","d","d","","s","w","o","r","d","s"]]


function checkAnswers () {
    let errors = 0
    for (var  row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
            var ident=((row+1).toString())+((col+1).toString())
            const entry = document.getElementById(ident).value
            const ans = arr[row][col]
            if (ans != entry) {
                errors = errors + 1
            }
        }
    }
    if (errors === 0) {
        alert("Correct!")
    } else {
        alert("Incorrect! Try Again.")
    }
}
mybutton.onclick = function() {
    checkAnswers();
}