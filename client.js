const patientCommand = require('./patientCommand');
const patientQuery = require('./patientQuery');

// Ajouter des patients
patientCommand.addPatient("Doe", "John");
patientCommand.addPatient("Smith", "Jane");

// Lister tous les patients
console.log("Liste des patients:", patientQuery.getPatientList());

// Modifier un patient
patientCommand.savePatient(1, "Doe", "Jonathan");

// Récupérer un patient spécifique
console.log("Patient modifié:", patientQuery.getPatient(1));
