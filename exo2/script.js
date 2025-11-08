"use strict"; // (Concept: Mode Strict, vu dans le slide 142 - Bonnes pratiques)

/**
 * Fonction f1(): Crée et affiche un tableau d'étudiants (simplement des chaînes).
 * Attendue dans la console: Etudiant1, Etudiant2, Etudiant3
*/
// (Concept: Déclaration de fonction, vu dans le slide 55)
function f1() {
    // (Concept: Déclaration d'un tableau simple (Array), vu dans le slide 42)
    const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; 
    
    // (Concept: Sortie console.log(), vu dans le slide 39)
    console.log("--- Exécution de f1() : Tableau Etudiants ---");
    
    // Utilisation d'une boucle pour parcourir le tableau
    // (Concept: Boucle 'for' pour itération sur tableau, vu dans le slide 45 - Référence de l'énoncé)
    for (let i = 0; i < tableauEtudiants.length; i++) { 
        console.log(tableauEtudiants[i]);
    }
}


/**
 * Fonction f2(): Crée et affiche un objet étudiant.
 * Attendue dans la console: {nom: 'John', prenom: 'DOE', age: 30}
 */
// (Concept: Déclaration de fonction, vu dans le slide 55)
function f2() {
    // (Concept: Déclaration d'un objet littéral (Object), vu dans le slide 42)
    const objetEtudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    // (Concept: Sortie console.log(), vu dans le slide 39)
    console.log("--- Exécution de f2() : Objet Etudiant ---");
    console.log(objetEtudiant); // Affiche l'objet tel quel
}


/**
 * Fonction f3(): Crée et affiche un tableau d'objets étudiants, formaté.
 * Attendue dans la console (format nom-prenom-age): nom1-prenom1-21, nom2-prenom2-22, nom3-prenom3-23
 */
// (Concept: Déclaration de fonction, vu dans le slide 55)
function f3() {
    // (Concept: Déclaration d'un tableau d'objets (Array of Objects), vu dans le slide 42)
    const tableauObjetsEtudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // (Concept: Sortie console.log(), vu dans le slide 39)
    console.log("--- Exécution de f3() : Tableau d'objets Etudiants ---");
    
    // Parcours du tableau d'objets et affichage du format 'nom-prenom-age'
    // (Concept: Boucle 'for' pour itération sur tableau d'objets, vu dans le slide 45 - Référence de l'énoncé)
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) {
        const etudiant = tableauObjetsEtudiants[i];
        // (Concept: Template Literals (ES6+), vu dans le slide 41)
        const resultat = `${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`; 
        console.log(resultat);
    }
}