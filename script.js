function revealOnScroll() {
    const elements = document.querySelectorAll(".hidden");
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (position < windowHeight - 100) { 
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); 
  let menuBtn = document.querySelector(".btn-menu")
  let openMenu = ()=>{
    let menu = document.querySelector(".menu-ul")
    if(menu.classList.contains("open")){
        menu.classList.remove("open")
        document.body.style.overflowY = "auto"
        document.html.style.overflowY = "auto"
    }else{
        menu.classList.add("open")
        document.body.style.overflowY = "hidden"
        document.html.style.overflowY = "hidden"
    }
  }
  menuBtn.addEventListener("click",openMenu)
