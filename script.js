var panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier() {
  var imageElement = document.getElementById("mon_image");
  var imageSource = imageElement.src;
  var nomProduit = document.getElementById("product").innerText;
  var prixProduit = document.getElementById("prix").innerText+"€";

  var produitExist = panier.find(function (p) {
    return p[0] === nomProduit && p[1] === prixProduit && p[2] === imageSource;
  });

  if (produitExist) {
    produitExist[3]++;
  } else {
    panier.push([nomProduit, prixProduit, imageSource, 1]);
  }
  
  localStorage.setItem("panier", JSON.stringify(panier));
  
  alert("Le produit a été ajouté au panier !");
}

  