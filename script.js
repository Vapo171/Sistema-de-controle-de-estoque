const produtosKey = 'produtos';

//Função para carregar produtos do Local Storage
function carregarProdutos() {
    const produtos = JSON.parse(localStorage.getItem(produtoskey))  || [];
    const tableBody = document.getElementById('produtosTable').querySelector('tbody');
    tableBody.innerHTML = '';
    produtos.forEach((produtos, index) => {
        const row = `<tr>
        <td>${index + 1}</td>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.quantidade}</td>
        <td>R$ ${parseFloat(produto.preco).toFixed(2)}</td>
        <td>
            <button onclick="deletarProduto(${index})">Deletar</button>
        </td>
    </tr>`;
    tableBody.innerHTML += row;
    });
}

//Função para adicionart um novo produto
function adicionartProduto() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const preco = parseFloat(document.getElementById('preco').value);

    if (!nome || !descricao || isNaN(quantidade) || isNaN(preco)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const produtos = JSON.parse(localStorage.getItem(produtoskey)) || [];
    produtos.push({nome, descricao, quantidade, preco });
    localStorage.setItem(produtoskey, JSON.stringify(produtos));

    carregarProdutos();
    limparFormulario();
}

//Função para deletar um produto
function deletarProduto(index) {
    const produtos = JSON.parse(localStorage.getItem(produtoskey)) || [];
    produtos.splice(index, 1);
    localStorage.setItem(produtoskey, JSON.stringify(produtos));
    carregarProdutos();
}

//Função para limpar o formulário após adicionar um produto
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('preco').value = '';
}

//Carregar produtos ao iniciar a página
carregarProdutos();