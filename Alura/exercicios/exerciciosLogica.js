function ola(){
    console.log('Olá, mundo!');
}

function ola(nome){
    console.log(`Olá, ${nome}!`);
}

function dobro(numero){
    return numero*2;
}

function media3numeros(n1, n2, n3){
    return (n1+n2+n3)/3;
}

function maior(n1, n2){
    if(n1 > n2){
        return n1;
    }

    return n2;
}

function nAoQuadrado(numero){
    return numero*numero;
}

function calculaIMC(altura, peso){
    return peso/nAoQuadrado(altura);
}

function fatorial(numero){
    if(numero <= 1){
        return 1;
    }
    return numero*fatorial(numero-1);
}

function converterDolarParaReal(valor){
    return valor*4.80;
}

function areaMaisPertimetroRetangulo(altura, largura) {
    let perimetro = dobro(altura+largura);
    let area = altura*largura;

    console.log(`Retângulo com perímetro: ${perimetro} e área: ${area}.`);
}

function areaMaisPertimetroCirculo(raio) {
    let pi = 3.14;
    let perimetro = dobro(pi*raio);
    let area = pi*nAoQuadrado(raio);

    console.log(`Circulo com perímetro: ${perimetro} e área: ${area}.`);
}

function tabuada(numero) {
    for (let index = 1; index <= 10; index++) {
        let resultado = numero * index;
        console.log(`${numero} x ${index} = ${resultado}`);
    }
}