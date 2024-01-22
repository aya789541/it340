const patientCommandDAO = require('./patientCommandDAO');
const Patient = require('./patient');
const cache = require('./cache');
const {addEvent,eventList} = require('./eventStore'); // Importer addEvent également

console.log(addEvent); 
let nextId = 1;
function restorePatient(id) {
    // Filtrer les événements pour le patient spécifié
    const patientEvents = eventList.filter(event => event.patientId === id);

    if (patientEvents.length === 0) {
        return null; 
    }

    let patient = new Patient();

    // Appliquer chaque événement pour reconstruire l'entité patient
    patientEvents.forEach(event => {
        switch (event.name) {
            case 'patientAdded':
                patient = new Patient(event.patientId, event.payload.lastName, event.payload.firstName, event.payload.creationDate);
                break;
         
        }
    });

    return patient;
}
function addPatient(lastName, firstName) {
    const patient = new Patient(nextId++, lastName, firstName, new Date());
    // patientCommandDAO.insertPatient(patient); // Cette ligne  je l'ai suppriméede par rapport à l'autre partie 

    // Evénement patientAdded avec le patient en payload
    addEvent('patientAdded', patient.id, patient, new Date());

    // Ajout sans la date de création dans patientList
    cache.patientCache[patient.id] = { id: patient.id, lastName: patient.lastName, firstName: patient.firstName, name: patient.lastName + ' ' + patient.firstName };
}

function savePatient(id, lastName, firstName) {
    // Restaurer le patient en utilisant restorePatient
    let patient = restorePatient(id);

    if (patient) {
        // Mettre à jour les informations du patient
        patient.lastName = lastName;
        patient.firstName = firstName;

        // Ajouter un événement patientSaved
        addEvent('patientSaved', patient.id, patient, new Date());

        // Mise à jour dans le cache
        cache.patientCache[patient.id] = {
            id: patient.id,
            lastName: patient.lastName,
            firstName: patient.firstName,
            name: patient.lastName + ' ' + patient.firstName
        };
    } else {
        console.log('Patient non trouvé');
    }
}


module.exports = { addPatient, savePatient };
