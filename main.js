const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");

// Display mobile menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//show active menu when scrolling

const highlightMenu = () => {
  const element = document.querySelector(".highlight");
  const linkOnePage = document.querySelector("#link1-page");
  const linkTwoPage = document.querySelector("#link2-page");
  const linkThreePage = document.querySelector("#link3-page");
  let scrollPos = window.scrollY;
  // console.log(scrollPos)

  // add highlight class to menu item
  if (window.innerWidth > 960 && scrollPos < 600) {
    linkTwoPage.classList.remove("highlight");
    linkOnePage.classList.add("highlight");

    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    linkTwoPage.classList.add("highlight");
    linkOnePage.classList.remove("highlight");
    linkThreePage.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    linkTwoPage.classList.remove("highlight");
    linkThreePage.classList.add("highlight");
    return;
  }

  if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
    element.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// close mobile menu after menu item is clicked

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 961 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
    return;
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
