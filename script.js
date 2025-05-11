import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
    const rentButtons = document.querySelectorAll("button");
    rentButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for choosing Revon! Your motorbike booking has been confirmed.");
        });
    });
});

const firebaseConfig = {
    apiKey: "AIzaSyCCoJ7lkSPdih-F_hEwCNxHoeqfoyNIFL0",
    authDomain: "revonwebsite.firebaseapp.com",
    projectId: "revonwebsite",
    storageBucket: "revonwebsite.firebasestorage.app",
    messagingSenderId: "480120800495",
    appId: "1:480120800495:web:fdc56c86a98742c959c71a",
    measurementId: "G-04V159E8RK"
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
            if (bikes[key].available) {
                const bike = bikes[key];
                bikeList.innerHTML += `
                    <div>
                        <h3>${key}</h3>
                        <img src="${bike.imageUrl}" alt="${key}" width="200" height="150">
                        <p>Type: ${bike.type}</p>
                        <p>${bike.description}</p>
                    </div>
                `;
            }
        }
    });
}

displayBikes();

<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script>
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
</script>


// Import Swiper.js library
import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

// Initialize Swiper for the hero section
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

