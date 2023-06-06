let button=document.querySelector('.about .box .btn');
  button.addEventListener("click",()=>{
   const span=document.querySelector('.about .box .btn .res');
   button.style.paddingRight='10px';
   span.style.visibility="hidden";
   setTimeout(()=>{
    span.style.transition=".3s ease-in-out";
    button.style.paddingRight="0px";
   },3000);
  })
document.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  const navbar = document.querySelector('.header .navbar');
  const menuButton = document.querySelector('.header .menu');

  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
  
  document.onscroll = () => {
    navbar.classList.remove('show');
  
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };