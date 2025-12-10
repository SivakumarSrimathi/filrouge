/*************************************************
 * EXERCICE 6 - Tableaux simples & foreach
 * Notions : tableaux simples, foreach, index,
 *           réutilisation des fonctions de prix
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
  console.log("La boutique est ouverte.");
} else {
  console.log("La boutique est fermée.");
}

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Strings & messages --- */

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* --- Correction Exercice 4 - Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

console.log("Test TTC :", formatPrice(calculatePriceTTC(10)));

/* --- Correction Exercice 5 - Produit vedette (DOM, sans objets) --- */

let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "images/tshirt-code-chill.jpg";

const productList = document.getElementById("product-list");

function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;

  const title = document.createElement("h3");
  title.textContent = featuredProductName;

  const priceElt = document.createElement("p");
  priceElt.textContent = formatPrice(calculatePriceTTC(featuredProductPriceHT));

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

if (productList) {
  productList.innerHTML = "";
  productList.appendChild(createFeaturedProductCard());
}

/* --- Nouveautés Exercice 6 - foreach sur tableaux simples --- */

// 1) Deux tableaux synchronisés
const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits :", productNames.length);

// 2) Fonction d'affichage console
function displayProductsInConsole() {
  productNames.forEach((name, index) => {
    const priceHT = productPricesHT[index];
    const priceTTC = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);

    console.log(`${index + 1} - ${name} — ${formattedPrice} TTC`);
  });
}

displayProductsInConsole();

console.log("Exercice 6 chargé ✅");



// Nouveauté Exo7


// - Créer un tableau contenant plusieurs produits
//   (chaque produit regroupe ses informations dans une même structure)
//   (indice : utiliser une syntaxe qui permet de stocker plusieurs propriétés ensemble)

// - Chaque produit doit au minimum contenir :
//     • un identifiant
//     • un nom
//     • un prix HT
//     • une description
//     • une image (URL)

const mesVoitures = [
    
    {
        identifiant: 1,
        nom: "BMW M8",
        prixHT: 182395,
        description: "La BMW M8 est une sportive de luxe haut de gamme disponible en versions coupé, cabriolet et Gran Coupé 4 portes, équipée d’un moteur V8 biturbo de 4,4 litres développant 625 chevaux.",
        image: "https://images.pexels.com/photos/35104125/pexels-photo-35104125.jpeg"
    },
    {
        identifiant: 2,
        nom: "Mercedes-AMG Classe C Berline",
        prixHT: 81600,
        description: "Découvrez les lignes de la Mercedes-AMG Classe C Berline, où l’appartenance à la famille Mercedes-AMG se fait sentir, de sa calandre dotée de baguettes verticales à sa nouvelle jupe arrière. Autant d’éléments faisant de la Mercedes-AMG C Berline une digne représentante de la famille Mercedes-AMG.",
        image: "https://images.pexels.com/photos/10054575/pexels-photo-10054575.jpeg"
    },
    {
        identifiant: 3,
        nom: "Ford Mustang Shelby GT500",
        prixHT: 144900,
        description: "La Ford Mustang Shelby GT500 est une voiture de sport puissante, équipée d'un moteur V8 suralimenté de 5,2 litres développant 760 chevaux à 7 300 tr/min et un couple de 847 Nm à 5 000 tr/min.",
        image: "https://images.pexels.com/photos/11913374/pexels-photo-11913374.jpeg"
    }
    
    
]


// - Récupérer la zone du DOM où tous les produits doivent être affichés

// - Adapter ou créer une fonction qui :
//     • reçoit un produit en paramètre
//     • crée un conteneur pour la carte
//     • crée les éléments nécessaires (image, nom, prix TTC, description)
//     • utilise les propriétés du produit pour remplir ces éléments
//     • réutilise les fonctions de calcul et de formatage de prix
//     • renvoie la carte complète

function createProductCard(voiture) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = voiture.image;

  const title = document.createElement("h3");
  title.textContent = voiture.nom;

  const prixHT = document.createElement("p");
  prixHT.textContent = formatPrice(calculatePriceTTC(voiture.prixHT));

  const desc = document.createElement("p");
  desc.textContent = voiture.description;

  productList.appendChild(article);
  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(prixHT);
  article.appendChild(desc);

  return article;
  
  }
  
// - Créer une fonction qui :
//     • vide le contenu de la zone d’affichage des produits
//     • parcourt le tableau de produits
//     • pour chaque produit :
//         - crée une carte à partir de ce produit
//         - ajoute cette carte dans la zone d’affichage
function displayProductsInPage() {
    productList.innerHTML = "";
    // productList.appendChild(createProductCard());
    mesVoitures.forEach((name) => {
    createProductCard(name);
    // mesVoitures.appendChild(createProductCard)
 });
}
displayProductsInPage();




 

// - Appeler cette fonction pour afficher tous les produits dans la page




