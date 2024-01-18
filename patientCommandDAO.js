const database = require('./database');

function insertPatient(patient) {
    database.patients.push(patient);
    // Ajout aussi dans patientList
    database.patientList.push({ id: patient.id, lastName: patient.lastName, firstName: patient.firstName });
}

function updatePatient(patient) {
    // Mise à jour dans patients et patientList
    const index = database.patients.findIndex(p => p.id === patient.id);
    if (index !== -1) {
        database.patients[index] = patient;
        database.patientList[index] = { id: patient.id, lastName: patient.lastName, firstName: patient.firstName };
    }
}

module.exports = { insertPatient, updatePatient };
