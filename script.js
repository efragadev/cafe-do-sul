//SIMULAÇÃO DE ADIÇÃO DE ITENS AO PEDIDO
//SELECIONA TODOS OS BOTÕES QUE POSSUEM A CLASSE 'ADICIONAR'

const botoesAdicionar = document.querySelectorAll(".adicionar");

//SELECIONA A LISTA ONDE OS ITENS DO PEDIDO SERÃO EXIBIDOS
const listaPedido = document.getElementById("lista-pedido");

//SELECIONA O ELEMENTO QUE EXIBIRÁ O VALOR TOTAL DO PEDIDO
const totalElemento = document.getElementById("total");

//VARIAVEL PARA ARMAZENAR O TOTAL DO PEDIDO
let total = 0;

//PERCORRE TODOS OS BOTÕES "ADICIONAR" E ADICONA UM EVENTO DE CLIQUE A CADA UM DELES
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {

        //OBTEM O ELEMENTO PAI DO BOTÃO (PROVAVELMENTE O CARD DE PRODUTO)
        const produto = botao.parentElement;

        //OBTEM O NOME DO PRODUTO A PARTIR DO TEXTO DENTRO DA TAG <h3>
        const nome = produto.querySelector("h3").textContent;

        //OBTEM O PREÇO DO PRODUTO, REMOVENDO O TEXTO 'R$' E CONVERTENDO PARA NUMERO DECIMAL
        const preco = parseFloat(
            produto.querySelector(".preco") // corrigido
                .textContent.replace("R$", "")
                .replace(",", ".")
        );

        //CRIA UM NOVO ITEM DE LISTA PARA ADICIONAR O PRODUTO AO PEDIDO 
        const itemPedido = document.createElement("li");
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2).replace(".", ",")}`;

        //ADICIONA ITEM CRIADO A LISTA DE PEDIDOS
        listaPedido.appendChild(itemPedido);

        //ATUALIZA O TOTAL DE COMPRA, SOMANDO O PREÇO DO NOVO ITEM
        total += preco;

        //ATUALIZA O TEXTO DO ELEMENTO QUE EXIBE O TOTAL DO PEDIDO
        totalElemento.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
    });
});

//SIMULAÇÃO DE FINALIZAÇÃO DE PEDIDO
//SELECIONA O BOTÃO "FINALIZAR PEDIDO"
const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

//ADICIONA UM EVENTO DE CLIQUE AO BOTÃO DE FINALIZAR PEDIDO
botaoFinalizarPedido.addEventListener("click", () => {

    //EXIBE UM ALERTA INDICANDO QUE O PEDIDO FOI FINALIZADO 
    alert("Pedido finalizado " + totalElemento.textContent);

    //LIMPA A LISTA DE PEDIDOS, REMOVENDO TODOS OS ITENS
    listaPedido.innerHTML = '';

    //RESETA O TOTAL PARA ZERO
    total = 0;

    //ATUALIZA O TEXTO DO TOTAL PARA REFLETIR A MUDANÇA
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});