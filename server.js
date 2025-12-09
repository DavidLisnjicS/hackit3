const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Body-Parser für JSON
app.use(express.json());

// Static-Files aus /public ausliefern
app.use(express.static(path.join(__dirname, "public")));

// Beispiel: Passwortcheck (falls du sowas drin hast)
const SECRET_PASSWORD = "x9@N7p!zQ3";

app.post("/check-password", (req, res) => {
    const { password } = req.body;

    if (password === SECRET_PASSWORD) {
        return res.json({ ok: true });
    }
    return res.json({ ok: false });
});

// Fallback: jede unbekannte GET-Route -> index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log("Server läuft auf Port", PORT);
});
