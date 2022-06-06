let contador = 0; 
let res = document.querySelector("section#result"); 

function contar() {
    contador = contador + 1; // igual a contador++ 
    
    res.innerHTML = `<p>O contador está com ${contador} cliques</p>`
}

function zerar() {
    
    res.innerHTML = `<p>O contador está com ${contador = 0} cliques</p>` 
    // contador = 0, pois se ele não zerar ao clicar pra contar os cliques
    // continua do ultimo clique.
}
    
    


