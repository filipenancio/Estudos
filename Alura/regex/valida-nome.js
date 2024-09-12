function ehUmNome(str) {
    const nome = str;
    const ehNome = /^[A-Za-z-À-ÿ -]{3,30}$/.test(nome);

    console.log(ehNome);

    if (!ehNome) {
        console.log('Nome informado é inválido!');
    }

}

ehUmNome('a');
ehUmNome('Ana');
ehUmNome('Ann4');