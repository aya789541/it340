const database = require('./database');

function insertPatient(patient) {
    database.patients.push(patient);
    console.log(database.patients);
}

function retrievePatientList() {
    return database.patients.map(({ id, lastName, firstName }) => ({ id, lastName, firstName }));
}

function updatePatient(updatedPatient) {
    const index = database.patients.findIndex(p => p.id === updatedPatient.id);
    if (index !== -1) {
        database.patients[index] = updatedPatient;
        console.log(database.patients);
    }
}

function retrievePatient(id) {
    const patient = database.patients.find(p => p.id === id);
    return patient ? { ...patient, name: patient.lastName + ' ' + patient.firstName } : null;
}

module.exports = { insertPatient, retrievePatientList, updatePatient, retrievePatient };
