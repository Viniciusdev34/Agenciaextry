let menuConsg = document.querySelector(".menu"); // Pegando o elemento corretamente
let btn = document.querySelector(".btn")
let toggleMenu = () => {
  let hiddenMenu = document.querySelector(".nav_main_ul");
  if (hiddenMenu.classList.contains("open")) { // Verifica se a classe já existe
    hiddenMenu.classList.remove("open"); // Remove se já existir
    btn.classList.remove("befer")
  } else {
    hiddenMenu.classList.add("open"); // Adiciona se não existir
    btn.classList.add("befer")
  }
};

// Adiciona o evento de clique para alternar a classe
menuConsg.addEventListener("click", toggleMenu);
