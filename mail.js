 const firebaseConfig = {
    apiKey: "AIzaSyD5m5E8_GNZ_td2inWlaFh3mdkNkN5fzHw",
    authDomain: "agnoz-1aa0a.firebaseapp.com",
    databaseURL: "https://agnoz-1aa0a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agnoz-1aa0a",
    storageBucket: "agnoz-1aa0a.appspot.com",
    messagingSenderId: "567836298924",
    appId: "1:567836298924:web:2f324a60e28b9c8da7d909",
    measurementId: "G-NTEXZ70KC9"
  };

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("Name");
  var emailid = getElementVal("Email");
  var msgContent = getElementVal("City");

  // Validate form inputs
  if (!validateInputs(name, emailid, msgContent)) {
    displayError("Please fill out all fields correctly.");
    return;
  }

  saveMessages(name, emailid, msgContent);

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// Function to validate inputs
const validateInputs = (name, emailid, msgContent) => {
  return name.trim() !== "" && emailid.trim() !== "" && msgContent.trim() !== "";
};

// Function to display error message
const displayError = (message) => {
  const errorAlert = document.querySelector(".error-alert");
  errorAlert.innerText = message;
  errorAlert.style.display = "block";

  // Remove the error alert after a few seconds
  setTimeout(() => {
    errorAlert.style.display = "none";
  }, 3000);
};

