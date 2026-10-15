const produtos = ["Teclado", "Mouse", "Monitor", "Headset", "Webcam"];

function exibirProduto(produto) {
  console.log(`Produto: ${produto}`);
}

// O método forEach executa a função exibirProduto para cada elemento do array
produtos.forEach(exibirProduto);