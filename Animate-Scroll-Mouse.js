// Animate Scroll Mouse Greatpages v. 1.0.0 - Ⓒ Copyright 2023 Claiton Lemes

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
