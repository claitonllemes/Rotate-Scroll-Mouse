# **Rotate Scroll Mouse**

<a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210368404-216273fb-c930-453e-b32b-e3614872eba3.png" width="100%"/></a><br>

## **Configurações**
O código abaixo adiciona uma animação aos elementos definidos de rotacionar ao rolar a página com scroll do mouse.

<br><a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210372197-a1d41894-8acc-470b-ac38-2bd1ee0a4ed9.png" width="100%"/></a><br>

```java

<script>

  // Name: Animate Scroll Mouse
  // Version: 1.0.0 
  // Copyright© : Claiton Lemes

  let mouse_scroll = document.querySelectorAll("#ElementID_01, #ElementID_02, #ElementID_03");
  let angulos = {};

  mouse_scroll.forEach(function (elemento) {
    let id = elemento.id;
    angulos[id] = 0;
  });

  window.addEventListener("scroll", function () {
    mouse_scroll.forEach(function (elemento) {
      let id = elemento.id;
      angulos[id] = window.scrollY;
      elemento.style.transform = "rotate(" + angulos[id] + "deg)";
    });
  });

</script>

```
