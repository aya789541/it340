
const Event = require('./event');

let eventList = []; 

function addEvent(name, patientId, payload, creationDate) {
    // Créer le  nouvel événement et l'ajouter à eventList
    const newEvent = new Event(name, patientId, payload, creationDate);
    eventList.push(newEvent);
}


module.exports = {addEvent,eventList};
