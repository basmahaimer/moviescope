# 🎬 MovieScope

MovieScope est une application React qui permet de **découvrir des films populaires**, de **filtrer par genre**, de **consulter les détails complets** d’un film et de naviguer facilement entre les pages grâce à **React Router**.

---

## **Table des matières**
- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Usage](#usage)
- [Structure du projet](#structure-du-projet)
- [Licence](#licence)

---

## **Aperçu**
- Page d’accueil : affiche la liste des films avec **affiches**, **titres**, **notes** et **genres colorés**.  
- Page de détails : affiche toutes les informations d’un film sélectionné.  
- Page “À propos” : informations sur l’application et ses objectifs.  
- Interface responsive pour **mobile, tablette et desktop**.  
- Animations légères sur les cartes et Hero pour une meilleure expérience utilisateur.  

---

## **Fonctionnalités**
- Filtrage par genres avec **couleurs dynamiques**.  
- Recherche de films par titre.  
- Hero dynamique qui change au **survol des films** ou affiche le **premier film par défaut** d’une catégorie.  
- Navigation fluide entre pages avec **React Router** (`/`, `/movie/:id`, `/about`).  
- Affichage conditionnel si aucun film ne correspond à la recherche.  
- Mise en forme avec **CSS classique**, **CSS Modules** et **CSS-in-JS**.  

---

## **Technologies utilisées**
- **React**  
- **React Router DOM**  
- **JavaScript (ES6+)**  
- **CSS / CSS Modules / CSS-in-JS**  
- **API TMDB** pour récupérer les films  

---

## **Installation**
1. Clone le projet :  
```bash
git clone https://github.com/basmahaimer/moviescope.git

1.Accède au dossier :

cd moviescope


2.Installe les dépendances :

npm install


3.Lance l’application :

npm start


Ouvre http://localhost:3000 dans ton navigateur.

## **Usage**

Sur la page d’accueil, clique sur une catégorie pour filtrer les films.

Survole un film pour voir ses détails dans le Hero.

Clique sur un film pour accéder à sa page de détails.

Navigue vers À propos depuis le menu pour découvrir l’application.

Structure du projet

moviescope/
├── public/
│   ├── index.js
│   └── index.css
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   └── Nav.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── MovieDetails.js
│   │   └── About.js
│   ├── styles/
│   │   ├── global.css
│   │   └── ...
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock / package-lock.json
