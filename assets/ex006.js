function clicou() {
    let n1 = Number(window.prompt('Digite um numero'));
    let n2 = Number(window.prompt('Digite outro numero')) ;
    // poderia por o soma = n1 + n2 e substituir...

    let res = window.document.getElementById("res") ;

    res.innerHTML = `A soma entre ${n1} e ${n2} é ${n1 + n2}`;
}