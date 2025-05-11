// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRS6L1r37hS5kmaWI2vHX2qMUUMc_f5gs",
  authDomain: "ownapplication-7a0ec.firebaseapp.com",
  databaseURL: "https://ownapplication-7a0ec-default-rtdb.firebaseio.com",
  projectId: "ownapplication-7a0ec",
  storageBucket: "ownapplication-7a0ec.firebasestorage.app",
  messagingSenderId: "161786089023",
  appId: "1:161786089023:web:b91da72a8cdf4e2449328a",
  measurementId: "G-CXWKHRJJMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to save data
window.saveData = function() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  if (name && age) {
    // Push data to Firebase Realtime Database
    const userRef = ref(database, 'users/' + Date.now()); // Use Date.now() for unique ID
    set(userRef, {
      name: name,
      age: age
    })
    .then(() => {
      alert("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error writing to database:", error);
    });
  } else {
    alert("Please enter both name and age.");
  }
};
