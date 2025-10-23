// Espera todo o HTML carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

    // 1. "Selecionar" os elementos do HTML que vamos usar
    const btnBuscar = document.getElementById("btn-buscar-dados");
    const nomeProjetoEl = document.getElementById("nome-projeto");
    const statusProjetoEl = document.getElementById("status-projeto");
    const tecnologiaProjetoEl = document.getElementById("tecnologia-projeto");

    // 2. "Ouvir" o clique no botão
    btnBuscar.addEventListener("click", function() {
        
        // 3. A "Mágica": Chamar sua API Flask (Onde ela está rodando?)
        // IMPORTANTE: Seu backend Flask precisa estar rodando!
        const apiUrl = "http://127.0.0.1:5000/api/meuprojeto";

        // 4. O "fetch" (buscar)
        fetch(apiUrl)
            .then(response => {
                // Converte a resposta do servidor em JSON
                return response.json();
            })
            .then(data => {
                // 5. Temos os dados! Agora vamos colocar no HTML.
                console.log("Dados recebidos:", data); // Ótimo para debugar!

                nomeProjetoEl.textContent = data.nomeDoProjeto;
                statusProjetoEl.textContent = data.status;
                tecnologiaProjetoEl.textContent = data.tecnologia;
            })
            .catch(error => {
                // 6. Se algo der errado (ex: backend desligado)
                console.error("Erro ao buscar dados:", error);
                alert("Não foi possível conectar ao backend. Verifique se ele está rodando!");
            });
    });
});