const sugestoes = [
  "Use sobreposições com transparência para um look ousado.",
  "Combine peças vintage com acessórios modernos.",
  "Invista em tênis com design futurista.",
  "Aposte em tons terrosos com cortes minimalistas.",
  "Misture peças oversized com itens justos para contraste.",
  "Use acessórios sustentáveis, como bolsas recicladas.",
];

function gerarSugestao() {
  const lista = document.getElementById("lista-estilos");
  const sugestao = sugestoes[Math.floor(Math.random() * sugestoes.length)];
  const item = document.createElement("li");
  item.textContent = sugestao;
  lista.appendChild(item);
}

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  this.reset();
});
