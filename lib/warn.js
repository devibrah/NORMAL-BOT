const fs = require('fs');
const path = require('path');

// Path to the JSON file storing warning user data
const filePath = path.join(__dirname, '../xmd/warn_users.json');

// Load data from the JSON file
function loadWarnData() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return {}; // Return an empty object if the file doesn't exist or there's an error
  }
}

// Save data to the JSON file
function saveWarnData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Create the default file if it doesn't exist
if (!fs.existsSync(filePath)) {
  saveWarnData({});
}

// Function to add or update the warning count for a user (jid)
async function ajouterUtilisateurAvecWarnCount(jid) {
  try {
    const data = loadWarnData();

    // If the jid is already in the data, increment the warn count
    if (data[jid]) {
      data[jid].warn_count += 1;
    } else {
      // Otherwise, create a new entry with a warn_count of 1
      data[jid] = { warn_count: 1 };
    }

    saveWarnData(data);
    console.log(`Utilisateur ${jid} ajouté ou mis à jour avec un warn_count de ${data[jid].warn_count}.`);
  } catch (error) {
    console.error("Erreur lors de l'ajout ou de la mise à jour de l'utilisateur :", error);
  }
}

// Function to get the warning count for a user (jid)
async function getWarnCountByJID(jid) {
  try {
    const data = loadWarnData();

    // Return the warn_count of the user or 0 if the user doesn't exist
    return data[jid] ? data[jid].warn_count : 0;
  } catch (error) {
    console.error("Erreur lors de la récupération du warn_count :", error);
    return -1; // Return a default error value
  }
}

// Function to reset the warning count for a user (jid)
async function resetWarnCountByJID(jid) {
  try {
    const data = loadWarnData();

    // Reset the warn_count to 0 for the specified jid
    if (data[jid]) {
      data[jid].warn_count = 0;
      saveWarnData(data);
      console.log(`Le warn_count de l'utilisateur ${jid} a été réinitialisé à 0.`);
    } else {
      console.log(`Utilisateur ${jid} non trouvé.`);
    }
  } catch (error) {
    console.error("Erreur lors de la réinitialisation du warn_count :", error);
  }
}

module.exports = {
  ajouterUtilisateurAvecWarnCount,
  getWarnCountByJID,
  resetWarnCountByJID,
};