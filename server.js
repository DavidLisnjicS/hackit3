import express from "express";
const app = express();

const SECRET_PASSWORD = "superGeheimesPasswort";

app.use(express.json());
app.use(express.static("public"));

app.post("/check-password", (req, res) => {
    const { password } = req.body;
    if (password === SECRET_PASSWORD) {
        return res.json({ ok: true });
    }
    return res.json({ ok: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server läuft auf Port", PORT));
