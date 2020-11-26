Soit un tableau de 20 valeurs. 
On doit écrire un algorithme saisissant un nombre et vérifier qu'il est à l'intérieur ou non du tableau. 
Le chiffre fait partie du tableau
Le chiffre ne fait pas partie du tableau
Le tableau est déjà rempli


Const tailleListe
Var valeurNombre[] : entiers
    position , valeurPerso , verif

verif ← false


Début
    Afficher ("Quelle est votre nombre ?");
    Lire valeurPerso;
    Pour compteur ← 0 a compteur < tailleListe;
        Si valeurNombre[position] == valeur Perso;
            retour ("on a cette valeur en " position);
            verif ← true;
            break;
        fsi;
    fpour;
    Si verif == false;
        retour ("nous n'avons pas votre valeur");
Fin