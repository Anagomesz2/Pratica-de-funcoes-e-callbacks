function mostrarBoasVindas() {
  console.log("Seja muito bem-vindo ao sistema!");
}

function mostrarDespedida() {
  console.log("Até logo! Tenha um ótimo dia.");
}

function executarMensagem(callback) {
  callback();
}

executarMensagem(mostrarBoasVindas);
executarMensagem(mostrarDespedida);