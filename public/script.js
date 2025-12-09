// Anfangs ist Level gesperrt
let isUnlocked = false;

// DOM-Elemente holen
const form = document.getElementById("password-form");
const input = document.getElementById("password-input");
const message = document.getElementById("message");

// Passwortprüfung ist absichtlich unsicher
function checkAccess() {
    return isUnlocked;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (checkAccess()) {
        message.textContent = "Korrekt! Du hast Level A geschafft. Weiterleitung in 2 Sekunden…";
        message.className = "success";

        setTimeout(() => {
            window.location.href = "level-b.html";
        }, 2000);
    } else {
        message.textContent = "Falsches Passwort ❌";
        message.className = "error";
    }

    input.value = "";
});

// Hinweise in der Konsole
console.log("%c🕵️ Entwickler-Hinweis:", "color:orange;font-size:16px;");
console.log("Versuche mal die Variable 'isUnlocked' zu beeinflussen …");
console.log("Tipp: In der Konsole: isUnlocked = true");
console.log("Dann erneut auf 'Bestätigen' klicken 😉");
