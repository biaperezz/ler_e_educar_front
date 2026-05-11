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