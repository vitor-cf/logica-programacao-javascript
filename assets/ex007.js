function clicou() {
    let nome = window.prompt('Digite o nome do aluno')
    let n1 = Number(window.prompt('Digite a primeira nota'));
    let n2 = Number(window.prompt('Digite a segunda nota')); 

    let escreva = window.document.getElementById("escreva");

    media = (n1 + n2) / 2 ; 

    
    escreva.innerHTML = `Calculando a média final de ${nome}`;
    escreva.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>` ;
    escreva.innerHTML += `<p>A média final será ${media}</p>`;
} 