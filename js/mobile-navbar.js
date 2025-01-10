
// Botao para responsividade abaixo
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


   // Botão do saldo abaixo 
   document.getElementById("show-saldo-btn").addEventListener("click", function() {
    var saldoAmount = document.getElementById("saldo-amount");
    if (saldoAmount.style.display === "none") {
      saldoAmount.style.display = "block";
      this.innerHTML = '<img src="/imagens/olho.png" alt="Esconder Saldo" width = "30">';
    } else {
      saldoAmount.style.display = "none";
      this.innerHTML = '<img src="/imagens/olho-fechado.png" alt="Mostrar Saldo" width = "30">';
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
        toggleSidebar.querySelector('i').classList.toggle('bi-chevron-left');
        toggleSidebar.querySelector('i').classList.toggle('bi-chevron-right');
    });
});