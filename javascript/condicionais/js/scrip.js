//Condicionais
//if se a condição for verdadeira
const numerico=10;

if(numerico>8){
    console.log("O número informado é maior que 8")
}
const nomealuno="Juliano";

if(nomealuno==="Juliano"){
console.log("Olá, Julino");
}

if(nomealuno==="Maria"){
    console.log("Olá, Maria");
    }
    
//else(consição false)
const logado=false;

if(logado){
    console.log("Está logado");
}else{console.log("Não esta logado")};


const altura=1.65;
if(altura > 1.70){
    console.log(
    "Essa pessoa tem mais de 1,70 metros de altura");
}else{
console.log(
"Essa pessoa não tem menos de 1,70 metros de altura");
}
   
//else if(serve para verificar  várias condições)

if(1>2){
    console.log("Teste 1 é verdadeiro");
}else if(2>4){
    console.log("Teste 2 é verdadeiro");
}
else if(4<7){
    console.log("Teste 3 é verdadeiro");
}else {
    console.log("Não termos condição verdadeira");
}

//switch (const determina e não pode ser alterado  e o o let aceita a troca

let idade=18
switch(idade){
    case 18:
        console.log("O usuário é maior de idade");break;
        case 17:
        console.log("O usuário é menor de idade");break;
        default:
            console.log("Idade inválida");

}
