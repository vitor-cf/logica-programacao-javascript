function aperte() {
    let n1 = window.prompt("Digite um numero") 
    let resultado = window.document.getElementById("calculando") 

    resultado.innerHTML = `O dobro de ${n1} é ${2*n1} e a metade é ${n1/2}`
}