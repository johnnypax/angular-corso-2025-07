const express = require("express")
const app = express();

app.listen(4000, "127.0.0.1", () => {
    console.log("Sono in ascolto")
})

app.get("/", (req, res) => {
    res.json({nome: "Valeria", cognome: "Verdi"})
})