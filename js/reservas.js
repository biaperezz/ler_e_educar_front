// SIMULAÇÃO DO BANCO DE DADOS (Virá do Docker via fetch no futuro)
const dadosReservasDoBanco = [
    {
        id: 101,
        titulo: "HISTÓRIA DE DOIS AMORES",
        quantidade: "1+",
        imagem: "img/livro1.png",
        status: "Pendente",
        tipo: "solicitacao",
        periodo: ""
    },
    {
        id: 102,
        titulo: "A PRIMAVERA DA LAGARTA",
        quantidade: "12",
        imagem: "img/livro2.png",
        status: "Ativa",
        tipo: "reserva",
        periodo: "10/02 a 10/07"
    }
];

// Inicializa as listas e renderiza os cards ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    renderizarReservas(dadosReservasDoBanco);
});

function renderizarReservas(lista) {
    const boxSolicitacoes = document.getElementById("lista-solicitacoes");
    const boxReservas = document.getElementById("lista-reservas");

    if (boxSolicitacoes) boxSolicitacoes.innerHTML = "";
    if (boxReservas) boxReservas.innerHTML = "";

    lista.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-livro";

        if (item.tipo === "solicitacao") {
            itemDiv.innerHTML = `
                <img src="${item.imagem}" alt="Capa do Livro" class="capa-livro">
                <div class="detalhes-livro">
                    <h3 class="titulo-livro">${item.titulo}</h3>
                    <p class="info-quantidade">Qt. <span>${item.quantidade}</span></p>
                    <div class="acoes-livro">
                        <div class="grupo-botoes">
                            <button class="btn-enviar" onclick="enviarSolicitacao(${item.id})">ENVIAR SOLICITAÇÃO</button>
                            <button class="btn-cancelar" onclick="mostrarAviso()">CANCELAR SOLICITAÇÃO</button>
                        </div>
                        <p class="status-livro">STATUS: <span class="badge-pendente">${item.status}</span></p>
                    </div>
                </div>
            `;
            if (boxSolicitacoes) boxSolicitacoes.appendChild(itemDiv);
        } else if (item.tipo === "reserva") {
            itemDiv.innerHTML = `
                <img src="${item.imagem}" alt="Capa do Livro" class="capa-livro">
                <div class="detalhes-livro">
                    <h3 class="titulo-livro">${item.titulo}</h3>
                    <p class="info-quantidade">Qt. <span>${item.quantidade}</span></p>
                    <p class="info-periodo">PERÍODO DA RESERVA: <span>${item.periodo}</span></p>
                    <div class="acoes-livro">
                        <p class="status-livro">STATUS: <span class="badge-ativa">${item.status}</span></p>
                        <button class="btn-cancelar" onclick="mostrarAviso()">CANCELAR RESERVA</button>
                    </div>
                </div>
            `;
            if (boxReservas) boxReservas.appendChild(itemDiv);
        }
    });
}

// ==========================================================================
// FUNÇÕES DE ALERTA VISUAL
// ==========================================================================
function mostrarAviso() {
    const alerta = document.getElementById("alertaCancelado");
    if (alerta) {
        alerta.style.display = "block";
        // Auto-esconde o alerta após 4 segundos
        setTimeout(() => { fecharAlerta(); }, 4000);
    }
}

function fecharAlerta() {
    const alerta = document.getElementById("alertaCancelado");
    if (alerta) alerta.style.display = "none";
}

function enviarSolicitacao(id) {
    alert("Solicitação do livro " + id + " enviada com sucesso para análise!");
}

// ==========================================================================
// CONTROLE DO MENU LATERAL (Isolado e Seguro)
// ==========================================================================
function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    if (menu) {
        menu.classList.toggle("ativo");
        menu.classList.toggle("aberto");
    }
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu-lateral');
    const hamburguer = document.querySelector('.menu-hamburguer');

    if (menu && (menu.classList.contains('ativo') || menu.classList.contains('aberto'))) {
        if (!menu.contains(event.target) && (!hamburguer || !hamburguer.contains(event.target))) {
            menu.classList.remove('ativo');
            menu.classList.remove('aberto');
        }
    }
});