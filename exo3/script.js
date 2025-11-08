"use strict"; // (Concept: Mode Strict, vu dans le slide 142 - Bonnes pratiques)

/**
 * Fonction B (calculateStatus): Calcule la note finale et le statut d'un étudiant.
 * @param {Object} student - L'objet étudiant à traiter.
 * @returns {string} - La ligne de résultat formatée.
 */
function calculateStatus(student) {
    // Calcul de la note finale (Note + Bonus)
    // (Concept: Opérateurs arithmétiques, vu dans le slide 47)
    const finalNote = student.note + student.bonus; 
    
   
    let status;
    // (Concept: Structure conditionnelle if/else, vu dans le slide 49)
    if (finalNote >= 10) { 
        status = "Admis";
    } else {
        status = "Ajourné";
    }
    
    // Retourne le string formaté comme ligne de délibération
    // (Concept: Template Literals (ES6+), vu dans le slide 41)
    return `${student.id} - ${student.nom} ${student.prenom} - Note Finale: ${finalNote}/20 - Statut: ${status}`;
}


/**
 * Fonction A (deliberation): Gère le processus de délibération.
 * Fonction appelée par le bouton.
 */
// (Concept: Déclaration de fonction, vu dans le slide 55)
function deliberation() {
    // Données Students (Concept: Tableau d'objets, vu dans le slide 42)
    const Students = [
        { id: 1000, prenom: "JOHN", nom: "DOE", note: 14, bonus: 5 },
        { id: 2000, prenom: "BOB", nom: "CARLTON", note: 7, bonus: 1 },
        { id: 3000, prenom: "RAYANE", nom: "SMITH", note: 13, bonus: 3 },
    ];
    
    // (Concept: Sortie console.log(), vu dans le slide 39)
    console.log("--- Lancement de la délibération ---");
    
    // Parcours du tableau et appel de la fonction B pour chaque étudiant
    // (Concept: Boucle forEach pour parcourir un tableau, vu dans le slide 45 - Référence de l'énoncé)
    Students.forEach(student => { 
        // Appel de la fonction B
        const resultLine = calculateStatus(student); 
        console.log(resultLine); 
    });
    
    console.log("--- Délibération terminée ---");
}