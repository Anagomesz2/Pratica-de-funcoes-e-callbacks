function verificarNota(nota, callback) {
  callback(nota);
}

// Callback que analisa a nota
function avaliarDesempenho(nota) {
  if (nota >= 6) {
    console.log(`Nota ${nota}: Aprovado!`);
  } else {
    console.log(`Nota ${nota}: Recuperação.`);
  }
}

// Testes
verificarNota(7.5, avaliarDesempenho); // Exibe: Aprovado!
verificarNota(4.0, avaliarDesempenho); // Exibe: Recuperação.