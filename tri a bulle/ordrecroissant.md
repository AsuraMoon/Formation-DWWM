Faire un tri croissant de valeur

Procédure recupValeursEtTaille(tableau[], valeur , taille)
    taille ← 0 ;
    Répéter tant que valeur != X ;
        Pour tableau[valeur] ← 0 par pas de 1 ;
            taille = taille + 1 ;
            Display "Entrer vos valeurs ou mettez X quand vous avez fini" ;
            lire tableau[valeur] ;
        FinPour ;
    Fin Répéter tant que ;
Fin Fonction ;

Procédure croissant (tableau[] , valeur , taille , vérif )
    Répéter Tant que vérif != faux
        vérif ← faux
        Pour tableau[valeur] ← 1 jusqu'a tableau[valeur] < taille par pas de 1 ;
            Si tableau[valeur] < tableau[valeur+1] ; 
            alors
                vérif ← vrai
                temp ← tableau[valeur] ;
                tableau [valeur] ← tableau[valeur+1] ;
                tableu[valeur+1] ← temp ;
            Fin Si
        Fin Pour
    Fin Répéter Tant que

var ordreCroissant[]; entier
    chiffre , tailleTableau 

Début
    Procédure recupValeursEtTaille (ordreCroissant , chiffre , tailleTableau)
    Procédure  croissant (ordreCroissant , chiffre , tailleTableau)
    Renvoi tableau
Fin

4! = 4x3x2


Fonction Cherche(valeurVrai , valeurOrdi)
Valeur←100
    Si valeurVrai != valeurOrdi
        alors 
        Si valeurVrai < valeurOrdi
            valeurOrdi ← valeurOrdi-(valeurOrdi/2)
            retourne Cherche(valeurVrai , ValeurOrdi)
        Sinon
            valeurOrdi ← valeurOrdi+(valeurOrdi/2)
            retourne Cherche(valeurVrai , ValeurOrdi)
        FSi
    Fsi




360
250
375
187
