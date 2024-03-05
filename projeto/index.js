let botoesJogador = document.querySelectorAll('#playerDiv button')

function escolhaComputador() {
    let lista_escolhas = ["Pedra", "Papel", "Tesoura"];
    let escolha = lista_escolhas[Math.floor(Math.random() * lista_escolhas.length)]
    return escolha
}

botoesJogador.forEach(function(botao) {
    botao.addEventListener('click', function() {
        let escolhaComputadorElemento = document.getElementById('computerChoice')
        escolhaComputadorElemento.textContent = escolhaComputador()
    })
})

tesoura.addEventListener("click", function() {
    alert("você clicou na tesoura!")
})
pedra.addEventListener("click", function() {
    alert("você clicou na pedra!")
})
papel.addEventListener("click", function() {
    alert("você clicou no papel!")
})

console.log(escolha)
console.log(escolhaComputadorElemento)
