/*
var nbrRandom , nbrJoueur ;
const max = 500 ;

nbrRandom = Math.floor(Math.random() * Math.floor(max+1));
nbrJoueur = prompt(`Quel est votre chiffre? (compris entre 0 et ${max})`);


while(nbrJoueur != nbrRandom)
{
    if(nbrRandom>nbrJoueur)
    {
        nbrJoueur = prompt("Trop petit, le chiffre est plus grand");
    }
    else
    {
        nbrJoueur = prompt("Trop grand, le chiffre est plus petit");
    }
 }

alert ("GG");
*/
/*
var Prénom , Age , Majorité ;

Prénom = String(prompt("Quel est votre prénom ?")) ;
Age = Number(prompt("Quel est votre age ?")) ;

if (Age > 18) {
  alert (`Bonjour ${Prénom} Vous avez ${Age} Ans donc vous êtes Majeur`)
} else {
  alert (`Bonjour ${Prénom} Vous avez ${Age} Ans donc vous êtes Mineur`)
}

*/

/*function num(nombre){
  if (nombre===42){
    alert("Voici le nobmre de la vérité absolue")
  }
  else{
    nombre = Number(prompt(`ceci n'est pas le nombre de la vérité absolue`))
  }  
}

var nombre = Number(prompt(`Entrer le chiffre de la vérité absolue a toutes choses`))
num(nombre) ;
*/
/*
function carre(nbr) {
  return nbr * nbr;
}

result = carre(Number(prompt(`écrire un nombre dont vous cherchez le carré : `)));
alert(result);


function exponentiel(nbrExpo , exposant) {
  return (Math.pow(nbrExpo,exposant));
}

nbrExpo = prompt("entre un nombre")
exposant = prompt("entre un exposant")
resultExpo = exponentiel(nbrExpo , exposant)

alert (resultExpo);
*/
/*
function add(nbr1 , nbr2){
  return nbr1 + nbr2;
};

function substraction(nbr1 , nbr2){
  return nbr1 - nbr2;
};

function multiply(nbr1 , nbr2){
  return nbr1 * nbr2;
};

function diviser(nbr1 , nbr2){
  return nbr1 / nbr2;
};

nbr1 = Number(prompt(`Quel est le premier nombre de l'opération`));
nbr2 = Number(prompt(`Quel est le deuxième nombre de l'opération`));

resultadd = add(nbr1 , nbr2)
resultsub = substraction(nbr1 , nbr2)
resultmult = multiply(nbr1 , nbr2)
resultdiv = diviser(nbr1 , nbr2)

console.log (resultadd)
console.log (resultsub)
console.log (resultmult)
console.log (resultdiv)

opérateur = prompt(`Choisissez votre type opération (+ , - , * , /)`)

switch (opérateur) {
  case `/`:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à div
    alert (`Vous avez demandé une division donc le resultat est ${resultdiv}`);
    break;
  case `-`:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à sous
    alert (`Vous avez demandé une soustraction donc le resultat est ${resultsub}`);
    break;
  case `*`:
    // Instructions à exécuter lorsque le résultat
    // de l'expression à mult
    alert (`Vous avez demandé une multiplication donc le resultat est ${resultmult}`);
    break;
    default:
    // Instructions à exécuter lorsqu'aucune des valeurs
    // ne correspond donc addition
    alert (`Vous avez demandé une addition donc le resultat est ${resultadd}`);
    break;
}
*/

var compteur = 0
var nbr = Number(prompt(`Entrer la variable dans la conjecture de Syracuse`))

function Pair(nbr){
  return nbr % 2 === 0;
}

function Syracuse(n){
  while(n!=1){
    if (Pair(n)){
      n = n/2;
    }
    else{
      n = n*3+1;
    }
    compteur++;
  }
  return compteur;
}

let result = Syracuse(nbr)

alert (`La conjecture de syracuse est atteinte en ${compteur} opération`)