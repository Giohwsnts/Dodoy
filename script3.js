// Função para salvar a lista no localStorage
function salvarLista() {
    const listaMedicamentos = document.getElementById("lista-medicamentos");
    const medicamentos = [];
    
    // Iterar sobre todos os itens na lista e armazená-los
    for (let i = 0; i < listaMedicamentos.children.length; i++) {
        const item = listaMedicamentos.children[i];
        const medicamento = item.textContent.replace("Remover", "").trim();
        medicamentos.push(medicamento);
    }

    // Salvar a lista de medicamentos no localStorage
    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));
}

// Função para carregar a lista do localStorage
function carregarLista() {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos"));

    if (medicamentos) {
        const listaMedicamentos = document.getElementById("lista-medicamentos");
        listaMedicamentos.innerHTML = ""; // Limpar a lista atual

        medicamentos.forEach(function(medicamento) {
            const li = document.createElement("li");
            li.textContent = medicamento;

            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.classList.add("remover-button");
            removerBtn.onclick = function() {
                listaMedicamentos.removeChild(li);
                salvarLista(); // Salvar a lista atualizada
            };

            li.appendChild(removerBtn);
            listaMedicamentos.appendChild(li);
        });
    }
}

// Evento de adicionar medicamento
document.getElementById("adicionar").addEventListener("click", function() {
    const medicamento = document.getElementById("medicamento").value;
    const quantidade = document.getElementById("quantidade").value;
    const unidade = document.getElementById("unidade").value;
    const horario = document.getElementById("horario").value;

    if (medicamento && quantidade && unidade && horario) {
        const listaMedicamentos = document.getElementById("lista-medicamentos");
        const li = document.createElement("li");
        li.textContent = `${medicamento} - ${quantidade} ${unidade} - Horário: ${horario}`;

        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.classList.add("remover-button");
        removerBtn.onclick = function() {
            listaMedicamentos.removeChild(li);
            salvarLista(); // Salvar a lista atualizada
        };

        li.appendChild(removerBtn);
        listaMedicamentos.appendChild(li);

        // Limpar os campos após adicionar
        document.getElementById("medicamento").value = "";
        document.getElementById("quantidade").value = "";
        document.getElementById("horario").value = "";

        salvarLista(); // Salvar a lista no localStorage
    } else {
        alert("Por favor, preencha todos os campos!");
    }
});

// Evento de redirecionamento para a página 2
document.getElementById("home-button").addEventListener("click", function() {
    window.location.href = "pagina2.html"; // Redireciona para a página 2
});

// Carregar a lista de medicamentos quando a página for carregada
window.onload = function() {
    carregarLista();
};

