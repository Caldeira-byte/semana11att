document.addEventListener("DOMContentLoaded", () => {
  const receitasLocal = [
    {
      titulo: "Pão de Queijo",
      imagem: "pao.webp",
      descricao: "Delicioso, quentinho e irresistível! Agora ainda mais crocante por fora e macio por dentro!",
      link: "paoqueijo.html"
    },
    {
      titulo: "Macarrão com Carne Moída",
      imagem: "macarrao2.jpg",
      descricao: "Uma receita clássica e saborosa, perfeita para qualquer ocasião!",
      link: "macarraocarne.html"
    },
    {
      titulo: "Brigadeiro",
      imagem: "brigadeiro.jpg",
      descricao: "O doce brasileiro mais amado! Simples de fazer e perfeito para qualquer momento.",
      link: "brigadeiro.html"
    }
  ];

  const container = document.getElementById("receitas-container");

  function renderReceita(receita, usarIdComoLink = false) {
    const card = document.createElement("div");
    card.classList.add("col-md-8", "receitas-principais");

    const link = usarIdComoLink ? `detalhes.html?id=${receita.id}` : receita.link;

    card.innerHTML = `
      <h2><a href="${link}" class="text-light">${receita.titulo.toUpperCase()}</a></h2>
      <p>
          <img src="${receita.imagem}" alt="${receita.titulo}">
          ${receita.descricao}
      </p>
      <a href="${link}" class="btn btn-success mt-2">Ver receita</a>
    `;

    container.appendChild(card);
  }

  if (container) {
    // Renderiza as receitas locais
    receitasLocal.forEach(receita => renderReceita(receita));

    // Busca e renderiza as receitas da API
    fetch("http://localhost:5501/receitas")
      .then(response => response.json())
      .then(receitasAPI => {
        receitasAPI.forEach(receita => renderReceita(receita, true));
      })
      .catch(error => console.error("Erro ao carregar receitas da API:", error));
  }
});
