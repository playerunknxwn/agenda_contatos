const form = document.querySelector('#form-add');
const inputNome = document.querySelector('#input-nome');
const inputNumero = document.querySelector('#input-numero');
const arrayNomes = [];
const arrayNumeros = [];

let tipoContatos = '';
const tipoAgenda = prompt("Que tipo de contatos será salvo na agenda?\nDigite 1 para trabalho\nDigite 2 para pessoal");

if (tipoAgenda === '1') {
    tipoContatos = 'Trabalho';
} else {
    tipoContatos = 'Pessoal';
}

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    adicionaTd();
    atualizaContador();
});

function adicionaLinha() {
    if (arrayNomes.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi adicionado`);
    } else {
        arrayNomes.push(inputNome.value);
        arrayNumeros.push(parseFloat(inputNumero.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td style="color: #4294ff">${inputNumero.value}</td>`;
        linha += '</tr>';


        linhas += linha;
    }
    inputNome.value = '';
    inputNumero.value = '';
}

function adicionaTd() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = linhas;
}

function atualizaContador() {
    let linhaTfoot = `<td>${tipoContatos}</td>`;
    const numContatos = arrayNumeros.length;

    linhaTfoot += `<td>${numContatos} ${numContatos === 1 ? 'contato' : 'contatos'}</td>`;

    const tfoot = document.querySelector('tfoot');
    tfoot.innerHTML = linhaTfoot;
}
