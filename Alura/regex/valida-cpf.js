
function removePontuacao(str) {
    return str.replace(/\.|-/g, "");
}

function todosDigitosIguais(str) {
    return /^(\d)\1{10}/.test(str);
}

function calculaDigitoVerificador(str, mult) {
    let soma = 0;

    for (let i = 0; i < 9 + mult; i++) {
        soma += str[i] * mult;
        mult--;
    }

    let resto = soma % 11;
    if (resto < 2) {
        return str[9 + mult] === 0;
    }

    return str[9 + mult] === 11 - resto;
}

function ehUmCPF(str) {
    const cpf = removePontuacao(str);

    if (todosDigitosIguais(cpf) || calculaDigitoVerificador(cpf, 10) || calculaDigitoVerificador(cpf, 11)) { 
        console.log("Dígitos iguais:",todosDigitosIguais(cpfSemPontuacao));
        console.log("CPF sem pontuação:", cpfSemPontuacao);
        console.log('Esse CPF não é válido');
    }
}

ehUmCPF('a');
ehUmCPF('111444777.35');
ehUmCPF('145623568-96');