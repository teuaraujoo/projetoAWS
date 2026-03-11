function editarClientes(id) {
    const API = "18.228.12.78";
    fetch(`${API}/clientes/${id}`).then((res) => {
        return res.json();
    }).then((cliente) => {
        document.getElementById('nome').value = cliente.nome;
        document.getElementById('email').value = cliente.email;
        document.getElementById('telefone').value = cliente.telefone;
        document.getElementById('nascimento').value = cliente.nascimento;
        document.getElementById('sexo').value = cliente.sexo;
    })
}