//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 20;

if (idade > 18){
    console.log('É maior de 18.');
}  else {
    console.log('Não é maior de 18');
}


//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true


//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let aniversarioJaneiro = 01;
let aniversarioDezembro = 12;
let aniversario = 02;

if (aniversario == aniversarioJaneiro){
    console.log('O aniversário é em Janeiro.');
} else
if(aniversario == aniversarioDezembro){
    console.log('O aniversario é em Dezembro.');
} else{
    console.log('O aniversario não é nem em Janeiro nem em Dezembro');
}   

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R


let nome = "Guilherme";
let primeiraLetra = nome.charAt(0);

if (primeiraLetra === "R" || primeiraLetra === "r"){
    console.log("O nome começa com a letra R");
}else{
    console.log("O nome não começa com a letra R, começa com a letra",  primeiraLetra);
}


//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = "Soares";
let quantidadeLetras = sobrenome.length;
let primeiraSobrenome = sobrenome.charAt(0);

if( sobrenome.length > 6 || (primeiraSobrenome === "E" || primeiraSobrenome === "e")){
    console.log("O sobrenome tem mais de 6 letras ou começa com E");
}else{
    console.log("O sobrenome não tem mais de 6 letras ou não começa com E");
}