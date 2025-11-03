"use strict";
// declaration du tableau d'objets vu dans le slide 39
const Etudiants = [
  { matricule: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
  { matricule: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
  { matricule: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

// déclaration des fonctions vu dans le slide 45
function B(moyenne) {
  // la condition vu dans le slide 42
  if (moyenne >= 10) {
    return true;
  } else {
    return false;
  }
}
function A() {
  console.log("Resultat de la deliberation :");
  // utilisation de la boucle for vu dans le slide 44
  for (let i = 0; i < Etudiants.length; i++) {
    let etu = Etudiants[i];
    let moyenne = (etu.note1 + etu.note2) / 2 + 5;// expression arithmetique vu dans le slide 41
    let resultat = B(moyenne); // appel de B avec la moyenne (type float)

    if (resultat === true) {
      console.log(etu.matricule + " : ADMIS"); //  dans le slide 33 utilisation de console.log() pour affichage
    } else {
      console.log(etu.matricule + " : AJOURNE");
    }
  }
}
