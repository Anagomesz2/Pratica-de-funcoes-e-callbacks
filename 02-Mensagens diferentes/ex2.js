function mostrarBoasVindas() {
  console.log("Seja muito bem-vindo ao sistema!");
}

function mostrarDespedida() {
  console.log("Até logo! Tenha um ótimo dia.");
}

function executarMensagem(callback) {
  callback();
}

// Testando com ambas as funções
executarMensagem(mostrarBoasVindas);
executarMensagem(mostrarDespedida);