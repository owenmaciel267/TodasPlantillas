const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 10000000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  
});



const hambur = document.querySelector(".hambur")
const menu = document.querySelector(".menu__links")

hambur.addEventListener("click", () => {
  menu.classList.toggle("active")
})

const form = document.querySelector('.formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  if (nombreInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Por favor, completa todos los campos');
  } else {
    form.submit(); 
  }
});



