document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sneakerId = urlParams.get('id');
 

    if (sneakerId) {
        fetch(`http://localhost:5500/sneakers/${sneakerId}`)
            .then(response => response.json())
            .then(data => {
                const sneaker = data.sneaker;
                document.getElementById('sneaker-name').textContent = sneaker.name;
                document.getElementById('sneaker-price').textContent = `Prix: ${sneaker.price}$`;
                document.getElementById('sneaker-colors').textContent = `Couleurs: ${sneaker.colors}`;
                document.getElementById('sneaker-reduction').textContent = `Réduction: ${sneaker.reduction}%`;
                document.getElementById('sneaker-available').textContent = `Disponible: ${sneaker.available ? 'Oui' : 'Non'}`;
     
                document.getElementById('sneaker-img').src = sneaker.img;
            })
            .catch(error => {
                console.log("Erreur : " + error);
            });
    } else {
        console.error('ID de sneaker non spécifié dans l\'URL');
    }

    var backButton = document.getElementById("btn-back");
    backButton.addEventListener("click", function() {
        history.back(); // Revenir à la page précédente
    });

});
