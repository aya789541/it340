const Patient = require('./patient');
const patientDAO = require('./patientDAO');

let nextId = 1;

function addPatient(lastName, firstName) {
    const patient = new Patient(nextId++, lastName, firstName, new Date());
    patientDAO.insertPatient(patient);
}

function getPatientList() {
    return patientDAO.retrievePatientList();
}

function savePatient(id, lastName, firstName) {
    const patient = patientDAO.retrievePatient(id);
    if (patient) {
        patient.lastName = lastName;
        patient.firstName = firstName;
        patientDAO.updatePatient(patient);
    }
}

function getPatient(id) {
    return patientDAO.retrievePatient(id);
}

module.exports = { addPatient, getPatientList, savePatient, getPatient };
