//Usei funções aninhadas para fazer esse desafio

function calculaSaldo() {

let vitorias = 100;
let derrotas = 30;
let saldo = vitorias - derrotas;
let nivel = "";
   
function calculaNivel() {
    if (saldo < 10) {
        nivel = "Ferro";
    }else if (saldo >= 11 && saldo < 20 ) {
        nivel = "Bronze";
    }else if (saldo >= 21 && saldo < 50) {
        nivel = "Prata";
    }else if (saldo >= 51 && saldo < 80) {
        nivel = "Ouro";
    }else if (saldo >= 81 && saldo < 90) {
        nivel = "Diamante";
    }else if (saldo >= 91 && saldo < 100) {
        nivel = "Lendário";
    }else {
        nivel = "Imortal";
    }

function informar() {
    console.log("O Herói tem de saldo de: " + `${saldo}` + " está no nível de: " + `${nivel}`);
}
return informar();
}
return calculaNivel();
}

calculaSaldo();