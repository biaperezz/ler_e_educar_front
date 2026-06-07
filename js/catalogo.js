// ==========================================================================
// 1. DADOS SIMULADOS (Substituídos pela API do Docker no futuro)
// ==========================================================================
const livrosDoBanco = [
    {
        id: 1,
        titulo: "História de Dois Amores",
        autor: "Carlos Drummond de Andrade",
        editora: "Companhia das Letrinhas",
        faixaEtaria: "9+",
        anoLancamento: 2013,
        isbn: "9788535902778",
        categoria: "conto-de-fadas",
        sinopse: "Os altos e baixos de uma amizade inusitada entre uma pulga e um elefante mostram que o antídoto para a dificuldade é apenas um: o amor. Imagine como é viver com a pulga atrás da orelha? Um pulgo encontrou na orelha de um elefante o melhor lugar para viver e se encheu de vaidade."
    },
    {
        id: 2,
        titulo: "A Primavera da Lagarta",
        autor: "Ruth Rocha",
        editora: "Salamandra",
        faixaEtaria: "6+",
        anoLancamento: 2011,
        isbn: "9788516069483",
        categoria: "fabulas",
        sinopse: "Grande reboliço na floresta! Os animais queriam acabar com a lagarta porque ela comia muitas folhas. Mas a surpresa vem na primavera quando ela vira uma linda borboleta."
    }
];

// Dispara a renderização assim que a página carrega
document.addEventListener("DOMContentLoaded", () => {
    renderizarCatalogo(livrosDoBanco);
});

// ==========================================================================
// 2. GERAÇÃO AUTOMÁTICA DOS CARDS DO CATÁLOGO
// ==========================================================================
function renderizarCatalogo(livros) {
    const conteineres = {
        "conto-de-fadas": document.getElementById("livros-conto-fadas"),
        "ciencias-natureza": document.getElementById("livros-ciencias"),
        "alfabetizacao": document.getElementById("livros-alfabetizacao"),
        "fabulas": document.getElementById("livros-fabulas")
    };

    // Limpa as categorias antes de desenhar
    Object.values(conteineres).forEach(div => {
        if(div) div.innerHTML = "";
    });

    livros.forEach(livro => {
        const gridDestino = conteineres[livro.categoria];

        if (gridDestino) {
            const card = document.createElement("div");
            card.className = "livro-card";
            
            // ATENÇÃO AQUI: Vincula o clique do card para abrir o modal deste livro
            card.addEventListener("click", () => {
                abrirModalComDados(livro);
            });

            card.innerHTML = `
                <div class="capa-placeholder" style="font-size: 11px; cursor: pointer;">
                    ${livro.titulo}
                </div>
                <h3 style="cursor: pointer;">${livro.titulo}</h3>
            `;

            gridDestino.appendChild(card);
        }
    });
}

// ==========================================================================
// 3. CONTROLE E PREENCHIMENTO DO MODAL
// ==========================================================================
function abrirModalComDados(livro) {
    document.getElementById("modal-titulo").innerText = livro.titulo.toUpperCase();
    document.getElementById("modal-autor").innerText = livro.autor;
    document.getElementById("modal-editora").innerText = livro.editora;
    document.getElementById("modal-faixa").innerText = livro.faixaEtaria;
    document.getElementById("modal-ano").innerText = livro.anoLancamento;
    document.getElementById("modal-isbn").innerText = livro.isbn || "Não informado";
    
    const resumoSpan = document.getElementById("modal-sinopse-resumo");
    const completaSpan = document.getElementById("modal-sinopse-completa");
    const btnLerMais = document.getElementById("btn-ler-mais");

    // Corta o texto se a sinopse for muito longa para criar o "Ver Mais"
    if (livro.sinopse.length > 120) {
        resumoSpan.innerText = livro.sinopse.substring(0, 120) + "...";
        completaSpan.innerText = livro.sinopse.substring(120);
        completaSpan.style.display = "none"; // Começa escondido
        btnLerMais.style.display = "inline-block";
        btnLerMais.innerText = "(Ver Mais)";
    } else {
        resumoSpan.innerText = livro.sinopse;
        completaSpan.innerText = "";
        completaSpan.style.display = "none";
        btnLerMais.style.display = "none";
    }

    // Altera o estilo do modal no CSS para se tornar visível
    document.getElementById("modal-livro").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal-livro").style.display = "none";
}

function expandirTexto() {
    const completaSpan = document.getElementById("modal-sinopse-completa");
    const btn = document.getElementById("btn-ler-mais");
    
    if (completaSpan.style.display === "none" || completaSpan.style.display === "") {
        completaSpan.style.display = "inline";
        btn.innerText = " (Ver Menos)";
    } else {
        completaSpan.style.display = "none";
        btn.innerText = " (Ver Mais)";
    }
}

// ==========================================================================
// 4. CONTROLE DO MENU LATERAL (Ativa por 'ativo' ou 'aberto')
// ==========================================================================
function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    if (menu) {
        // Alterna as duas classes para garantir compatibilidade com o seu arquivo CSS
        menu.classList.toggle("ativo");
        menu.classList.toggle("aberto");
    }
}

// Detecta cliques fora do menu para fechar automaticamente
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu-lateral');
    const hamburguer = document.querySelector('.menu-hamburguer');

    if (menu && (menu.classList.contains('ativo') || menu.classList.contains('aberto'))) {
        // Se o clique não foi no menu e não foi no botão de três barrinhas, fecha.
        if (!menu.contains(event.target) && !hamburguer.contains(event.target)) {
            menu.classList.remove('ativo');
            menu.classList.remove('aberto');
        }
    }
});