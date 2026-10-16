/* =====================================
   SIST CONNECT - JAVASCRIPT
===================================== */


/* =====================================
   1. EVENTS ARRAY
===================================== */

let events = [
    {
        name: "Web Development Workshop",
        date: "15 October 2026",
        type: "Workshop",
        description:
            "A practical session introducing students to HTML, CSS and JavaScript."
    },

    {
        name: "Coding Challenge",
        date: "22 October 2026",
        type: "Competition",
        description:
            "A programming challenge designed to develop logical thinking and problem-solving skills."
    },

    {
        name: "Technology Seminar",
        date: "29 October 2026",
        type: "Seminar",
        description:
            "A discussion covering emerging technologies, careers and developments in computing."
    },

    {
        name: "Innovation Challenge",
        date: "5 November 2026",
        type: "Innovation",
        description:
            "Students work in teams to develop creative solutions to a selected problem."
    }
];


/* =====================================
   2. DISPLAY EVENTS
===================================== */

let eventsContainer = document.getElementById("events-container");

if (eventsContainer) {

    for (let i = 0; i < events.length; i++) {

        let eventCard = document.createElement("div");

        eventCard.className = "card";

        eventCard.innerHTML = `
            <div class="card-icon">📅</div>

            <h3>${events[i].name}</h3>

            <p>
                <strong>Type:</strong>
                ${events[i].type}
            </p>

            <p>
                <strong>Date:</strong>
                ${events[i].date}
            </p>

            <p>
                ${events[i].description}
            </p>

            <a href="contact.html">
                Register / Get Involved
            </a>
        `;

        eventsContainer.appendChild(eventCard);
    }
}


/* =====================================
   3. SEARCH BUTTON
===================================== */

function showSearch() {

    alert(
        "SIST Connect search feature will be available soon."
    );

}


/* =====================================
   4. JOIN FORM VALIDATION
===================================== */

function validateForm() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let programme =
        document.getElementById("programme").value.trim();

    let year =
        document.getElementById("year").value;

    let interest =
        document.getElementById("interest").value;

    let message =
        document.getElementById("message").value.trim();


    if (name === "") {

        alert("Please enter your full name.");

        return false;
    }


    if (email === "") {

        alert("Please enter your email address.");

        return false;
    }


    if (programme === "") {

        alert("Please enter your programme.");

        return false;
    }


    if (year === "") {

        alert("Please select your year of study.");

        return false;
    }


    if (interest === "") {

        alert("Please select your area of interest.");

        return false;
    }


    if (message === "") {

        alert("Please enter a message.");

        return false;
    }


    alert(
        "Your application is ready to be submitted."
    );

    return true;
}


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });
});
