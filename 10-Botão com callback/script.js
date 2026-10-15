function confirmarAcao() {
  const paragrafo = document.getElementById("mensagem");
  paragrafo.textContent = "Ação confirmada!";
}

const botao = document.getElementById("btnConfirmar");

botao.addEventListener("click", confirmarAcao);