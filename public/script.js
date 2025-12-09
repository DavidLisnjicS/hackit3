
let isUnlocked = false;

const form = document.getElementById("password-form");
const input = document.getElementById("password-input");
const message = document.getElementById("message");

function checkAccess() {

    return isUnlocked;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (checkAccess()) {
        message.textContent = "Korrekt! Du hast dieses Level geschafft. Weiterleitung in 2 Sekunden…";
        message.className = "success";

        setTimeout(() => {
            // Ziel ist eine Backend-Route, NICHT die echte URL
            window.location.href = "/go";
        }, 2000);
    } else {
        message.textContent = "Falsches Passwort ❌ Tipp: Schau dir die Entwicklertools genauer an.";
        message.className = "error";
    }

    input.value = "";
});

