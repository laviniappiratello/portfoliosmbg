document.addEventListener('DOMContentLoaded', function() {
  //espera tudo da pagina carregar 
    const menuToggle = document.querySelector('.menu-toggle');
    const navContent = document.querySelector('.nav-content');
    //procura o hamburguerzinho e o nav e guarda ele nessas variaveis

    menuToggle.addEventListener('click', function() {
      //toda vez q vc clicar no hamburguer roda esse cod aq dentro
      navContent.classList.toggle('active');
      //liga e desliga mais ou menos

      const icon = this.querySelector('i');
      if (navContent.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        //coloca o x que mostra q da de fechar o menu
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        //faz o contrario 
      }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    //pega os links do nav
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navContent.classList.remove('active');
          menuToggle.querySelector('i').classList.remove('fa-times');
          menuToggle.querySelector('i').classList.add('fa-bars');
        }
      });
    });
  });