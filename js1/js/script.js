/** ES5 **/
/* var is functionScoped
* */

function functionScoped(test){
    if (test){
        var naam = "Michael"
    }
    console.log(naam)
}

/** Programma **/

functionScoped(true);

/** ES6 **/
/* let is blockscoped
console.log moet binnen de if block geplaatst worden */

function blockScoped(test) {
    if (test){
        let naam = "Michael";
        console.log(naam);
    }
}
blockScoped(true)

/** NOTATIE: NAMED FUNCTION
 * function naam(parameter, parameter, ...){ RETURN resultaat, variabele, array}
 *
 */

var eenNaam = function mijnSom(a,b){
    return a + b;
}
eenNaam(1,3);
/* mijnSom(1,3); //reference error */

/** NOTATIE/ ANONYMOUS FUNCTIONS
 * function naam(parameter, parameter, ...){ RETURN resultaat, variabele, array}
 * **/

var geenNaam = function mijnSom(a,b){
    return a + b;
}
geenNaam(1,3);

/** VOORBEELD ZELF GESCHREVEN FUNCTIE
 *
 * **/

function berekenLeeftijd(gJ){
    return huidigeJaar - gJ;
}
/*var huidigeJaar = new Date(); //OBJECT VARIABELE
console.log(huidigeJaar.getFullYear());

new Date().getFullYear()*/
var huidigeJaar = new Date().getFullYear()
var geboorteJaar = prompt("Geef uw geboorde jaar in:, yyyy:");

/*if (geboorteJaar > huidigeJaar){
    var geboorteJaar = prompt("Geef uw geboorde jaar in:, yyyy:");
}*/

/** Oplossing 1 **/

while(isNaN(geboorteJaar) || geboorteJaar.length !== 4){ // kan ook "isNaN(geboorteJaar).length !==4" ( chaining)
    var geboorteJaar = prompt("U heeft geen nummer gebruikt en u moet 4 cijfers in geven");
}
while(geboorteJaar > huidigeJaar || geboorteJaar < 1){
    var geboorteJaar = prompt("geboortejaar is kleiner dan huidige jaar en mag niet negatief zijn");
}
var resultaat = berekenLeeftijd(geboorteJaar);
console.log(resultaat);

/** Oplossing 2 **/

/*while(geboorteJaar > huidigeJaar || isNaN(geboorteJaar)){
    var geboorteJaar = prompt("U heeft geen nummer gebruikt of geboortejaar is kleiner dan huidige jaar");
}
var resultaat = berekenLeeftijd(geboorteJaar);
console.log(resultaat);*/

/**
 * VERSCHILLE N ES5 EN ES6
 */

let naam = "Michael"

//es5
document.write("Mijn naam is: " + naam + '<br>');
//es6
document.write(`mijn naam is: ${naam}` + "<br>");

function som(a,b) {
    return a+b;
}

let getal1 = 5;
let getal2= 6;
document.write(`De som van: ${getal1} + ${getal2} is ${som(getal1,getal2)}` + "<br>");

/** ARRAYS **/
const arrayGetallen = [1000,2000,3000,4000,5000];
//ES5
var verschil = arrayGetallen.map(function (el) {
    return 5000 - el;
});
document.write(`${verschil}` + "<br>");

//es6
let verschil2 = arrayGetallen.map(el => 5000 - el);
document.write(`${verschil2}` + "<br>")