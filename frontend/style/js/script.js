const url = "http://localhost:5500/sneakers";
const btn = document.querySelector(".btn");
const sneakerList = document.getElementById('sneakerList');

btn.addEventListener("click", getSneakers);

function getSneakers() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Réinitialiser la liste
            sneakerList.innerHTML = "";
            // Parcourir les données et ajouter chaque sneaker à la liste
            data.forEach(sneaker => {
                const li = document.createElement('li');
                // Créer un élément de liste contenant le nom et l'image de la sneaker
                li.innerHTML = `
                    <strong>${sneaker.name}</strong><br>
                    <span>Prix: ${sneaker.price}$</span><br>
                    <img src="${sneaker.img}" alt="${sneaker.name}"><br>
               `;

                li.addEventListener("click", () => {
                    window.location.href = `detail.html?id=${sneaker.id}`;
                });

                sneakerList.appendChild(li);

                // Ajouter un événement 'click' à chaque élément de la liste pour rediriger vers la page de détails de la sneaker
               
            });
        })
        .catch(error => {
            console.log("Erreur : " + error);
        });
}
