const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien aus /public ausliefern
app.use(express.static(path.join(__dirname, "public")));

// Diese Route wird vom Frontend bei Erfolg aufgerufen
app.get("/go", (req, res) => {
    // Ziel-URL NUR hier im Backend
    res.redirect("https://hackit4.onrender.com");
});

// Fallback: alle anderen GET-Requests bekommen index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log("Server läuft auf Port", PORT);
});
