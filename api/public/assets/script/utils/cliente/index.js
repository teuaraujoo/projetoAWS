const API = "18.228.12.78";

// edição do cliente 
export function editarClientes(id) {
    fetch(`${API}/clientes/${id}`).then((res) => {
        return res.json();
    }).then((cliente) => {
        document.getElementById('inputNome').value = cliente.nome;
        document.getElementById('inputEmail').value = cliente.email;
        document.getElementById('inputTel').value = cliente.telefone;
        document.getElementById('inputNasc').value = cliente.nascimento;
        document.getElementById('inputSexo').value = cliente.sexo;
    });
};

// deletar o cliente 
export function deletarCliente() {
    const id = document.getElementById('idCliente').value;
    fetch(`${API}/clientes/${id}`, {
        method: 'DELETE',
    }).then(res => res.json()).then(data => {
        alert('Cliente deletado com sucesso');
        listarClientes();
    });
};

// lista os cliente 
export function listarClientes() {
    fetch(`/${API}/clientes`)
    .then((res) => {
        return res.json();
    })
    .then((clientes) => {
            const html = "";
            const tbody = document.getElementById('tableClientes');
            clientes.forEach((cliente) => {
                html +=
                        `
                            <tr>
                                <td>${cliente.nome}</td>
                                <td>${cliente.email}</td>
                                <td>${cliente.telefone}</td>
                                <td>${cliente.nascimento}</td>
                                <td>${cliente.sexo}</td>
                                <td>
                                    <button class="btn btn-warning" onclick="editarCliente(${cliente.id})" id="btnEditarCliente"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button class="btn btn-danger" onclick="excluirCliente(${cliente.id})" id="btnExcluirCliente"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        `;
            });
            tbody.innerHTML = html;
        });
};


// salva o cliente 
export function salvarCliente() {
    const id = document.getElementById('idCliente').value;
    
    if (id) {   
        fetch(`${API}/clientes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: document.getElementById('inputNome').value,
                email: document.getElementById('inputEmail').value,
                telefone: document.getElementById('inputTel').value,
                nascimento: document.getElementById('inputNasc').value,
                sexo: document.getElementById('inputSexo').value,
            }),
        }).then(res => res.json()).then(data => {
            alert('Cliente salvo com sucesso');
            listarClientes();
        })
    } else {
        fetch(`${API}/clientes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: document.getElementById('inputNome').value,
                email: document.getElementById('inputEmail').value,
                telefone: document.getElementById('inputTel').value,
                nascimento: document.getElementById('inputNasc').value,
                sexo: document.getElementById('inputSexo').value,
            }),
        }).then(res => res.json()).then(data => {
            alert('Cliente salvo com sucesso');
            listarClientes();
        })
    };
};
