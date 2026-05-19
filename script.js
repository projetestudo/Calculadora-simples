let expressao = "";

const expr = document.getElementById("expr");
const result = document.getElementById("result");

function atualizar(){
  expr.innerText = expressao || "0";
  preview();
}

/* resultado em tempo real */
function preview(){
  try{
    if(expressao.trim() === ""){
      result.innerText = "= 0";
      return;
    }
    result.innerText = "= " + eval(expressao);
  }catch{
    result.innerText = "= ...";
  }
}

function adicionar(v){
  expressao += v;
  atualizar();
}

function limpar(){
  expressao = "";
  atualizar();
}

function ce(){
  expressao = expressao.slice(0, -1);
  atualizar();
}

function calcular(){
  try{
    expressao = eval(expressao).toString();
    atualizar();
  }catch{
    result.innerText = "Erro";
    expressao = "";
    atualizar();
  }
}

/* teclado */
document.addEventListener("keydown",(e)=>{

  if(!isNaN(e.key) || ["+","-","*","/","."].includes(e.key)){
    adicionar(e.key);
  }

  if(e.key === "Enter") calcular();
  if(e.key === "Backspace") ce();
});

atualizar();
