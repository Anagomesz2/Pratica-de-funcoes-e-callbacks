function executarTarefa(callback) {
  callback();
}

// Chamada com uma função anônima inline
executarTarefa(function() {
  console.log("Tarefa concluída!");
});