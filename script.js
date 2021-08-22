// // index.html JS
// document.getElementById('currency-select').addEventListener('mousemove', function(){
//   console.log('მომხმარებელი ირჩევს ვალიუტას');
// });
// document.getElementById('bagRight').addEventListener('click', function(){
//   alert(' ბოდიშს გიხდით შეფერხებისათვის, აღნიშნული გვერდი დროებით მიუწვდომელია')
// });
// document.getElementById('bagLeft').addEventListener('click', function(){
  
//   alert(' ბოდიშს გიხდით შეფერხებისათვის, აღნიშნული გვერდი დროებით მიუწვდომელია')
// });
// document.getElementById('footer-Email').addEventListener('keydown', function(){
//   console.log('მომხმარებელს შეჰყავს საკუთარი იმელის მისამართი');
// });



// burger-bar
let navbarLinks = document.getElementById('navbarLinks');
let toggleButton = document.getElementById ('toggleButton');

toggleButton.addEventListener('click', function (){
    navbarLinks.classList.toggle('active');
});

// Slide show script
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}