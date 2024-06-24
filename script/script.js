let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carouselPics");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}

let slideIndexx = 1;
verSlides(slideIndexx);

function plusSlides(num) {
  verSlides(slideIndexx += num);
}

function currentSlide(num) {
  verSlides(slideIndexx = num);
}

function verSlides(num) {
  let a;
  let slidess = document.getElementsByClassName("carouselPics");
  if (num > slidess.length) {slideIndexx = 1}
  if (num < 1) {slideIndexx = slidess.length}
  for (a = 0; a < slidess.length; a++) {
    slidess[a].style.display = "none";
  }

  slidess[slideIndexx-1].style.display = "block";
}

const hamburguerMenu = document.querySelector('.hamburguerMenu');
const offScreenMenu = document.querySelector(".off-screen-menu");
const closeIcon = document.querySelector(".close-icon");


hamburguerMenu.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
    hamburguerMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
});

const menuItems = document.querySelectorAll('.off-screen-menu ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburguerMenu.classList.remove("active");
            offScreenMenu.classList.remove("active");
        });
});