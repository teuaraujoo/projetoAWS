import { listarClientes, editarClientes, salvarCliente, deletarCliente } from './utils/cliente/index.js';

import { listarProduto, editarProduto, salvarProduto, deletarProduto } from './utils/produto/index.js';

document.addEventListener('DOMContentLoaded', () => {
    listarClientes();
    listarProduto();
});

const btnSalvarCliente = document.getElementById('btnSalvarCliente');
const btnEditarCliente = document.getElementById('btnEditarCliente');
const btnDeletarCliente = document.getElementById('btnExcluirCliente');
const btnSalvarProduto = document.getElementById('btnSalvarProduto');
const btnEditarProduto = document.getElementById('btnEditarProduto');
const btnDeletarProduto = document.getElementById('btnExcluirProduto');

btnSalvarCliente.addEventListener("click", (e) => {
    salvarCliente();  
})

btnEditarCliente.addEventListener('click', (e) => {
    editarClientes();
})

btnDeletarCliente.addEventListener('click', (e) => {
    deletarCliente();
})

btnSalvarProduto.addEventListener('click', (e) => {
    salvarProduto();  
})

btnEditarProduto.addEventListener('click', (e) => {
    editarProduto();
})

btnDeletarProduto.addEventListener('click', (e) => {
    deletarProduto();
})

