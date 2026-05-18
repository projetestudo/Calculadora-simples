const display = document.getElementById("display");

let expressao = "";

function atualizarTela(){
  display.innerText = expressao || "0";
}

function adicionar(valor){
  expressao += valor;
  atualizarTela();
}

function limpar(){
  expressao = "";
  atualizarTela();
}

function apagar(){
  expressao = expressao.slice(0, -1);
  atualizarTela();
}

function calcular(){
  try{
    expressao = eval(expressao).toString();
    atualizarTela();
  }catch{
    display.innerText = "Erro";
    expressao = "";
  }
}

// TECLADO
document.addEventListener("keydown", (event)=>{

  const tecla = event.key;

  if(
    !isNaN(tecla) ||
    ["+", "-", "*", "/", "."].includes(tecla)
  ){
    adicionar(tecla);
  }

  if(tecla === "Enter"){
    calcular();
  }

  if(tecla === "Backspace"){
    apagar();
  }

});
