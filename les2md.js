let huidigeTijd = new Date(2023, 10, 6, 10, 46);

console.log(huidigeTijd.getHours());
if(huidigeTijd.getHours() > 9 && huidigeTijd.getHours() <16){
    console.log("Ik moet op school zijn")
} else {
    console.log("Ik moet niet op school zijn")
}

var readlineSync = require('readline-sync');


var age = readlineSync.question('Hoe oud ben jij? ');

if (age < 21) {
    console.log("Te jong sorry.")
} else {
    ID = readlineSync.keyInYN('Mag ik je ID zien?');
    if (ID == true) {
        console.log("Kom verder")
    } else {
        console.log("Sorry dan mag je niet binnenkomen")
    }
}

let huidigedag = "dinsdag";

if(huidigedag == ""){
    console.log("Ik moet naar school");
} else {
    console.log("Lekker uitslapen!");
}