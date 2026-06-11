import { Project, SkillCategory, Experience } from "./types";

export const OMRANE_PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "ybook (Online Library)",
    description: "Une plateforme complète de gestion et de consultation de bibliothèque en ligne avec un catalogue numérique dynamique.",
    category: "web",
    tags: ["GoLang", "HTML/CSS", "JavaScript", "SQL", "Git"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/ybook",
    liveDemo: "",
    details: "Développement complet de ybook, une application web complète permettant d'explorer un catalogue de livres numériques, de rechercher des ouvrages par catégories et de gérer ses bibliothèques de lectures préférées. L'application intègre une architecture de base de données SQL.",
    feats: [
      "Catalogue dynamique responsive avec indexation rapide",
      "Recherche intelligente de livres par mots-clés et filtres par genre",
      "Espace utilisateur intuitif pour gérer son historique de lecture",
      "Structure de base de données SQL robuste et optimisée pour l'accès aux données des livres"
    ]
  },
  {
    id: "project-2",
    title: "Louis Vuitton Product Page Replica",
    description: "Une réplique parfaite d’une page produit de luxe Louis Vuitton avec des micro-interactions haut de gamme.",
    category: "web",
    tags: ["React", "Tailwind CSS", "Framer Motion", "UX Elite"],
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/louis-vuitton-reproduction",
    liveDemo: "",
    details: "Démonstration d'une interface de commerce électronique ultra-premium reproduisant l'expérience d'achat haut de gamme de la marque Louis Vuitton. Porté sur la perfection typographique et l'esthétique épurée.",
    feats: [
      "Carousel d'images fluide hautement réactif",
      "Sélecteurs d'options de personnalisation de luxe",
      "Design minimaliste et animations soignées"
    ]
  },
  {
    id: "project-3",
    title: "Music Forum Community",
    description: "Un forum de discussion interactif et moderne dédié à l'échange d’avis musicaux, de critiques d’albums et de partages de playlists.",
    category: "web",
    tags: ["HTML/CSS", "JavaScript", "SQL", "Git", "Postman"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/livrables_forum_teamXXL",
    liveDemo: "",
    details: "Création d'un espace communautaire dynamique (Music Forum) où les passionnés de musique peuvent créer des sujets de discussion, réagir aux publications des membres, et s'échanger des morceaux. L'API a été rigoureusement testée avec Postman pour garantir sa robustesse.",
    feats: [
      "Création et catégorisation de salons de discussion thématiques",
      "Système d'authentification utilisateur sécurisé",
      "Contrôle de modération et reporting des commentaires",
      "API REST documentée et testée à l'aide de Postman"
    ]
  },
  {
    id: "project-4",
    title: "Boutique de Tennis JS",
    description: "Une boutique de commerce électronique interactive et fluide dédiée à l'équipement et aux accessoires de tennis.",
    category: "web",
    tags: ["JavaScript", "HTML/CSS", "Responsive Design", "Git"],
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/livrables-boutique-js",
    liveDemo: "",
    details: "Conception d'une boutique vitrine moderne en JavaScript natif. Elle présente des gammes de raquettes professionnelles, des balles et des accessoires de tennis dans un parcours utilisateur épuré, avec des fiches produits riches.",
    feats: [
      "Panier virtuel dynamique avec calcul interactif des totaux en direct",
      "Filtrage multicritère des produits par marque et tranche de prix",
      "Interface épurée, ergonomique et pixel-perfect respectant le thème du tennis",
      "Persistance du panier d'achat via la gestion de session locale"
    ]
  },
  {
    id: "project-5",
    title: "Groupie Tracker (Football & Events)",
    description: "Un tableau de bord interactif de tracking et de visualisation d'événements, de ligues de football ou de concerts d'artistes.",
    category: "web",
    tags: ["GoLang", "APIs JSON", "HTML/CSS", "Git"],
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/Groupie_Tracker",
    liveDemo: "",
    details: "Projet complet sous le langage Go. Il consomme des APIs externes pour charger, manipuler et rendre de manière visuelle et interactive des données de suivi d'événements sportifs et culturels.",
    feats: [
      "Serveur Go robuste avec intégration de templates HTML dynamiques",
      "Consommation performante API JSON avec structure de données Go et parsing en cours",
      "Filtre de recherche avancée croisant dates et pays",
      "Cartographie interactive des localisations d'événements"
    ]
  },
  {
    id: "project-6",
    title: "Puissance 4 Interactif",
    description: "Le jeu de société classique Puissance 4 revisité avec une interface utilisateur de haute fidélité et des animations de chute de jetons.",
    category: "web",
    tags: ["JavaScript", "HTML/CSS", "Design Interactif", "Git"],
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/livrables_puissance4_groupe23",
    liveDemo: "",
    details: "Implémentation fluide du célèbre jeu de société dans le navigateur. Une attention particulière a été accordée à la simplicité d'utilisation et à la détection optimale des combinaisons gagnantes en temps réel.",
    feats: [
      "Algorithme performant de détection de victoires multidirectionnelles (horizontal, vertical, diagonal)",
      "Mode 2 joueurs local avec alternance fluide des tours",
      "Chute fluide des jetons animée en CSS",
      "Sauvegarde des scores des parties en cours"
    ]
  },
  {
    id: "project-7",
    title: "Pro Weather Climatique",
    description: "Un tableau de bord de prévisions météorologiques moderne fournissant des résumés précis et d'élégants diagrammes.",
    category: "web",
    tags: ["React", "Recharts", "JSON API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/weather-climatique-pro",
    liveDemo: "",
    details: "Conception d'une plateforme de prévisions responsive. Elle agrège et affiche les historiques et températures horaires sur de splendides diagrammes de courbes.",
    feats: [
      "Diagrammes interactifs dynamiques",
      "Recherche intelligente de localisations",
      "Rendu esthétique moderne avec thèmes d'arrière-plan adaptatifs"
    ]
  },
  {
    id: "project-8",
    title: "Intranet Gateway, Cloud & LDAP Directory",
    description: "Projet d'infrastructure réseau intégrant un portail intranet d'entreprise, un coffre-fort de fichiers cloud privé et un annuaire LDAP sécurisé.",
    category: "infra",
    tags: ["Docker", "LDAP", "Nextcloud", "Nginx"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Omrane02/intranet-cloud-ldap-suite",
    liveDemo: "",
    details: "Mise en place d'une suite de réseaux locaux virtualisés. Intègre LDAP pour l'authentification centralisée des comptes utilisateurs de l'intranet, et Nextcloud pour le stockage partagé sécurisé.",
    feats: [
      "Cartographie des comptes centralisée sous contrôles LDAP",
      "Nginx configuré comme proxy inverse et serveur d'accueil",
      "Déploiement entièrement automatisé sous Docker Compose"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Monitor",
    skills: ["HTML", "CSS", "JavaScript (JS)"]
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Database",
    skills: ["GoLang (Go)", "Java (OOP)"]
  },
  {
    id: "database",
    title: "Database",
    icon: "Cloud",
    skills: ["SQL / Relational Databases"]
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    skills: ["Git / GitHub", "Postman"]
  }
];

export const OMRANE_EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Étudiant en Bachelor 1 Informatique",
    company: "Sophia Ynov Campus",
    period: "Septembre 2025 - Présent",
    description: "Apprentissage des bases de l'informatique, de l'algorithmique et du génie logiciel. Projets pratiques en Java, HTML/CSS, Go et architectures de systèmes.",
    tags: ["Informatique", "Java", "Go", "Git", "HTML/CSS"]
  },
  {
    id: "exp-2",
    role: "Assistant comptable (CDD)",
    company: "Marineland (Antibes)",
    period: "Avril 2024 - Août 2024",
    description: "Travail en tant qu'assistant comptable, gestion et saisie des opérations comptables. Assistance à l'organisation d'événements.",
    tags: ["Comptabilité", "Organisation", "Logiciels Comptables", "Excel"]
  },
  {
    id: "exp-3",
    role: "Agent d'accueil en office de tourisme (Stage)",
    company: "Office de Tourisme de Biot (Biot)",
    period: "Mai 2022 - Juin 2022",
    description: "Stage de 2 mois : Accueil, information et promotion touristique de Biot. Organisation d'événements et promotion d'entreprises et d'associations partenaires.",
    tags: ["Relationnel", "Accueil", "Événementiel", "Service Client"]
  },
  {
    id: "exp-4",
    role: "Employé mise en rayon (Job étudiant)",
    company: "Casino Hypermarché (Cagnes-sur-Mer)",
    period: "Mars 2020 - Juin 2020",
    description: "Mise en rayon, gestion des stocks, étiquetage, et prix. Accueil et assistance au client.",
    tags: ["Gestion de Stock", "Service Client", "Rigueur", "Excel"]
  }
];
