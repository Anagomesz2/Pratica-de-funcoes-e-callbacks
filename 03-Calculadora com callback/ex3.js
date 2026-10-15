function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function calcular(a, b, operacao) {
  const resultado = operacao(a, b);
  console.log(`O resultado da operação é: ${resultado}`);
}

// Testes das duas operações
calcular(5, 3, somar);        // Exibe: 8
calcular(4, 3, multiplicar);  // Exibe: 12