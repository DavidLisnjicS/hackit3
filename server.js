const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Hier definierst DU das Passwort für Level A
const SECRET_PASSWORD = "x9@N7p!zQ3";

// Form-Daten lesen
app.use(express.urlencoded({ extended: true }));

// Static files ausliefern (Level A HTML / CSS)
app.use(express.static(path.join(__dirname, "public")));

// Passwortprüfung
app.post("/level-a/check", (req, res) => {
    const { password } = req.body;

    if (password === SECRET_PASSWORD) {
        return res.redirect("https://hackit-fpko.onrender.com/");
    }

    return res.send(`
        <h3 style="color:darkred;">Falsches Passwort!</h3>
        <p><a href="/">Zurück</a></p>
    `);
});


// Server starten
app.listen(PORT, () =>
    console.log("Server läuft auf Port", PORT)
);
