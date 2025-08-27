# 🎬 MovieScope - Découvrez l'Univers du Cinéma

![React](https://img.shields.io/badge/React-18.2.0-blue)
![React Router](https://img.shields.io/badge/React_Router-6.8.0-green)
![API](https://img.shields.io/badge/API-TMDB-yellow)
![Responsive](https://img.shields.io/badge/Design-Responsive-ff69b4)

**MovieScope** est une application React moderne qui vous permet de découvrir des films populaires, de filtrer par genre, de consulter les détails complets des films et de naviguer facilement grâce à React Router. Une expérience cinématographique immersive à portée de clic.

**Lien du projet :** [https://github.com/basmahaimer/moviescope](https://github.com/basmahaimer/moviescope)

## ✨ Fonctionnalités Avancées

- 🎭 **Filtrage intelligent** - Filtrez les films par genres avec des indicateurs colorés dynamiques
- 🔍 **Recherche intuitive** - Trouvez rapidement vos films préférés par titre
- 🎬 **Hero dynamique** - Aperçu immersif des films au survol
- 📱 **Design responsive** - Expérience optimisée sur mobile, tablette et desktop
- ⚡ **Performances optimisées** - Chargement rapide et navigation fluide
- 🎨 **Animations subtiles** - Interactions utilisateur élégantes et modernes
- 🌙 **Mode sombre** - Option de thème sombre pour le confort visuel

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn
- Clé API TMDB (gratuite)

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/basmahaimer/moviescope.git
   cd moviescope
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l'environnement**
   Créez un fichier `.env` à la racine du projet et ajoutez votre clé API TMDB:
   ```
   REACT_APP_TMDB_API_KEY=votre_cle_api_ici
   ```

4. **Démarrer l'application**
   ```bash
   npm start
   ```
   L'application sera accessible à l'adresse `http://localhost:3000`

## 🏗️ Architecture du Projet

```
moviescope/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/           # Navigation et recherche
│   │   ├── Hero/             # Bannière principale dynamique
│   │   ├── MovieCard/        # Carte de film
│   │   ├── GenreFilter/      # Filtrage par genres
│   │   ├── Rating/           # Composant d'évaluation
│   │   └── Layout/           # Structure de la page
│   ├── pages/
│   │   ├── Home/             # Page d'accueil avec liste de films
│   │   ├── MovieDetails/     # Détails complets d'un film
│   │   ├── About/            # Page à propos
│   │   └── NotFound/         # Page 404
│   ├── hooks/
│   │   ├── useMovies/        # Hook personnalisé pour les films
│   │   ├── useGenres/        # Hook pour les genres
│   │   └── useLocalStorage/  # Persistance des préférences
│   ├── services/
│   │   └── api.js            # Service API TMDB
│   ├── contexts/
│   │   └── ThemeContext.js   # Gestion du thème (sombre/clair)
│   ├── utils/
│   │   ├── helpers.js        # Fonctions utilitaires
│   │   └── constants.js      # Constantes de l'application
│   ├── styles/
│   │   ├── globals.css       # Styles globaux
│   │   └── variables.css     Variables CSS personnalisées
│   ├── App.js
│   └── index.js
├── .env.example
├── package.json
└── README.md
```

## 🎯 API Utilisée

MovieScope utilise l'API TMDB (The Movie Database) :
- **Endpoint principal** : `https://api.themoviedb.org/3/`
- **Endpoints utilisés** : 
  - `/movie/popular` - Films populaires
  - `/genre/movie/list` - Liste des genres
  - `/search/movie` - Recherche de films
  - `/movie/{id}` - Détails d'un film spécifique
- **Images** : `https://image.tmdb.org/t/p/`

## 🛠️ Stack Technique

### Frontend
- **React 18** - Librairie UI avec hooks modernes
- **React Router v6** - Navigation avec gestion des paramètres
- **CSS Modules** - Styling modulaire et encapsulé
- **Context API** - Gestion d'état pour le thème et les préférences

### API et Data
- **TMDB API** - Source de données cinématographiques
- **Axios** - Client HTTP pour les requêtes API
- **Local Storage** - Persistance des préférences utilisateur

### Outils de Développement
- **React DevTools** - Debugging des composants
- **ESLint & Prettier** - Qualité et formatage du code

## 🎨 Expérience Utilisateur

- **Interface immersive** - Design inspiré de l'univers cinématographique
- **Navigation intuitive** - Parcours utilisateur fluide et logique
- **Feedback visuel** - États de chargement, erreurs et vides bien gérés
- **Accessibilité** - Support partiel des standards ARIA et navigation au clavier
- **Performance** - Chargement paginé et images optimisées

## 📱 Fonctionnalités Détaillées

### Page d'Accueil
- Affichage des films populaires avec pagination
- Filtrage par genres avec badges colorés
- Barre de recherche en temps réel
- Hero dynamique avec changement au survol

### Page Détails Film
- Informations complètes (synopsis, casting, bande-annonce)
- Note moyenne et nombre de votes
- Date de sortie et durée
- Recommendations de films similaires

### Page À Propos
- Présentation de l'application
- Technologies utilisées
- Informations sur le développeur

## 🚦 Scripts Disponibles

- `npm start` - Lance le serveur de développement
- `npm test` - Exécute les tests unitaires
- `npm run build` - Crée la version de production
- `npm run lint` - Vérifie la qualité du code

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez votre branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez que vous avez une clé API TMDB valide
2. Consultez la documentation de l'API TMDB
3. Vérifiez les issues existantes sur GitHub
4. Créez une nouvelle issue avec les détails du problème

## 🌟 Avenir du Projet

Fonctionnalités envisagées pour les futures versions :
- Système de favoris et listes personnalisées
- Authentification utilisateur
- Commentaires et notations personnelles
- Mode visionnage (films à voir)
- Intégration avec des services de streaming

## 📞 Contact

**Développeuse** - Basma Haimer - [@basmahaimer](https://github.com/basmahaimer)

**Lien du projet** - [https://github.com/basmahaimer/moviescope](https://github.com/basmahaimer/moviescope)

**Portfolio** - [À venir]

---

**MovieScope** - Votre portail vers l'univers du cinéma! 🎥🍿
