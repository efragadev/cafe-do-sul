//SIMULAÇÃO DE ADIÇÃO DE ITENS AO PEDIDO
//SELECIONA TODOS OS BOTÕES QUE POSSUEM A CLASSE 'ADICIONAR'

const botoesAdicionar = document.querySelectorAll(".adicionar");

//SELECIONA A LISTA ONDE OS ITENS DO PEDIDO SERÃO EXIBIDOS
const listaPedido = document.getElementById("lista-pedido");

//SELECIONA O ELEMENTO QUE EXIBIRÁ O VALOR TOTAL DO PEDIDO
const totalElemento = document.querySelectorById("total");


//VARIAVEL PARA ARMAZENAR O TOTAL DO PEDIDO
let total = 0;

//PERCORRE TODOS OS BOTÕES "ADICIONAR" E ADICONA UM EVENTO DE CLIQUE A CADA UM DELES
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
        
    })
});
