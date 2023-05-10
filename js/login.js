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

        try{

            listaDeUsuarios.forEach((usuario) => {

            if (inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario) {
                throw "VALIDADO";
            }
        });

        throw "NÃO VALIDADO";

        } catch (msg){
            const msgError = document.querySelector("#msgError");

            if(msg == "VALIDADO"){ 
                console.log("VALIDADO");
                msgError.setAttribute("style","color:#00ff00;");
                msgError.innerHTML = "<span><strong>Login efetuado com sucesso!</strong></span>";
            }else{
                console.log("NÃO VALIDADO");
                msgError.setAttribute("style","color:#ff0000;");
                msgError.innerHTML = "<span><strong>Usuário ou senha inválido!</strong></span>";
            }
        }
        
    }
})