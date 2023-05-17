function insereNumeroNoVisor(botao,visor){
    if(botao.value === "+" || botao.value === "-" || botao.value==="*" || botao.value === "/"){

        if(visor.value[visor.value.length - 1] == "+" || visor.value[visor.value.length -1] == "-" || visor) 
            visor.value[0];

    }else{
        visor.value +=botao.value;
    }

//quando usamos dois sinais de iguais comparamos tipo e valor

}




const resultadoDasOperacoes = (visor) =>{
    visor.value = eval(visor.value);
};

//usa uma string como expressão matemática