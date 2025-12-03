// - Créer une variable pour le nom de la boutique (shopName)
const shopName = "Ikea";
// - Créer une variable pour la ville (city)
const city = "Venissieux";
// - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
let isOpen = true;
// - Créer une variable pour le nombre de produits (productCount)
let productCount = 21;
// - Créer une variable pour le slogan (slogan)
let slogan ="Let’s Make Your Home Special";
// - Afficher un message de bienvenue dans la console
console.log("Welcome");
// - Afficher le slogan dans la console
console.log(slogan);
// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
console.log();



// Nouveauté Exo 2

// - Partir du slogan déjà créé à l’exercice 1
// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})

// - Calculer la longueur du slogan

// - Créer une version en majuscules du slogan

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console

let welcomeMessage = slogan + "à" + city;
let welcomeMessage2 = `${slogan} à ${city}`;
let tailleslogan = welcomeMessage.length;
console.log(tailleslogan);
let uppermessage = welcomeMessage.toUpperCase();
console.log(uppermessage);
let welcomeMessagerreplace = welcomeMessage.replace("Venissieux", "Lyon");
console.log(welcomeMessagerreplace);


// Nouveauté Exo 3


// - Créer une variable contenant un prix HT d’exemple
let horsTaxe = 20;
// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
const tauxTva = 0.1;
// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
//  TTC = HT + (HT × TVA)
let toutesTaxesComprises = horsTaxe + (horsTaxe * tauxTva);

// - Afficher le prix HT et le prix TTC dans la console
console.log("Prix HT exemple:", horsTaxe);
console.log("Prix TTC exmple:", toutesTaxesComprises);

// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)
let salesCount = 0;
salesCount++;
salesCount++;

// - Simuler une nouvelle vente en augmentant ce compteur
//   (indice : utiliser l’opérateur pour ajouter 1)
console.log("Nombre de ventes :", salesCount);

// - Afficher la nouvelle valeur du compteur dans la console

