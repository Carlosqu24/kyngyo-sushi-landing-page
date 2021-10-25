const $navbar = document.querySelector('.navbar');

document.addEventListener('scroll', e => {
      if (scrollY > 100) {
            $navbar.classList.add('navbar--active')
      } else {
            $navbar.classList.remove('navbar--active')
      }
})