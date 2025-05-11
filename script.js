import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const bikeList = document.getElementById("bikeList");

function displayBikes() {
    const bikesRef = ref(db, 'bikes/');
    onValue(bikesRef, (snapshot) => {
        bikeList.innerHTML = "";
        const bikes = snapshot.val();
        for (const key in bikes) {
            const bike = bikes[key];
            bikeList.innerHTML += `
                <div class="bike-card">
                    <h3>${bike.name}</h3>
                    <p>Type: ${bike.type}</p>
                    <p>${bike.description}</p>
                </div>
            `;
        }
    });
}

displayBikes();
