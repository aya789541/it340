
const { addPatient, savePatient } = require('./patientCommand');
// Ajouter un nouveau patient
addPatient('Doe', 'John');

// Sauvegarder les modifications d'un patient
savePatient(1, 'Doe', 'Jane'); // Assurez-vous que l'ID correspond à un patient existant

