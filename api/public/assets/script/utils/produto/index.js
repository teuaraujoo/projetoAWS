const API = "18.228.12.78";

export function editarProduto(id) {
    fetch(`${API}/produtos/${id}`).then((res) => {
        return res.json();
    }).then((produto) => {
        document.getElementById('inputNomeProduto').value = produto.nome;
        document.getElementById('inputPreco').value = produto.preco;
        document.getElementById('inputDescricao').value = produto.descricao;
        document.getElementById('inputEstoque').value = produto.quantidade;
    });
};

export function listarProduto() {
    fetch(`${API}/produtos`)
    .then((res) => {
        return res.json();
    })
    .then((produtos) => {
            const html = "";
            const tbody = document.getElementById('tableProdutos');
            produtos.forEach((produto) => {
                html +=
                        `
                            <tr>
                                <td>${produto.nome}</td>
                                <td>${produto.preco}</td>
                                <td>${produto.descricao}</td>
                                <td>${produto.quantidade}</td>
                                <td>
                                    <button class="btn btn-warning" onclick="editarProduto(${produto.id})" id="btnEditarProduto"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button class="btn btn-danger" onclick="excluirProduto(${produto.id})" id="btnDeletarProduto"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        `         
                ;
            });
            tbody.innerHTML = html;
        });
};

export function salvarProduto() {
    const id = document.getElementById('idProduto').value;
    if (id) {
        fetch(`${API}/produtos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                nome: document.getElementById('inputNomeProduto').value,
                preco: document.getElementById('inputPreco').value,
                descricao: document.getElementById('inputDescricao').value,
                quantidade: document.getElementById('inputEstoque').value,
            }),
        }).then(res => res.json()).then(data => {
            alert('Produto editado com sucesso');
            listarProduto();
        });
    } else {
        fetch(`${API}/produtos`, {
            method: 'POST',
            body: JSON.stringify({
                nome: document.getElementById('inputNomeProduto').value,
                preco: document.getElementById('inputPreco').value,
                descricao: document.getElementById('inputDescricao').value,
                quantidade: document.getElementById('inputEstoque').value
            }),
        }).then(res => res.json()).then(data => {
            alert('Produto cadastrado com sucesso');
            listarProduto();
        });
    }
};

export function deletarProduto() {
    const id = document.getElementById('idProduto').value;
    fetch(`${API}/produtos/${id}`, {
        method: 'DELETE',
    }).then(res => res.json()).then(data => {
        alert('Produto deletado com sucesso');
        listarProduto();
    });
};