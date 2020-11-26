Variable B , T , F en Entier Relatif
Debut
Ecrire "Entrer prix de base"
Lire B
Ecrire "Taux en Pourcentage (tel que 50 ou 75)"
Lire T
F <-- B*T/100
Ecrire "Prix final :", F
Fin

Variable U , V en Entier
Debut
Ecrire "Combien y a t'il d'utilisateur? et d'utilisatrices?"
Lire U
Lire V
Si U > 0
    alors Ecrire " Valeur positive"
    sinon si U=0
        alors Ecrire "valeur 0"
        si non Ecrire "Valeur negative"
        fsi
    fsi
fsi
Si V > 0
    alors Ecrire " Valeur positive"
    sinon si V=0
        alors Ecrire "valeur 0"
        si non Ecrire "Valeur negative"
        fsi
    fsi
fsi
Fin

number = determine le type de nombre qui correspond
parsefloat = nombre en float (a virgule)
parseInt = nombre int (Entier)