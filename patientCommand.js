const patientCommandDAO = require('./patientCommandDAO');
const Patient = require('./patient');
const cache = require('./cache');

let nextId = 1;

function addPatient(lastName, firstName) {
    const patient = new Patient(nextId++, lastName, firstName, new Date());
    patientCommandDAO.insertPatient(patient);
    // Ajout sans la date de création dans patientList
    cache.patientCache[patient.id] = { id: patient.id, lastName: patient.lastName, firstName: patient.firstName, name: patient.lastName + ' ' + patient.firstName };
}

function savePatient(id, lastName, firstName) {
    const patient = { id, lastName, firstName };
    patientCommandDAO.updatePatient(patient);
    // Mise à jour dans le cache
    if(cache.patientCache[id]) {
        cache.patientCache[id].lastName = lastName;
        cache.patientCache[id].firstName = firstName;
        cache.patientCache[id].name = lastName + ' ' + firstName;
    }
}

module.exports = { addPatient, savePatient };
