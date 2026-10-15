// Função de saudação
function saudacao() {
  console.log("Olá! Seja bem-vindo(a).");
}

// Função que recebe outra função e a executa
function executar(acao) {
  acao();
}

// Chamada passando a função sem parênteses (como referência)
executar(saudacao);