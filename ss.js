document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const navbar = document.getElementById('navbar');

    menuButton.addEventListener('click', () => {
      navbar.classList.add('open');
      menuButton.style.visibility='hidden'
    });

    closeButton.addEventListener('click', () => {
      navbar.classList.remove('open');
      menuButton.style.visibility='visible'

    });
  });
// function show(){
//     document.getElementById('navbar').style.visibility='visible'
//     document.getElementById('menuButton').style.display='none'
// }
// function hide(){
//     document.getElementById('navbar').style.visibility='hidden'
//     document.getElementById('menuButton').style.display='block'



// }
