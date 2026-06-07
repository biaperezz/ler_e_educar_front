// SIMULAÇÃO DE DADOS DA INSTITUIÇÃO LOGADA (Virá do banco de dados/Docker no futuro)
const dadosUsuario = {
    nomeGestor: "Ana Maria Silva",
    instituicao: "Escola Municipal Ler e Saber",
    email: "contato@lersaber.edu.br",
    cnpj: "12.345.678/0001-99",
    telefone: "(11) 98765-4321",
    endereco: "Rua das Flores, 123 - Centro",
    cep: "01234-567"
};

// Quando a página carregar, joga os dados nos inputs automaticamente
document.addEventListener("DOMContentLoaded", () => {
    preencherPerfil(dadosUsuario);
});

function preencherPerfil(dados) {
    // Altera o topo do título
    const tituloInst = document.getElementById("perfil-nome-instituicao");
    if (tituloInst) tituloInst.innerText = dados.instituicao.toUpperCase();

    // Preenche cada campo do formulário
    if (document.getElementById("input-nome")) document.getElementById("input-nome").value = dados.nomeGestor;
    if (document.getElementById("input-instituicao")) document.getElementById("input-instituicao").value = dados.instituicao;
    if (document.getElementById("input-email")) document.getElementById("input-email").value = dados.email;
    if (document.getElementById("input-cnpj")) document.getElementById("input-cnpj").value = dados.cnpj;
    if (document.getElementById("input-telefone")) document.getElementById("input-telefone").value = dados.telefone;
    if (document.getElementById("input-endereco")) document.getElementById("input-endereco").value = dados.endereco;
    if (document.getElementById("input-cep")) document.getElementById("input-cep").value = dados.cep;
}

// ==========================================================================
// CONTROLE DO MENU LATERAL (Isolado e seguro para esta página)
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
        if (!menu.contains(event.target) && !hamburguer.contains(event.target)) {
            menu.classList.remove('ativo');
            menu.classList.remove('aberto');
        }
    }
});