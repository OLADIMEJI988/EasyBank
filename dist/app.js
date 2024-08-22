// const hamburgerToggle = document.querySelector("#hamburger-active");
// const navbar = document.querySelector("#navbar");
// hamburgerToggle.addEventListener("click", hamburgerActive);

// function hamburgerActive () {
//     if(!navbar.classList.contains("active")){
//         navbar.classList.add("active");
//     } else {
//         navbar.classList.remove("active");
//     }
// }

function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
      ? ((e.name = "close"), list.classList.add("opacity-100"))
      : ((e.name = "menu"), list.classList.remove("opacity-100"));
  }