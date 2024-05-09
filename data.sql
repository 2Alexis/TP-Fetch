CREATE DATABASE sneakers_db;

USE sneakers_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    reduction INT NOT NULL,
    release_date DATE NOT NULL,
    description TEXT,
    quantity INT NOT NULL,
    sex ENUM('Homme', 'Femme', 'Mixte') NOT NULL,
    sizes VARCHAR(255),
    colors VARCHAR(255),
    image_urls TEXT,
PRIMARY KEY (id)
);


INSERT INTO products (name, price, reduction, release_date, description, quantity, sex, colors, sizes, image_urls) VALUES
("Air Jordan 1 Retro High University Blue", 470.00, 0, "2021-03-06", "La Air Jordan 1 Retro High University Blue est un classique de la sneaker culture. Elle est dotée d'une empeigne en cuir de qualité supérieure avec des accents de bleu universitaire, de blanc et de noir.", 50, 'Homme', 'Bleu, Blanc, Noir', 'EU 40, EU 41, EU 42, EU 43, EU 44', 'img1.jpg, img2.jpg, img3.jpg'),
("Air Force 1 Low White Supreme", 190.00, 14, "2020-03-05", "La Air Force 1 Low White Supreme est une version emblématique de la sneaker classique d'Nike. Elle est ornée d'un logo Supreme sur le talon et d'une tige en cuir blanc.", 30, 'Homme', 'Blanc', 'EU 39, EU 40, EU 41, EU 42', 'img4.jpg, img5.jpg'),
("Air Jordan 4 University Blue", 330.00, 0, "2021-04-28", "La Air Jordan 4 University Blue est une sneaker rétro avec des accents de bleu universitaire et de blanc. Elle offre un confort exceptionnel et un style distinctif.", 40, 'Homme', 'Bleu, Blanc', 'EU 41, EU 42, EU 43', 'img6.jpg, img7.jpg'),
("Air max Plus Triple Black", 170.00, 6, "2021-06-01", "La Air Max Plus Triple Black est une sneaker au design futuriste avec une unité Air Max confortable et une empeigne noire monochrome. Elle offre un confort et un style inégalés.", 60, 'Homme', 'Noir', 'EU 40, EU 41, EU 42, EU 43, EU 44, EU 45', 'img8.jpg, img9.jpg'),
("Nike Air More Uptempo Peace & Love", 160.00, 10, "2021-02-15", "La Nike Air More Uptempo Peace & Love est une sneaker audacieuse avec un design imprimé coloré. Elle offre un amorti Air-Sole pour un confort toute la journée.", 20, 'Mixte', 'Multicolore', 'EU 37, EU 38, EU 39, EU 40', 'img10.jpg, img11.jpg'),
("Dunk Low Disrupt Sea Glass White", 210.00, 0, "2021-08-23", "La Dunk Low Disrupt Sea Glass White est une sneaker à la mode avec une silhouette inspirée du basketball. Elle présente une combinaison de couleurs claires et une semelle extérieure épaisse pour un style unique.", 35, 'Femme', 'Blanc, Vert', 'EU 36, EU 37, EU 38, EU 39', 'img12.jpg, img13.jpg'),
("SB Dunk Low Pro Fog", 240.00, 15, "2021-12-13", "La SB Dunk Low Pro Fog est une sneaker de skateboard avec une tige en daim de qualité supérieure et une semelle extérieure en caoutchouc adhérente. Elle offre un style et une performance exceptionnels.", 25, 'Mixte', 'Gris', 'EU 39, EU 40, EU 41, EU 42, EU 43', 'img14.jpg, img15.jpg'),
("Air Force 1 Low Metallic Chrome", 180.00, 0, "2021-02-15", "La Air Force 1 Low Metallic Chrome est une sneaker avec une finition métallique audacieuse. Elle offre un confort et un style intemporel, parfait pour toutes les occasions.", 40, 'Homme', 'Argent', 'EU 41, EU 42, EU 43, EU 44', 'img16.jpg, img17.jpg'),
("Air Force 1 Low 07 LV8 Lakers", 180.00, 5, "2021-10-08", "La Air Force 1 Low 07 LV8 Lakers est une sneaker avec des accents de couleurs vives inspirés des Los Angeles Lakers. Elle offre un amorti Air-Sole et une traction durable pour un confort et une performance exceptionnels.", 30, 'Homme', 'Jaune, Violet', 'EU 42, EU 43, EU 44, EU 45', 'img18.jpg, img19.jpg'),
("Air Jordan 4 Retro Kaws Grey", 2380.00, 12, "2017-03-31", "La Air Jordan 4 Retro Kaws Grey est une sneaker de collection avec un design collaboratif unique. Elle présente une empeigne en suède de qualité supérieure avec des détails artistiques distinctifs.", 10, 'Mixte', 'Gris', 'EU 41, EU 42', 'img20.jpg, img21.jpg');