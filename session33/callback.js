// function greet(name,callback){
//     console.log("Hello"+name);
//     callback();
// }


// function sayGooodBye(){
//     console.log("Goodbye");
    
// }


// greet("Alice",sayGooodBye);

// // promise 
// // pending 
// // fullfilled
// // rejected

// Replace this with your deployed Google Apps Script Web App URL
const SHEET_WEBHOOK_URL ="https://script.google.com/macros/s/AKfycbyM7CC0jpYRlQWnO0P4_wRFjg_QQTNEsR22ezM3PzRvuodufUT-Enkcv66brpPB6xN3Wg/exec";

/**
 * Send collected chatbot data to Google Sheets
 * @param {object} data - The collectedData object from your chatbot
 */
async function sendToGoogleSheets(data) {
  try {
    console.log("Submitting data to Google Sheets:", data);

    const response = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.success) {
      console.log("✅ Data successfully added to Google Sheets:", result);
    } else {
      console.error("❌ Failed to add data:", result.error);
    }
  } catch (error) {
    console.error("❌ Error sending data to Google Sheets:", error);
  }
}

// Example usage:
const exampleData = {
  name: "Aju",
  email: "aju@example.com",
  phone: "+91 99999 88888",
  companyName: "Codecrafters",
  projectType: "Web & App Development",
  budget: "₹25000",
  timeline: "2 months",
  description: "Build a community app",
  additionalInfo: "No rush"
};

// Trigger function
sendToGoogleSheets(exampleData);
