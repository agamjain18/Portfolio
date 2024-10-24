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

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("Submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("Name");
  var emailid = getElementVal("Email");
  var msgContent = getElementVal("City");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
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
