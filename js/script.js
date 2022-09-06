$("form").submit(function(e){
    e.preventDefault();
    alert("Nos pondremos en contacto con usted pronto!");
    location.reload();
});

$("#camNegra").on('click', function(event) {
    $(".fotoCami").attr("src","img/Tshirt2.png");
    $(".camiseta > div > .productoNombre").css('color', '#FB088C');
    $(".camiseta > div > .descripcion").css('color', '#FB088C');
});

$("#camRosa").on('click', function(event) {
    $(".fotoCami").attr("src","img/Tshirt1.png");
    $(".camiseta > div > .productoNombre").css('color', '#212222');
    $(".camiseta > div > .descripcion").css('color', '#212222');
});

$("#botRosa").on('click', function(event) {
    $(".fotoBottle").attr("src","img/Bottle1.png");
    $(".botella > div > .productoNombre").css('color', '#212222');
    $(".botella > div > .descripcion").css('color', '#212222');
});

$("#botNegra").on('click', function(event) {
    $(".fotoBottle").attr("src","img/Bottle2.png");
    $(".botella > div > .productoNombre").css('color', '#FB088C');
    $(".botella > div > .descripcion").css('color', '#FB088C');
});


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }

  $(".menu > li > a").on('click', function(event) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  });
}

hamburger.addEventListener("click", toggleMenu);