function prepararPedido(callback) {
  console.log("Preparando pedido...");

  // setTimeout recebe a função callback e o tempo em milissegundos (2000ms = 2s)
  setTimeout(callback, 2000);
}

function pedidoPronto() {
  console.log("Pedido pronto!");
}

// Execução
prepararPedido(pedidoPronto);