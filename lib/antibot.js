const fs = require('fs');
const path = require('path');

// Define the path for the JSON file to store data
const dataFilePath = path.join(__dirname, './xmd/antibot.json');

// Function to read data from JSON file
function readDataFromFile() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or there's a read error, return an empty object
    console.error('Error reading data from file:', error);
    return {};
  }
}

// Function to write data to JSON file
function writeDataToFile(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing data to file:', error);
  }
}

// Function to create initial structure if file does not exist
function initializeDataFile() {
  if (!fs.existsSync(dataFilePath)) {
    writeDataToFile({});
  }
}

// Initialize data file if not present
initializeDataFile();

// Function to add or update a JID with a given state
function addOrUpdateJidState(jid, etat) {
  const data = readDataFromFile();
  
  // Add or update the JID entry
  data[jid] = data[jid] || {};
  data[jid].etat = etat;
  data[jid].action = data[jid].action || 'supp'; // Default action is 'supp' if not present

  // Write updated data back to file
  writeDataToFile(data);

  console.log(`JID ${jid} successfully added or updated.`);
}

// Function to update the action for a given JID
function updateJidAction(jid, action) {
  const data = readDataFromFile();
  
  // Add or update the JID's action
  data[jid] = data[jid] || {};
  data[jid].etat = data[jid].etat || 'non'; // Default state is 'non' if not present
  data[jid].action = action;

  // Write updated data back to file
  writeDataToFile(data);

  console.log(`Action successfully updated for JID ${jid}.`);
}

// Function to verify the state of a JID
function checkJidState(jid) {
  const data = readDataFromFile();
  return data[jid]?.etat === 'oui'; // Return true if 'etat' is 'oui', false otherwise
}

// Function to retrieve the action of a JID
function getJidAction(jid) {
  const data = readDataFromFile();
  return data[jid]?.action || 'supp'; // Default action is 'supp' if not present
}

// Export the functions for external use
module.exports = {
  updateJidAction,
  addOrUpdateJidState,
  checkJidState,
  getJidAction,
};