
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const tableContainer = document.querySelector('.wrapper');

const CABECALHO = ["ID", "Nome", "Preço", "Categoria"];
let produtos = [];

window.addEventListener('load', function() {
    criarTabela();
    criarCabecalho();
    carregarDados();
});

function carregarDados(params){
    fetch('data/produtos.json')
        .then(function(resposta){return resposta.json(); })
        .then(function(dados) {
        
        }).catch(function(erro) {

            console.error("Não foi possível carregar o arquivo. " + erro.message);

        })
}

function atualizarLinhas(dados){
    for (let i = 0; i < dados.length; i++) {

        let linha = tbody.insertRow();
        linha.setAttribute('id', 'produto-' + dados[i].id);

        let registro = [
            dados[i].id,
            dados[i].title,
            dados[i].price,
            dados[i].category,
        ];
        
        for (let j = 0; j < registro.length; j++) {

            let celula = linha.insertCell();
            celula.innerText = registro[j];
            celula.setAttribute('title', registro[j]);
            linha.appendChild(celula);
        }
        
}

    } // fim for i = 0
}

function criarCabecalho() {
    let linha = thead.insertRow();

    for (let celula = 0; celula < CABECALHO.length; celula++) {
        let th = document.createElement('th');
        th.textContent = CABECALHO[celula];
        linha.appendChild(th);
    }
}

function criarTabela() {
    thead.setAttribute('id', 'cabecalho-tabela');
    tbody.setAttribute('id', 'corpo-tabela');
    table.appendChild(thead);
    table.appendChild(tbody);

    tableContainer.appendChild(table);
}
