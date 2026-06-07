// 1. AJUSTADO: Categorias agora usam o mesmo padrão do HTML/Banco (lowercase e hífens)
const livros = [
  {
    id: 1,
    titulo: "Matemática Divertida",
    autor: "João",
    categoria: "alfabetizacao"
  },
  {
    id: 2,
    titulo: "Ciências Kids",
    autor: "Maria",
    categoria: "ciencias-natureza"
  },
  {
    id: 3,
    titulo: "Português Fácil",
    autor: "Ana",
    categoria: "conto-de-fadas"
  },
  {
    id: 4,
    titulo: "Peter Pan",
    autor: "Bob",
    categoria: "conto-de-fadas"
  },
  {
    id: 5,
    titulo: "João e o pé de feijão",
    autor: "João",
    categoria: "fabulas"
  }
];

// 2. OTIMIZADO: Função de mostrar livros usando uma abordagem mais limpa e segura
function mostrarLivros(listaLivros) {
  const lista = document.getElementById("lista-livros");
  if (!lista) return; // Segurança caso essa função rode em uma página que não tem essa div

  lista.innerHTML = "";

  listaLivros.forEach(livro => {
    // Cria o elemento na memória primeiro (melhor performance para o banco de dados)
    const card = document.createElement("div");
    card.className = "livro-card";
    
    // Configura o HTML interno do card de forma organizada
    card.innerHTML = `
      <h3>${livro.titulo}</h3>
      <p><strong>Autor:</strong> ${livro.autor}</p>
      <p class="tag-categoria">${livro.categoria}</p>
    `;

    lista.appendChild(card);
  });
}

// 3. SEGURO: Filtro de livros atualizado
function filtrarLivros(categoriaTarget) {
  const filtrados = livros.filter(livro => livro.categoria === categoriaTarget);
  mostrarLivros(filtrados);
}

// Inicializa a listagem caso o elemento exista na página atual
document.addEventListener("DOMContentLoaded", () => {
  mostrarLivros(livros);
});

// ==========================================================================
// CONTROLE DO MENU LATERAL (Seu script inteligente de clique fora)
// ==========================================================================
function toggleMenu() {
  const menu = document.getElementById("menu-lateral");
  if (menu) {
    menu.classList.toggle("ativo"); // Mudado para 'ativo' para bater com o seu CSS padrão anterior
  }
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu-lateral');
  const hamburguer = document.querySelector('.menu-hamburguer');

  if (menu && menu.classList.contains('ativo')) {
    if (!menu.contains(event.target) && (!hamburguer || !hamburguer.contains(event.target))) {
      menu.classList.remove('ativo');
    }
  }
});