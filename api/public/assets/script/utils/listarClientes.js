function listarClientes() {
    const API = "18.228.12.78";
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
                            <button class="btn btn-warning" onclick="editarCliente(${cliente.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-danger" onclick="excluirCliente(${cliente.id})"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `;
      });
      tbody.innerHTML = html;
    });
}
