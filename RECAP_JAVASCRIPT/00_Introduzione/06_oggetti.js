let persona = {
    nome: "Giovanni",
    cognome: "Pace",
    eta: 38,
    hobbies: ["Musica", "Astronomia", "Droni"],
    documento: {
        numero: 1234,
        scadenza: "2025-01-01"
    },
    mezzi: [
        {
            tipo: "auto",
            marca: "Peugeot"
        },
        {
            tipo: "moto",
            marca: "honda",
            modello: "xadv"
        }
    ]
}

console.log(persona.documento.numero)