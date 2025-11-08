"use strict"; // (slide 51) Active le mode strict pour éviter les erreurs de portée ou de déclaration

// --- Déclaration des variables (slides 37 à 39) ---
const prenom = "John";
const nom = "Doe";
const age = 15;
const note = 18.5;
const pi = 3.14;

// --- Déclaration des fonctions (slide 45) ---

// f1() : afficher le nom
function f1() {
    console.log("Nom :", nom); // utilisation de console.log (slide 33)
}

// f2() : afficher le prénom
function f2() {
    console.log("Prénom :", prenom);
}

// f3() : afficher nom et prénom
function f3() {
    console.log("Nom & Prénom :", prenom + " " + nom); // concaténation (slide 41)
}

// f4() : afficher l'âge
function f4() {
    console.log("Âge :", age);
}

// f5() : afficher la note
function f5() {
    console.log("Note :", note);
}

// f6() : afficher la valeur de π
function f6() {
    console.log("Valeur de π :", pi);
}

// --- Attacher les événements aux boutons (slides 128-133 sur les événements) ---
document.getElementById("btnNom").onclick = f1;
document.getElementById("btnPrenom").onclick = f2;
document.getElementById("btnNomPrenom").onclick = f3;
document.getElementById("btnAge").onclick = f4;
document.getElementById("btnNote").onclick = f5;
document.getElementById("btnPi").onclick = f6;

// --- Fin du script ---
