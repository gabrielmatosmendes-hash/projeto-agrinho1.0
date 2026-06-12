// Aguarda o site carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona os elementos do HTML
    const botao = document.getElementById("btn-interagir");
    const mensagem = document.getElementById("mensagem-agradecimento");

    // Adiciona a ação de clique ao botão
    botao.addEventListener("click", function() {
        // Mostra a mensagem de agradecimento removendo a classe 'hidden'
        mensagem.classList.remove("hidden");
        
        // Desativa o botão para a pessoa clicar apenas uma vez
        botao.disabled = true;
        botao.innerText = "Apoiado! ✔️";
        botao.style.backgroundColor = "#9e9e9e";
    });
});
