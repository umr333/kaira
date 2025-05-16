document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });

  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.style.top = scrollTop > lastScrollTop ? "-80px" : "0";
    lastScrollTop = scrollTop;
  });