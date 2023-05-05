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






//ARRAYS E SEU M[ETODOS]
let frutas = ["banana","maçã","pêra","uva","melancia","ameixa","morango","goiaba"];
console.log(frutas);
console.log("FRUTA : " + frutas[4])
//Descobrindo o tamanho do array através da propriedade length
console.log(`Tamanho do Array : ${frutas.length}`);

//Adicionando um iten ao final do array com o método push(itenNome);
frutas.push("fruta-conde");
console.table(frutas);
//Adicionando um iten no inicio do array com o método unshift(itenNome);
frutas.unshift("jabuticaba");
console.log(frutas);

//Remover um iten do final do array com o método pop();
frutas.pop();
console.log(frutas);
//Remover um iten do inicio do array com o método shift();
frutas.shift();
console.log(frutas);

//Localizando um item com o método indexOf(itenNome);
//Obs: O indexOf(itenNome), vai retornar o indice onde se encontra o iten buscado.
// let indice = frutas.indexOf("morango");
// console.log(indice);
// console.log(frutas[indice]);

//Removendo um indice uma determinada quantidade de vezes utilizando o método splice.
// splice(indice do iten, quantidade de vezes a ser removido);
//Obs: Para obter o indice utilize o método indexOf(itenNome);
let indice = frutas.indexOf("ameixa");
console.log(indice);
console.log(`FRUTA QUE ESTAVA NO INDICE ANTES DA REMOÇÃO : ${frutas[indice]}`);
//Aplicando o splice e usando o indice obtido com indexOf.
frutas.splice(indice,1);
console.log(`FRUTA QUE FICOU NO INDICE DEPOIS DA REMOÇÃO : ${frutas[indice]}`);

//Percorrer o ARRAY utilizando o forEach
frutas.forEach( (fruta)=>{
    console.log(`Olha ele: ${fruta}`);
} );

