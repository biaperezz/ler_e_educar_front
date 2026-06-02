const livros = [

  {
    titulo: "Matemática Divertida",
    autor: "João",
    categoria: "Alfabetização e Letramento"
  },

  {
    titulo: "Ciências Kids",
    autor: "Maria",
    categoria: "Ciências e Natureza"
  },

  {
    titulo: "Português Fácil",
    autor: "Ana",
    categoria: "Conto de Fadas"
  },

  {
    titulo: "Peter Pan",
    autor: "Bob",
    categoria: "História e Cultura"
  },

  {
    titulo: "João e o pé de feijão",
    autor: "João",
    categoria: "Fábulas"
  },

];

function mostrarLivros(listaLivros) {

  const lista =
    document.getElementById("lista-livros");

  lista.innerHTML = "";

  listaLivros.forEach(livro => {

    lista.innerHTML += `

      <div class="livro-card">

        <h3>${livro.titulo}</h3>

        <p>${livro.autor}</p>

        <p>${livro.categoria}</p>

      </div>
    `;
  });
}

function filtrarLivros(categoria) {

  const filtrados = livros.filter(livro =>

    livro.categoria === categoria
  );

  mostrarLivros(filtrados);
}

mostrarLivros(livros);

function abrirModal() {

  document.getElementById("modal-livro").style.display = "flex";
}

function fecharModal() {

  document.getElementById("modal-livro").style.display = "none";
}

function toggleMenu() {
  const menu = document.getElementById("menu-lateral");
  menu.classList.toggle("aberto");
}

// Evento para fechar o menu automaticamente ao clicar fora dele
document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu-lateral');
  const hamburguer = document.querySelector('.menu-hamburguer');

  // Verifica se o menu está aberto antes de fazer qualquer validação
  if (menu.classList.contains('aberto')) {
    
    /* MÁGICA DO FECHAMENTO AUTOMÁTICO:
       Se o clique NÃO foi dentro do menu lateral E NÃO foi no botão hambúrguer,
       significa que o usuário clicou na área vazia da página. Então fechamos o menu!
    */
    if (!menu.contains(event.target) && !hamburguer.contains(event.target)) {
      menu.classList.remove('aberto');
    }
  }
});
function expandirTexto() {
  const textoCompleto = document.getElementById("texto-completo");
  const btnLerMais = document.getElementById("btn-ler-mais");

  // Se o texto estiver escondido, mostra ele
  if (textoCompleto.style.display === "none" || textoCompleto.style.display === "") {
    textoCompleto.style.display = "inline"; 
    btnLerMais.innerText = "(Ver Menos)";
  } else {
    // Se já estiver aberto, esconde de novo ao clicar
    textoCompleto.style.display = "none";
    btnLerMais.innerText = "(Ver Mais)";
  }
}

// AJUSTE COMPLEMENTAR: Garanta que sempre que o modal fechar, o texto resete para escondido
function fecharModal() {
  document.getElementById("modal-livro").style.display = "none";
  
  // Reseta o estado do Ver Mais
  const textoCompleto = document.getElementById("texto-completo");
  const btnLerMais = document.getElementById("btn-ler-mais");
  if(textoCompleto && btnLerMais) {
    textoCompleto.style.display = "none";
    btnLerMais.innerText = "(Ver Mais)";
  }
}