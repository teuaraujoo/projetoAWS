function deletarCliente() {
    const API = "18.228.12.78";
    const id = document.getElementById('idCliente').value;
    fetch(`${API}/clientes/${id}`, {
        method: 'DELETE',
    }).then(res => res.json()).then(data => {
        alert('Cliente deletado com sucesso');
        listarClientes();
    })
}