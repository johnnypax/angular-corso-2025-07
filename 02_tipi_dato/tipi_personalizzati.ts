// type Persona = {
//     nominativo: string,
//     eta: number
// }

// function getPersona() : Persona {
//     return {nominativo: "Giovanni", eta: 38}
// }

// console.log(getPersona());

// -----------------------------------------------

interface Persona{
    nominativo: string,
    eta: number
}

function getPersona() : Persona {
    return {nominativo: "Giovanni", eta: 38}
}

console.log(getPersona());