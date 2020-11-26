  
Alt +27 =  ←  

----------------------------------------------------------------------

Algorithme Black Friday

Variables prixInitial, tauxReduction, reductionEffective, prixFinal : Nombres

Début
    Afficher("Saisissez le prix initial :")
    Lire(prixInitial)
    Afficher("Saisissez le taux de réduction :")
    Lire(tauxReduction)
    reductionEffective ← prixInitial x (tauxReduction/100)
    prixFinal ← prixInitial-reductionEffective
    Afficher("Reduction de " & reduction Effective & "€")
    Afficher ("Prix Final : " & prixFinal & "€")
Fin 

----------------------------------------------------------------------

algorithme positif

variables nombre : flottant

début
    afficher("Saisissez un nombre")
    lire(nombre)
    si (nombre>0)
        alors afficher("Votre nombre est positif")
        sinon si (nombre<0)
            alors afficher("Votre nombre est négatif")
            sinon afficher("Noooooon !")
        fsi        
    fsi
fin

----------------------------------------------------------------------

Algorithme Produit Positif

Variables premierNombre, deuxiemeNombre : flottant

Début
    Afficher("Saisissez un premier nombre")
    Lire(premierNombre)
    Afficher("Saisissez un deuxieme nombre")
    Lire(deuxiemeNombre)
    si (premierNombre < 0 XOR deuxiemeNombre<0)
        Alors Afficher("Le produit de vos nombres est négatif")
        Sinon Afficher("Le produit de vos nombres est positif")
    fsi
Fin

----------------------------------------------------------------------

Algorithme Obtenir la catégorie à partir de l'Algorithme

Variables age : int

Début
    Afficher("Quel age a l'enfant ?")
    Lire(age)
    Si (age<6)
        Alors Afficher("Cet enfant est trop jeune")
        Sinon Si (age<=7)
            Alors Afficher("Poussin")
            Sinon Si (age<=9)
                Alors Afficher("Pupille")
                Sinon Si (age<=11)
                    Alors Afficher("Minime")
                    Sinon Afficher("Cadet")
                Fsi
            Fsi
        Fsi
    Fsi
Fin

----------------------------------------------------------------------

Algorythme avoir l'age à partir des catégories

Variables categorie : string

Début
    Afficher("En quelle catégorie est l'enfant ?")
    Lire(categorie)
    Selon categorie
        Cas "Poussin" : Afficher("6 à 7 ans")
        Cas "Pupille" : Afficher("8 à 9 ans")
        Cas "Minime" : Afficher("10 à 11 ans")
        Cas "Cadet" : Afficher("plus de 12 ans")
        Cas autres : Afficher("Je ne connais pas cette catégorie")
    Finselon
Fin

----------------------------------------------------------------------

Algorithme Tant que addition et comptage (avec erreur)

Variables nombre, total, compteur, stop
nombre ← 0
total ← 0
compteur ← 0
stop ← 0

Début
  Afficher("Entrez un nombre")
  Lire(nombre)
  Tant que nombre != stop faire
    total ← total + nombre
    compteur ← compteur + 1
  ftanque
  Afficher("total:",total," boucles:",compteur)
Fin

----------------------------------------------------------------------

Algorithme Tant que addition et comptage (corrigé avec un do)

Variables nombre, total, compteur, stop
nombre ← 0
total ← 0
compteur ← 0
stop ← 0

Début
  Afficher("Entrez un nombre")
  Lire(nombre)
  Répéter
    total ← total + nombre
    compteur ← compteur + 1
  Tant que (nombre != stop)
  Afficher("total:",total," boucles:",compteur)
Fin

----------------------------------------------------------------------

Algorithme Additionner 5 fois

variables compteur, objectif, nombre, total, pas : entiers
pas ← 1
objectif ← 5
nombre ← 0
total ← 0

Début

    Pour compteur ← 0 à objectif par PAS faire
        afficher("Entrer un nombre")
        lire(nombre)
        total ← total + nombre
    fpour

    afficher("J'ai fait", compteur, " opérations pour un total de ", total)
    
Fin

----------------------------------------------------------------------

Algorithme Nombres divisibles par 3

Variables nombre : entier
Début
    Afficher("Veuillez saisir un nombre")
    Lire(nombre)
    Afficher("Il existe ",nombre/3, " nombres divisibles par 3 inférieurs ou égaux à votre nombre")
Fin

----------------------------------------------------------------------

Algorithme Afficher la valeur maximale et son index

Variables   listeNombres[] : entiers
            tailleListe, index, max, compteur : entier

Début
    Afficher("Combien d'éléments voulez vous comparer ?")
    Lire("tailleListe")
    Pour compteur ← 0 à compteur<tailleListe
        Afficher(compteur+1,"° nombre : ")
        Lire(listeNombres[compteur])
    Fpour
    Pour compteur ← 0 à compteur<tailleListe
        Si listeNombres[compteur]>=max
            Alors 
                max ← listeNombres[compteur]
                index ← compteur
        Fsi
    Fpour
    Afficher("Le plus grand nombre est ",max," situé en ",index+1,"° position (à l'index ",index,")")
Fin

----------------------------------------------------------------------
