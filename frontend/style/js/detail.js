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

                const addToFavoritesButton = document.getElementById('add-to-favorites');
                const removeFromFavoritesButton = document.getElementById('remove-from-favorites');

                addToFavoritesButton.style.display = 'block';
                removeFromFavoritesButton.style.display = 'block';

                addToFavoritesButton.addEventListener('click', () => {
                    
                    addToFavorites(sneaker);
                });

                removeFromFavoritesButton.addEventListener('click', () => {
                   
                    removeFromFavorites(sneaker);
                });
                      
            })
            .catch(error => {
                console.log("Erreur : " + error);
            });
    } else {
        console.error('ID de sneaker non spécifié dans l\'URL');
    }

    var backButton = document.getElementById("btn-back");
    backButton.addEventListener("click", function() {
        history.back(); 
    });

    function addToFavorites(sneaker) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
     
        const isAlreadyFavorite = favorites.some(item => item.id === sneaker.id);
        if (!isAlreadyFavorite) {
            favorites.push(sneaker);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('La sneaker a été ajoutée aux favoris.');
        } else {
            alert('Cette sneaker est déjà dans vos favoris.');
        }
    }
    

   
    function removeFromFavorites(sneaker) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(item => item.id !== sneaker.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('La sneaker a été retirée des favoris.');
    }

});
