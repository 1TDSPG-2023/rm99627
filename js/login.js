//Gerando um token com Math.
let tokenGerado = Math.random().toString(16).substring(2);
console.log(tokenGerado);

//Declarando objetos
const usuario1 = {
    nomeUsuario: "denden",
    senhaUsuario: "12345",
    gravaDados: true,
    token: tokenGerado
}
const usuario2 = {
    nomeUsuario: "gege",
    senhaUsuario: "12345",
    gravaDados: true,
    token: tokenGerado
}

let listaDeUsuarios = []
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);


addEventListener("click", (evt) => {
    if(evt.target.id == "btnSubmit") {
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");

        
        listaDeUsuarios.forEach((usuario) => {
            if (inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario) {
                console.log("VALIDADO");
            } else {
                console.log("NÃO VALIDADO");
            }
        });
    }
})