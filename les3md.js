function shake(woordDatGeschudtMoetWorden) {
    const characters = woordDatGeschudtMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');
    return geschudWoord

}

let woord1 = shake("Boom");
let woord2 = shake("Schoen");
let woord3 = shake("Kaas");
console.log(woord1);
console.log(woord2);
console.log(woord3);



let kubusInhoud = 10 * 5 * 8;
console.log(kubusInhoud);
  

let berekeningCylinder = 8 * Math.PI * 24;
    console.log(berekeningCylinder);
    

let berekeningDriehoek = 9 + 4;
console.log(berekeningDriehoek);


function gemiddeldeGetallen(){
    let berekeninggemiddeldeGetallen = (gemiddeldeGetallen / 7 );
    console.log(+ 304 / 7);
  
  }
  
  gemiddeldeGetallen(5, 8, 15, 36, 42, 92, 106);
  
  
