
  let menuBtns = document.querySelectorAll(".arrow"); // Seleciona todos os botões
let menus = document.querySelectorAll(".card-drop"); // Seleciona todas as ULs
let menuB = document.querySelector(".btn-menu");
menuBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let menu = menus[index]; // Pega o menu correspondente ao botão clicado

        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
        } else {
            // Fecha todos antes de abrir o novo
            menus.forEach(m => m.classList.remove("open"));
            menu.classList.add("open");
        }
    });
});
function openMenu (){
    let ulMenu = document.querySelector(".menuUL");
    if (ulMenu.classList.contains("open")) {
        ulMenu.classList.remove("open");
    } else {
        ulMenu.classList.add("open");
    }
}
menuB.addEventListener("click",openMenu)


