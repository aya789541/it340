const patientService = require('./patientService');

// Ajouter des patients
patientService.addPatient("Doe", "John");
patientService.addPatient("Smith", "Jane");

// Lister tous les patients
console.log("Liste des patients:", patientService.getPatientList());

// Modifier un patient
patientService.savePatient(1, "Doe", "Jonathan");

// Récupérer un patient spécifique
console.log("Patient modifié:", patientService.getPatient(1));
