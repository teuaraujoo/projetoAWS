function salvarCliente() {
    const API = "18.228.12.78";
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
    }
}