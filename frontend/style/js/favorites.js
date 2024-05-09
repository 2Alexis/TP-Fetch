document.addEventListener("DOMContentLoaded", () => {
    const favoritesList = document.getElementById('favorites-list');

  
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesList.innerHTML = "<p>Aucun favori trouvé.</p>";
    } else {
        favorites.forEach((sneaker, index) => {
            const sneakerElement = document.createElement('div');
            sneakerElement.classList.add('sneaker-item');
            sneakerElement.innerHTML = `
                <h3>${sneaker.name}</h3>
                <div class="space">
                    <div class="sneaker-info">
                        <p>Prix: ${sneaker.price}$</p>
                        <p>Couleurs: ${sneaker.colors}</p>
                        <p>Réduction: ${sneaker.reduction}%</p>
                        <p>Disponible: ${sneaker.available ? 'Oui' : 'Non'}</p>
                    </div>
                    <div class="sneaker-btn">
                        <button class="remove-from-favorites" data-index="${index}"><img src="style/img/coeur-brise.png"></button>
                    </div>
                </div>
                <img src="${sneaker.img}" alt="Sneaker">
            `;
            favoritesList.appendChild(sneakerElement);

           
            const removeButton = sneakerElement.querySelector('.remove-from-favorites');
            removeButton.addEventListener('click', () => {
                favorites.splice(index, 1); 
                localStorage.setItem('favorites', JSON.stringify(favorites)); 
                sneakerElement.remove(); 
            });
        });
    }


    const clearFavoritesButton = document.getElementById('clear-favorites');
    clearFavoritesButton.addEventListener('click', () => {
        localStorage.removeItem('favorites');
        favoritesList.innerHTML = "<p>Les favoris ont été effacés.</p>";
    });
});
