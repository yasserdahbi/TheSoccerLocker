window.addEventListener('load', function() {
    var images = document.getElementsByClassName('image-dynamique');
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var src = image.src;
      image.style.backgroundImage = 'url("' + src + '")';
      image.style.backgroundSize = 'cover';
      image.style.backgroundPosition = 'center';
      image.src = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="' + image.width + '" height="' + image.height + '"></svg>';
    }
  });



  var images = ["images/accueil1.jpg", "images/accueil2.jpg", "images/accueil3.jpg"];
  var currentIndex = 0;
  
  function transitionImages() {
    currentIndex = (currentIndex + 1) % images.length;
    var currentImage = document.getElementById("currentImage");
    currentImage.style.transform = "translateX(100%)"; /* Déplacez l'image de 100% vers la droite */
    setTimeout(function() {
      currentImage.src = images[currentIndex];
      currentImage.style.transform = "translateX(0)"; /* Réinitialisez la position à 0 pour l'animation */
    }, 300); // Temps de transition en millisecondes
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setInterval(transitionImages, 5000); // Temps d'affichage de chaque image en millisecondes
  });