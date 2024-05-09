document.addEventListener("DOMContentLoaded", () => {
    getSneakers(); // Appel de la fonction getSneakers dès que la page est chargée
});

const url = "http://localhost:5500/sneakers";

function getSneakers() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const sneakersContainer = document.getElementById('sneakers');
            data.forEach(sneaker => {
                const sneakerDiv = document.createElement('div');
                sneakerDiv.classList.add('sneaker-item');

                const nameElement = document.createElement('h3');
                nameElement.textContent = sneaker.name;

                const priceElement = document.createElement('p');
                priceElement.textContent = `Prix: ${sneaker.price}$`;

                const imgElement = document.createElement('img');
                imgElement.src = sneaker.img;
                imgElement.alt = sneaker.name;

                sneakerDiv.appendChild(nameElement);
                sneakerDiv.appendChild(priceElement);
                sneakerDiv.appendChild(imgElement);

                // Ajout de l'écouteur d'événement sur le div de la chaussure
                sneakerDiv.addEventListener("click", () => {
                    window.location.href = `detail.html?id=${sneaker.id}`;
                });

                sneakersContainer.appendChild(sneakerDiv);
            });
        })
        .catch(error => {
            console.log("Erreur : " + error);
        });
}
