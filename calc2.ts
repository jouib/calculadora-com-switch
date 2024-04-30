const teclado = require('prompt-sync')();
let numUm: number = 0;
let numDois: number = 0;
let resultado: number = 0;

function menu():void{
    console.log(`---------------Calculadora + Switch-case ------------------`);
    console.log(`Digite a opção desejada`);
    console.log(`0 - Sair `);
    console.log(`1 - Calculadora `);
    let opcao: number = parseInt(teclado(`Digite a opção ---------> `));

    switch (opcao){
        case 0: sair(); break;
        case 1: resolucao(); break;
        default:break;
    }
}

function Adicao ():void{
    numUm = parseInt(teclado(`Digite o 1º número: `));
    numDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numUm + numDois;
    console.log(`O valor da soma de ${numUm} com ${numDois} `);
    console.log(`é ${resultado}`);
}

function Subtracao ():void{
    numUm = parseInt(teclado(`Digite o 1º número: `));
    numDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numUm - numDois;
    console.log(`O valor da subtração de ${numUm} com ${numDois} `);
    console.log(`é ${resultado}`);
}
function Multiplicacao ():void{
    numUm = parseInt(teclado(`Digite o 1º número: `));
    numDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numUm * numDois;
    console.log(`O valor da multiplicação de ${numUm} com ${numDois} `);
    console.log(`é ${resultado}`);
}
function Divisao ():void{
    numUm = parseInt(teclado(`Digite o 1º número: `));
    numDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numUm / numDois;
    console.log(`O valor da multiplicação de ${numUm} com ${numDois} `);
    console.log(`é ${resultado}`);
}

function resolucao(): void{
    console.log(`Qual operação deseja? Digite: `);
    console.log(`+ --> Adição`)
    console.log(`- --> Subtração`);
    console.log(`* --> Multiplicação`);
    console.log(`/ --> Divisão`);
}
let escolha = teclado (`Digite a operação desejada: `);

switch (escolha){
    case `+` : Adicao(); break;
    case `-` : Subtracao(); break;
    case `*` : Multiplicacao(); break;
    case `/` : Divisao(); break;
}

function sair():void{
    console.clear();
    console.log(`Fim de Programa...`);
    process.exit(0);
}
menu();
