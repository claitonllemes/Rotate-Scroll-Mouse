// Name: Animate Scroll Mouse
// Version: 1.1.0
// Copyright© : Claiton Lemes

// Selecionando os elementos que serão rotacionados com o scroll do mouse
const mouseScrollElements = document.querySelectorAll("#e_000000000");

// Objeto para armazenar os ângulos de rotação de cada elemento
const angles = {};

// Definindo a velocidade de rotação desejada
const rotationSpeed = 0.1;

// Inicializando o objeto angles com valor 0 para cada elemento
mouseScrollElements.forEach((element) => {
  const id = element.id;
  angles[id] = 0;
});

// Função para ser executada ao rolar a página
const handleScroll = () => {
  // Atualizando o ângulo de rotação para cada elemento
  mouseScrollElements.forEach((element) => {
    const id = element.id;
    // Multiplicando o valor do scrollY pela velocidade de rotação desejada
    angles[id] = window.scrollY * rotationSpeed;
    // Aplicando a rotação no elemento
    element.style.transform = `rotate(${angles[id]}deg)`;
  });
};

window.addEventListener("scroll", handleScroll);
