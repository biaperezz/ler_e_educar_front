let carrinho = [];

function addCarrinho(id) {
  carrinho.push(id);
  console.log("Carrinho:", carrinho);
}

function toggleMenu() {
  document.getElementById("menu-lateral").classList.toggle("ativo");
}
