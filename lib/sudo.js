const fs = require('fs');
const path = require('path');

// Path to the JSON file storing sudo data
const filePath = path.join(__dirname, '../xmd/sudo.json');

// Load data from the JSON file
function loadSudoData() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return {}; // Return an empty object if the file doesn't exist or there's an error
  }
}

// Save data to the JSON file
function saveSudoData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Create the default file if it doesn't exist
if (!fs.existsSync(filePath)) {
  saveSudoData({});
}

// Function to check if a group is sudo (authorized)
async function issudo(jid) {
  try {
    const data = loadSudoData();

    // Check if the jid exists in the sudo data
    return data[jid] ? true : false;
  } catch (error) {
    console.error("Error checking if the group is sudo:", error);
    return false;
  }
}

// Function to add a sudo number (jid) to the list
async function addSudoNumber(jid) {
  try {
    const data = loadSudoData();

    // Check if the jid is already in the sudo list
    if (!data[jid]) {
      data[jid] = true; // Mark the jid as sudo
      saveSudoData(data);
      console.log(`Phone number ${jid} added to the authorized list.`);
    } else {
      console.log(`Phone number ${jid} is already in the authorized list.`);
    }
  } catch (error) {
    console.error("Error adding the phone number to the authorized list:", error);
  }
}

// Function to remove a sudo number (jid) from the list
async function removeSudoNumber(jid) {
  try {
    const data = loadSudoData();

    // Check if the jid exists in the sudo list
    if (data[jid]) {
      delete data[jid]; // Remove the jid
      saveSudoData(data);
      console.log(`Phone number ${jid} removed from the authorized list.`);
    } else {
      console.log(`Phone number ${jid} is not in the authorized list.`);
    }
  } catch (error) {
    console.error("Error removing the phone number from the authorized list:", error);
  }
}

// Function to get all sudo numbers (jids)
async function getAllSudoNumbers() {
  try {
    const data = loadSudoData();

    // Return an array of all the jids in the sudo list
    return Object.keys(data);
  } catch (error) {
    console.error("Error retrieving the authorized phone numbers:", error);
    return [];
  }
}

// Function to check if the sudo table is not empty
async function isSudoTableNotEmpty() {
  try {
    const data = loadSudoData();
    // Check if the sudo data contains any entries
    return Object.keys(data).length > 0;
  } catch (error) {
    console.error("Error checking if the sudo table is empty:", error);
    return false;
  }
}

module.exports = {
  issudo,
  addSudoNumber,
  removeSudoNumber,
  getAllSudoNumbers,
  isSudoTableNotEmpty,
};