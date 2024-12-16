window.addEventListener('DOMContentLoaded', function() {
    var panierData = JSON.parse(localStorage.getItem("panier"));
    var totalCell = document.getElementById("totalCell");
    var total = 0;
  
    if (panierData && panierData.length > 0) {
      var panierTable = document.getElementById("panierTable");
  
      panierData.forEach(function (produit) {
        var nomProduit = produit[0];
        var prixProduit = parseFloat(produit[1]);
        var imageSource = produit[2];
        var quantite = produit[3];
  
        var row = panierTable.insertRow();
        var cellNom = row.insertCell(0);
        var cellPrix = row.insertCell(1);
        var cellQuantite = row.insertCell(2);
        var cellImage = row.insertCell(3);
        var cellSupprimer = row.insertCell(4);
  
        cellNom.innerText = nomProduit;
        cellPrix.innerText = prixProduit.toFixed(2) + "€";
        cellQuantite.innerText = quantite;
        cellImage.innerHTML = "<img src='" + imageSource + "' alt='Image du produit' class='panier-image'>";
  
        var btnSupprimer = document.createElement("button");
        btnSupprimer.innerText = "Supprimer";
        btnSupprimer.classList.add("supprimer-produit");
  
        btnSupprimer.addEventListener("click", function() {
          supprimerProduit(produit);
        });
  
        cellSupprimer.appendChild(btnSupprimer);
  
        total += prixProduit * quantite;
      });
  
      totalCell.innerText = total.toFixed(2);
      localStorage.setItem("total", total.toFixed(2)); // Stocker la valeur de total dans le localStorage
    }
  });
  
  // Reste du code inchangé
  
  
        
  
  var paiementButton = document.getElementById("paiementButton");
  paiementButton.classList.add("bouton-paiement");
  paiementButton.addEventListener("click", function() {
    // Action à effectuer lors du clic sur le bouton de paiement
    // Par exemple, rediriger l'utilisateur vers une page de paiement
    alert("Effectuer le paiement !");
  });
  
  function supprimerProduit(produit) {
    var panierData = JSON.parse(localStorage.getItem("panier"));
  
    // Retirer le produit du panier
    var index = panierData.findIndex(function (p) {
      return p[0] === produit[0] && p[1] === produit[1] && p[2] === produit[2];
    });
  
    if (index !== -1) {
      panierData.splice(index, 1);
  
      // Mettre à jour le panier dans le stockage local
      localStorage.setItem("panier", JSON.stringify(panierData));
  
      // Recharger la page pour mettre à jour l'affichage
      location.reload();
    }
  }
  function getTotalFromJavaScript() {
    // Logique pour récupérer le total depuis le fichier JavaScript
    // Par exemple, si vous avez une variable `total` définie dans le fichier JavaScript
    return total;
  }
  