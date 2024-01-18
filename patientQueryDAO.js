const database = require('./database');
const cache = require('./cache');

function retrievePatientList() {
    return database.patientList;
}

function retrievePatient(id) {
    return cache.patientCache[id];
}

module.exports = { retrievePatientList, retrievePatient };
