function clicou() {
    let n1 = Number(window.prompt("Digite um numero")); 

    let resultado = window.document.getElementById("resultado");

    resultado.innerHTML = `<p>O número a ser analisado aqui será o ${n1}</p>` 
    resultado.innerHTML += `<p>O seu valor absoluto é ${Math.abs(n1)}</p>`
    resultado.innerHTML += `<p>a sua parte inteira é ${Math.trunc(n1)}</p>` 
    resultado.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(n1)}</p>` 
    resultado.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(n1)}</p>`
    resultado.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(n1)}</p>`
    resultado.innerHTML += `<p>O valor de ${n1}<sup>2</sup> é ${Math.pow(n1,2)}</p>` 
    resultado.innerHTML += `<p>O valor de ${n1}<sup>3</sup> é ${Math.pow(n1,3)}</p>`

}