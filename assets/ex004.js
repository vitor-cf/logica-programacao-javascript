function apertei() {
    let nome = window.prompt("Qual seu nome?") 
    let resultado = window.document.getElementById("resultado") 
    // Poderia usar o id na section 
    // Usando em uma section ficararia section#id ou #id 
    // A diferença que teriamos que repetir a tag <p> no innerHTML.
    resultado.innerHTML = `Olá, <strong>${nome}</strong>! é um grande prazer te conhecer! &#x1F596;`
}