if(localStorage.getItem("user-token")){
const elementoDeBoasVindas = document.querySelector("#welcome");

//RECUPERAR O OBEJETO USUARIO-VALIDADO DO LOCALSTORAGE
const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

elementoDeBoasVindas.innerHTML = `<span><strong>Bem vindo: ${usuarioValidado.
    nomeCompleto}</strong></span>`;

const botaoSair = document.querySelector("#btnSair");
botaoSair.addEventListener("click",()=>{
    localStorage.removeItem("user-token");
    localStorage.removeItem("user-validado");
    window.location.href = "../pages/login.html";
});

}else{
    alert("Você precisa estar logado para acessar este conteúdo!")
    window.location.href = "../pages/login.html";
}