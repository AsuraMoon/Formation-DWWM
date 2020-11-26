Algorithme 

Variables   listeNotes[] : entier
            nbrElèves, compteur , tour: entier

Début
    Afficher("Nombre d'élèves ?")
    Lire("nbrElèves")
    Pour compteur ← 0 à compteur<nbrElèves par pas de 1
        Afficher("Elève",compteur+1,"°, note : ")
        Lire(listeNotes[compteur])
    Fpour
    Tant que tour < nbrElèves
        tour ++
        Pour compteur ← 0 à compteur < nbrElèves par pas de 1
            Si listeNotes[compteur] > listeNotes[compteur+1]
                Alors temp ← listeNotes[compteur]
                listeNotes[compteur] ← listeNotes[compteur+1]
                listeNotes[compteur+1] ← temp
            Fsi
        Fpour
    alors repeter
Fin