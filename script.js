let mybutton = document.querySelector("button");

const arr = [["n","b","a","","","l","a","w","s","","d","r","e","a","d"],
["m","o","g","a","d","i","s","h","u","","o","c","e","a","n"],
["r","a","n","s","o","m","m","e","d","","g","a","l","a","s"],
["","","","k","h","a","r","t","o","u","m","","","",""],
["w","i","k","i","","","","","","n","a","","g","a","p"],
["t","o","o","n","","a","r","k","","","","","a","g","e"],
["o","u","a","g","a","d","o","u","g","o","u","","s","o","n"],
["","","","","m","a","n","d","a","l","a","","","",""],
["p","a","d","","b","r","a","z","z","a","v","i","l","l","e"],
["i","c","e","","","","","u","a","w","","m","o","a","n"],
["n","e","w","","s","t","","","","","","a","c","m","e"],
["","","","","c","a","p","i","t","a","l","s","","",""],
["s","c","u","b","a","","u","n","a","l","l","o","y","e","d"],
["c","o","r","e","r","","b","u","j","u","m","b","u","r","a"],
["h","o","n","e","y","","s","t","o","m","","","m","r","s"],
]


function checkAnswers () {
    let errors = 0
    for (var  row = 0; row < 15; row++) {
        for (var col = 0; col < 15; col++) {
            var ident=((row+1).toString())+"-"+((col+1).toString())
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
