"use strict";

// vu dans le slide declaration d'un tableau 
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// declaration d'un objet etudiant  vu dans le slide 39
const etudiant = {
  nom: "John",
  prenom: "DOE",
  age: 30
};

// declaration d'un tableau d’objets vu dans le slide 40
const tableauObjets = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

// declaration de fonctions vu dans le slide 45
function f1() {
  // utilisation de console.log() pour l’affichage vu dans le slide 33
  console.log("Tableau des etudiants :");
  // boucle for vu dans le slide 44
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
  }
}

function f2() {
  console.log("Objet etudiant :");
  console.log(etudiant);
}

function f3() {
  console.log("Tableau d'objets etudiants :");

  // utilisation d’une boucle for pour parcourir le tableau d’objets vu dans le slide 44
 for (let i = 0; i < tableauObjets.length; i++) {
  let obj = tableauObjets[i];
  console.log(obj.nom + "-" + obj.prenom + "-" + obj.age);
}

}