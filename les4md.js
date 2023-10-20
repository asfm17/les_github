let antwoordGoed = false
var readlineSync = require('readline-sync');

hetGetal = Math.floor(Math.random() * 101);
var vraagAntwoord = readlineSync.question('What is the number? (between 0 and 100) ')

while (antwoordGoed == false) {

    if (vraagAntwoord == hetGetal) {
        antwoordGoed = true;
        console.log("That's correct! ")
    } else {
        console.log("Wrong, that's incorrect")
        var vraagAntwoord = readlineSync.question('What is the number? (between 0 and 100) ')
    }
} 