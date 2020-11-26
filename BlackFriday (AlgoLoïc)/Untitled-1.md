variable nrbUser , nrbVerif , compteur.
    compteur ← 0
    nrbVerif ← 3

Début
    Afficher("Donner un nombre :")
    lire(nrbUser)

    SI nrbUser < 3
        Ne rien faire
        SINON
            Répéter
                compteur ← compteur + 1
                nrbVerif ← nrbVerif + 3
            TANT QUE nrbUser > nrbVerif
    FSI

    afficher(compteur)
Fin
----------------------------------------------------------

Algorithme Afficher la valeur maximale et son index

Variables   valeurNombres[] : entiers
            nombreLigne, index, max, compteur : entier

nombreLigne ← 0
compteur ← 0
index ← 0
max ← 0
compteur ← 0

Début
    Afficher ("Entrer le nombre de valeurs comparer :")
    Lire ("nombreLigne")
    Tant que compteur < nombreLigne
        Afficher("Qu'elle est la valeur de la "[compteur]" ligne ?")
        Lire(valeurNombres) pour [compteur]
    Si valeurNombres[compteur]>=max
        Alors 
            max ← Nombres[compteur]
            index ← compteur
    Fsi
    Afficher("Le plus grand nombre est ",max," situé en ",index+1,
    "et position (à l'index ",index,")")
Fin
-------------------------------------------------------------
Variable nombre, max, index, compteur, tableau[], tailleTableau : entier
compteur ← 0
nombre ← 0
max ← 0
index ← 0

Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer le nombre numéro ", compteur+1)
        lire(tableau[compteur])
    FPour

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        Si tableau[compteur] > max
            Alors max ← tableau[compteur]
                    index ← compteur
        Fsi
    Fpour

    afficher("La plus grande valeur est : ", max, " et elle est située
    sur la case numéro ", index)
Fin

-----------------------------------------------------------


Algorithme Afficher la valeur n+1 et sur n

Variables   listeNombres[] : entiers
            tailleListe, max, compteur : entiers

tailleListe ← 0
compteur ← 0
nombre ← 0
max ← 0

Début
    Afficher("Combien d'éléments voulez vous échanger ?")
    Lire("tailleListe")
    Pour compteur ← 0 à compteur>tailleListe
        Afficher(compteur+1,"° nombre : ")
        Lire(listeNombres[compteur])
    Fpour

max ← compteur
listeNombres[max+1] ← listeNombres[0]

    Pour compteur ← 0 à compteur<tailleListe
        listeNombres[compteur] ← listeNombres[compteur+1]
        listeNombres [max]← listeNombres [max+1]
    Fpour
    Afficher("Toutes les valeurs de la liste on été décalé d'un rang")
Fin

---------------------------------------------------------------------------------------------------------

Variable nombre, max, min, compteur, tableau[], tailleTableau : entier
compteur ← 0
nombre ← 0
max ← 0
min ← 0
Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer le nombre numéro ", compteur+1)
        lire(tableau[compteur])
    FPour

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        Si tableau[compteur] > max
            Alors max ← tableau[compteur]
        Fsi
    Fpour

min ← max
    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        Si tableau[compteur] < min
            Alors min ← tableau[compteur]
        Fsi
    Fpour

    afficher("La plus grande valeur est : ", max, "La plus petite valeur est : ", min .)
Fin

-----------------------------------------------------------------------------------------------------------

Variable nombre, max, min, compteur, tableau[], tailleTableau : entier
compteur ← 0
nombre ← 0
max ← 0
min ← 0
indexmax ← 0
indexmin ← 0

Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer le nombre numéro ", compteur+1)
        lire(tableau[compteur])
    FPour

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        Si tableau[compteur] > max
            Alors max ← tableau[compteur]
            Et indexmax ← compteur
        Fsi
    Fpour

min ← max

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        Si tableau[compteur] < min
            Alors min ← tableau[compteur]
            et indexmin ← compteur
        Fsi
    Fpour

    Si min ≠

    afficher("La plus grande valeur est : ", max, "La plus petite valeur est : ", min .)
Fin

