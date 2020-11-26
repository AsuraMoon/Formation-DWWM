/*
var prix;
prix = prompt("Bonjour, Quel est le Prix de base ? ");
var taux;
taux = prompt("Et de combien est la reduction ? ");
var reduc;
reduc = prix*taux/100;
var prixFin;
prixFin = prix-reduc;
console.log("Réduction : ",reduc,"$")
console.log("Voici le prix final : ",prixFin,"$");

var n1;
var n2;

n1 = Number(prompt("Entrer un nombre : "));
n2 = Number(prompt("Entrer un nombre : "));

if((n1 > 0 && n2 > 0) || (n1 < 0 && n2 < 0))
{
  console.log("ce nombre est positif")
}
else 
{
  console.log("ce nombre est négatif")
}

var age;

age = Number(prompt("entre votre age"));

console.log(age);
console.log(typeof(age));

if(age >= 12)
{
  console.log("cadets");
}
else if( age >= 10)
{
  console.log("minimes");
}
else if( age >= 8)
{
  console.log("pupilles");
}
else if( age >= 6)
{
  console.log("poussins");
}
else
{
  console.log("Pas de catégorie pour cet âge");
}

var categorie;

categorie = prompt("Entrez votre catégorie");

switch(categorie.toLowerCase())
{
  case "poussin":
    console.log("l'enfant a 6 ou 7 ans");
    break;
  case "pupille":
    console.log("l'enfant a 8 ou 9 ans");
    break;
  case "minime":
    console.log("l'enfant a 10 ou 11 ans");
    break;
  case "cadet":
    console.log("l'enfant a plus de 12");
    break;
  default:
    console.log("La catégorie n'existe pas");
    break;
} 

var compteur , total , chiffre, closer;

ferme = 0 ;
total = 0 ;
compteur = 0 ;


chiffre = Number(prompt("Quel est le chiffre choisis ? "));

while (chiffre != ferme)
{    
    total = total + chiffre;
    chiffre = Number(prompt("Quel est le chiffre choisis ? "));
    compteur = compteur + 1;
}

console.log (compteur) ;
*/
/*
var nbr , tot , comp ;

nbr = 0 ;
tot = 0 ;



for ( comp = 0 ; comp < 5; compteur++ )
{
    nbr = Number(prompt("Choisir un nombre a additionner"));
    tot += nbr;
}

console.log ("Total = ", tot, "en tant d'actions : ", comp)
*/

