# **Rotate Scroll Mouse**

<a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210368404-216273fb-c930-453e-b32b-e3614872eba3.png" width="100%"/></a><br>

## **Configurações**

O código abaixo adiciona uma animação aos elementos definidos de rotacionar ao rolar a página com scroll do mouse.

<br><a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210372197-a1d41894-8acc-470b-ac38-2bd1ee0a4ed9.png" width="100%"/></a><br>

```html
<script>
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
</script>
```
