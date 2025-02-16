const fs = require('fs');
const path = require('path');

// Path to the JSON file storing event data
const filePath = path.join(__dirname, '../xmd/events.json');

// Load data from the JSON file
function loadEventData() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return {}; // Return an empty object if the file doesn't exist or there's an error
  }
}

// Save data to the JSON file
function saveEventData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Create the default file if it doesn't exist
if (!fs.existsSync(filePath)) {
  saveEventData({});
}

// Function to add or update event values for a user (jid)
async function attribuerUnevaleur(jid, row, valeur) {
  try {
    const data = loadEventData();

    // If the jid exists, update the value of the specified row
    if (data[jid]) {
      data[jid][row] = valeur;
      console.log(`La colonne ${row} a été actualisée sur ${valeur} pour le jid ${jid}`);
    } else {
      // If the jid doesn't exist, add a new entry with the specified row and value
      data[jid] = { [row]: valeur };
      console.log(`Nouveau jid ${jid} ajouté avec la colonne ${row} ayant la valeur ${valeur}`);
    }

    saveEventData(data);
  } catch (error) {
    console.error("Erreur lors de l'actualisation des événements :", error);
  }
}

// Function to retrieve event data for a user (jid) and specified row
async function recupevents(jid, row) {
  try {
    const data = loadEventData();

    // Return the value of the specified row for the given jid, or 'non' if not found
    if (data[jid] && data[jid][row] !== undefined) {
      return data[jid][row];
    } else {
      return 'non';
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
  }
}

module.exports = {
  attribuerUnevaleur,
  recupevents,
};