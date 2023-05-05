// /* <button id="meu-btn">CLICK</button> */

// const btn = document.getElementById("meu-btn");

// // console.log(btn.textContent);
// //Atrelando um evento ao elemento
// btn.addEventListener("click",function(){

//     //Função matemática Math
//     //Math.random = retorna numeros aleatorios entre 0 e 1. Exemplo: 0,12182
//     //Math.floor = Função de arrendodamento para baixo 
//     //Math.ceil = Função de arrendodamento para cima 
//     //Math.round = Função de arrendodamento aleatorio
    
//     let r = 0;
//     let g = 0;
//     let b = 0;

//     //numeros aleatorios gerados...
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);

//     // this.setAttribute("style","background-color:rgb("+r+","+g+","+b+");")
//     this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

//     console.log(this.textContent);
// });


// const tit_sec = document.getElementById("tit-sec");

// tit_sec.addEventListener("click", function(){
//     let num = 0;
//     num = Math.round(Math.random()*10);

//     this.setAttribute("style", `font-size: ${num}px;`);
// })

// /*NÃO DEU CERTO !*/
// // cor = document.querySelector(".h2-rodape");
// // cor.addEventListener("click", function(){
// //     this.addEventListener("style", "background-color:red");
// // })