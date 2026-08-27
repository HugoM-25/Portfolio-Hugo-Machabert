import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: "Étudiant en BUT Informatique",
      subtitle: "Parcours Réalisation d'Applications — IUT Lyon 1",
      description: "Passionné par le développement d'applications web modernes et performantes. J'adore concevoir des solutions élégantes à des problèmes complexes.",
      cvButton: "Mon CV",
      projectsButton: "Mes projets et missions"
    },
    about: {
      title: "À Propos de Moi",
      p1: "Actuellement en 3ᵉ année de BUT Informatique (parcours Réalisation d’Applications) à l'IUT Lyon 1, j'effectue ma formation en alternance chez EDF.",
      p2: "Je m'intéresse aussi bien à la solidité des architectures logicielles backend qu'à la qualité et la fluidité des interfaces utilisateurs. Mon objectif est de consolider mes acquis techniques et méthodologiques à travers des projets concrets, du recueil des besoins jusqu'au déploiement.",
      details: {
        location: "Lyon, France",
        status: "Futur étudiant en Master MIAGE",
        interests: "Volley-ball, Photographie, Jeux de société"
      }
    },
    skills: {
      title: "Stack technique",
      languages: "Langages",
      frameworks: "Frameworks & Runtimes",
      databases: "Bases de données",
      devops: "DevOps & Outils",
      methodologies: "Conception & Méthodes"
    },
    butSkills: {
      title: "Compétences BUT Informatique",
      c1: {
        title: "Réaliser un développement d'application",
        desc: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
        level: "Niveau 3"
      },
      c2: {
        title: "Optimiser des applications",
        desc: "Analyser et optimiser des applications",
        level: "Niveau 3"
      },
      c3: {
        title: "Administrer des systèmes informatiques communicants complexes",
        desc: "Déployer des services dans une architecture réseau",
        level: "Niveau 2"
      },
      c4: {
        title: "Gérer des données de l'information",
        desc: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        level: "Niveau 2"
      },
      c5: {
        title: "Conduire un projet",
        desc: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
        level: "Niveau 2"
      },
      c6: {
        title: "Collaborer au sein d'une équipe informatique",
        desc: "Manager une équipe informatique",
        level: "Niveau 3"
      }
    },
    projects: {
      title: "Projets Académiques",
      viewProject: "Voir le projet",
      contextTitle: "Contexte",
      realisationTitle: "Réalisation",
      descriptionTitle: "Description détaillée",
      competenciesTitle: "Compétences ciblées (BUT)",
      stackTitle: "Stack technique",
      chessDesc: "Plateforme web de jeu d'échecs en ligne et en local.",
      chessContext: "Projet universitaire (SAÉ) réalisé en groupe de 4 en 2ème année de BUT Informatique à l'IUT Lyon 1.",
      chessRealisation: "Conception de l'architecture logicielle (UML), implémentation du moteur de jeu et développement d'une interface web réactive connectée à une base de données.",
      chessLongDesc: "Plateforme web complète permettant de jouer aux échecs en ligne, en local ou contre un bot. Le site intègre un système de matchmaking selon le classement Elo, la gestion d'un historique détaillé des parties, une liste d'amis et une interface de jeu fluide développée en PHP, JavaScript et SQL.",
      chessComp1Code: "C1 — Réaliser (Niv. 2)",
      chessComp1Ac: "AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
      chessComp1Concrete: "Modélisation UML complète (classes, cas d'utilisation, séquences) et implémentation du moteur de règles du jeu d'échecs.",
      chessComp2Code: "C4 — Gérer les données (Niv. 2)",
      chessComp2Ac: "AC 3 : Organiser la restitution de données à travers la programmation et la visualisation",
      chessComp2Concrete: "Structuration de la base de données relationnelle et restitution de l'historique des coups, statistiques et classements Elo.",
      chessComp3Code: "C3 — Administrer (Niv. 2)",
      chessComp3Ac: "AC 1 : Concevoir et développer des applications communicantes",
      chessComp3Concrete: "Développement de l'architecture client-serveur pour synchroniser les coups en temps réel et gérer le matchmaking en ligne."
    },
    missions: {
      title: "Missions Alternance",
      emptyMessage: "Missions à venir...",
      m1: {
        nom: "Traitement et migration des chapitres EUR",
        desc: "Automatisation du nettoyage et de l'import des spécifications techniques sous Polarion ALM.",
        context: "Mission initiée en stage et finalisée en alternance pour l'association EUR chez EDF. Transition d'une gestion documentaire éclatée sous Word vers une centralisation des exigences nucléaires européennes dans Polarion ALM.",
        realisation: "Maintenance et enrichissement de scripts Python (python-docx) pour parser les nouveaux cas de documents Word, import de 5 chapitres majeurs et animation d'une session de formation de 2h30 pour 5 administrateurs.",
        longDesc: "Reprise et évolution des scripts d'automatisation développés en stage afin de couvrir de nouveaux cas de mise en page Word. Automatisation complète du parsing, validation et intégration de 5 nouveaux chapitres dans Polarion. Accompagnement au changement via la tenue d'un atelier pratique de formation pour les administrateurs.",
        c1Ac: "AC 2 : Faire évoluer une application existante",
        c1Concrete: "Refonte et maintenance évolutive des scripts Python pour gérer de nouvelles structures documentaires complexes et fiabiliser les imports sous Polarion.",
        c6Ac: "AC 3 : Guider la conduite du changement informatique au sein d'une organisation",
        c6Concrete: "Préparation et animation d'un atelier technique de 2h30 auprès de 5 administrateurs pour faciliter la prise en main de l'outillage et des manuels."
      },
      m2: {
        nom: "Génération automatique de delta de révisions",
        desc: "Outil d'analyse comparative de fichiers ReqIF (XML) et génération de rapports PDF visuels.",
        context: "Besoin de mettre en évidence de façon automatisée et précise les écarts d'exigences entre deux révisions officielles du Document EUR avant publication commerciale.",
        realisation: "Conception et développement d'un script Python traitant des flux XML (ReqIF), calcul de métriques d'évolution et export PDF avec comparaison visuelle au caractère près (diff rouge/vert).",
        longDesc: "Script autonome analysant l'arborescence des révisions EUR au format ReqIF. Il produit un bilan statistique (ajouts, suppressions, modifications, inchangés sur les exigences et commentaires) ainsi qu'un tableau comparatif détaillé sur deux colonnes avec coloration syntaxique des différences textuelles.",
        c1Ac: "AC 1 : Choisir et implémenter les architectures adaptées",
        c1Concrete: "Conception d'une chaîne de traitement automatisée en Python pour analyser, parser et comparer des flux de données XML ReqIF.",
        c2Ac: "AC 2 : Profiler, analyser et justifier le comportement d'un code existant",
        c2Concrete: "Optimisation de l'algorithme de comparaison textuelle au caractère près pour traiter efficacement de très gros volumes de spécifications techniques."
      },
      m3: {
        nom: "Gouvernance Polarion & Rédaction des manuels",
        desc: "Standardisation des rôles applicatifs et conception des guides d'administration et d'utilisation.",
        context: "Complexité de l'outil Polarion nécessitant un cadrage opérationnel clair en anglais et une simplification des habilitations sur l'ensemble des projets EUR.",
        realisation: "Finalisation du guide utilisateur et rédaction intégrale du manuel administrateur sous Canva (en anglais), couplées à une refonte et uniformisation des rôles et permissions multi-projets.",
        longDesc: "Conception de deux manuels complets en anglais illustrés de captures et orientés bonnes pratiques métier. Audit et refonte globale de la matrice des rôles sous Polarion pour supprimer les doublons d'autorisations et sécuriser la gestion des accès.",
        c6Ac: "AC 1 : Organiser et partager une veille numérique",
        c6Concrete: "Formalisation et transmission des procédures techniques et méthodologiques à travers deux guides de référence rédigés en anglais.",
        c3Ac: "AC 3 : Sécuriser les services et données d'un système",
        c3Concrete: "Harmonisation, nettoyage et restructuration des rôles et des droits d'accès sur l'ensemble des projets EUR dans Polarion."
      },
      m4: {
        nom: "Digitalisation du processus d'évaluation de design",
        desc: "Déploiement et automatisation d'un processus d'évaluation d'exigences nucléaires sur Polarion ALM.",
        context: "Mission principale d'alternance chez EDF. Digitalisation et simplification d'un processus d'évaluation d'exigences étalé sur 2 ans impliquant concepteurs, évaluateurs et groupes de travail.",
        realisation: "Paramétrage d'un template de projet Polarion réutilisable (workflows, champs, rôles), développement d'extensions d'affichage en Velocity (VTL / API Polarion) et réalisation de tests de charge/robustesse en Python.",
        longDesc: "Conception d'un environnement projet complet pour piloter l'évaluation de conformité des designs de réacteurs. Intégration de règles métier (filtrage sur noyau dur d'exigences et échantillonnage), développement VTL pour l'affichage dynamique des commentaires AUR via l'API, gestion du cycle documentaire Word/Polarion et validation de la robustesse face à des volumes massifs de données.",
        c1Ac: "AC 3 : Intégrer des solutions dans un environnement de production",
        c1Concrete: "Configuration avancée de templates de projets, workflows de validation et scripts VTL/API intégrés directement dans l'environnement Polarion d'entreprise.",
        c2Ac: "AC 1 : Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire...)",
        c2Concrete: "Élaboration d'un banc de tests de robustesse en Python (génération de charges textuelles et d'images volumineuses) pour valider l'import sans rupture de performance.",
        c6Ac: "AC 4 : Accompagner le management de projet informatique",
        c6Concrete: "Planification via diagramme de Gantt, force de proposition technique lors des réunions d'équipe et cadrage agile des besoins avec le maître d'apprentissage et les référents métiers."
      }
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Un projet, une question ou une opportunité d'alternance ? Laissez-moi un message !",
      nameLabel: "Nom complet",
      emailLabel: "Adresse e-mail",
      messageLabel: "Votre message",
      sendButton: "Envoyer le message",
      sendingButton: "Envoi en cours...",
      successMessage: "Message envoyé avec succès !",
      errorMessage: "Une erreur est survenue. Veuillez réessayer ou m’écrire directement par e-mail.",
      infoTitle: "Mes Coordonnées",
      email: "Adresse e-mail",
      github: "Mon GitHub",
      linkedin: "Mon LinkedIn"
    },
    filter: {
      stackLabel: "Stack",
      compLabel: "Compétences BUT",
      reset: "Réinitialiser",
      empty: "Aucun résultat pour ces filtres.",
      clickToFilter: "Voir les projets"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I am",
      title: "BUT Computer Science Student",
      subtitle: "Application Development Track — IUT Lyon 1",
      description: "Passionate about building modern and performant web applications. I love crafting elegant solutions to complex problems.",
      cvButton: "My CV",
      projectsButton: "My Projects & Missions"
    },
    about: {
      title: "About Me",
      p1: "Currently in my 3rd year of a Bachelor of Technology in Computer Science (Application Development track) at IUT Lyon 1, doing my work-study program at EDF.",
      p2: "I am interested in the robustness of backend software architectures as well as the quality and fluidity of user interfaces. My goal is to consolidate my technical and methodological skills through hands-on projects, from requirements gathering to deployment.",
      details: {
        location: "Lyon, France",
        status: "Future Master MIAGE Student",
        interests: "Volleyball, Photography, Tabletop Games"
      }
    },
    skills: {
      title: "Tech Stack",
      languages: "Languages",
      frameworks: "Frameworks & Runtimes",
      databases: "Databases",
      devops: "DevOps & Tools",
      methodologies: "Design & Methodologies"
    },
    butSkills: {
      title: "BUT Computer Science Skills",
      c1: {
        title: "Software Development",
        desc: "Adapt applications across a range of platforms (embedded, web, mobile, IoT...)",
        level: "Level 3"
      },
      c2: {
        title: "Optimize Applications",
        desc: "Analyze and optimize software applications",
        level: "Level 3"
      },
      c3: {
        title: "Administer Complex Network Systems",
        desc: "Deploy services within network architectures",
        level: "Level 2"
      },
      c4: {
        title: "Manage Data and Information",
        desc: "Optimize databases, interface with applications, and implement security measures",
        level: "Level 2"
      },
      c5: {
        title: "Project Management",
        desc: "Apply project tracking methodologies based on business, client, and user needs",
        level: "Level 2"
      },
      c6: {
        title: "Team Collaboration",
        desc: "Manage and collaborate within an IT team",
        level: "Level 3"
      }
    },
    projects: {
      title: "Academic Projects",
      viewProject: "View Project",
      contextTitle: "Context",
      realisationTitle: "Implementation",
      descriptionTitle: "Detailed Description",
      competenciesTitle: "Targeted Skills (BUT)",
      stackTitle: "Tech Stack",
      chessDesc: "Web platform for playing chess online and locally.",
      chessContext: "University project (SAÉ) carried out in a group of 4 during the 2nd year of the Computer Science BUT at IUT Lyon 1.",
      chessRealisation: "Design of the software architecture (UML), implementation of the chess engine, and development of a responsive web interface connected to a database.",
      chessLongDesc: "Complete web platform for playing chess online, locally, or against a bot. The site features matchmaking based on Elo ratings, detailed match history, a friends list, and a smooth gameplay interface built with PHP, JavaScript, and SQL.",
      chessComp1Code: "C1 — Software Development (Lvl. 2)",
      chessComp1Ac: "AC 1: Elaborate and implement functional and non-functional specifications based on requirements",
      chessComp1Concrete: "Complete UML modeling (class, use case, sequence diagrams) and implementation of the chess game rule engine.",
      chessComp2Code: "C4 — Data Management (Lvl. 2)",
      chessComp2Ac: "AC 3: Organize data rendering through programming and visualization",
      chessComp2Concrete: "Structuring of the relational database and rendering of move history, statistics, and Elo ratings.",
      chessComp3Code: "C3 — Network Administration (Lvl. 2)",
      chessComp3Ac: "AC 1: Design and develop communicating applications",
      chessComp3Concrete: "Development of the client-server architecture to synchronize moves in real-time and manage online matchmaking."
    },
    missions: {
      title: "Work-Study Missions",
      emptyMessage: "Missions coming soon...",
      m1: {
        nom: "EUR Chapters Processing & Migration",
        desc: "Automating the cleaning and importing of technical specifications into Polarion ALM.",
        context: "Mission initiated during internship and finalized during apprenticeship for the EUR association at EDF. Transitioning from scattered Word document management to centralizing European nuclear requirements in Polarion ALM.",
        realisation: "Maintenance and enrichment of Python scripts (python-docx) to parse new Word document cases, importing 5 major chapters, and running a 2.5-hour training session for 5 administrators.",
        longDesc: "Upgrading and maintaining the automation scripts developed during the internship to handle new Word layout patterns. Complete automation of parsing, validation, and integration of 5 new chapters in Polarion. Change management through a hands-on training workshop for administrators.",
        c1Ac: "AC 2: Evolve an existing application",
        c1Concrete: "Refactoring and evolutionary maintenance of Python scripts to manage complex document structures and secure imports in Polarion.",
        c6Ac: "AC 3: Guide IT change management within an organization",
        c6Concrete: "Preparation and leading of a 2.5-hour technical workshop with 5 administrators to facilitate tool and manual adoption."
      },
      m2: {
        nom: "Automatic Revision Delta Generation",
        desc: "Comparative analysis tool for ReqIF (XML) files and visual PDF report generation.",
        context: "Need to automatically and precisely highlight requirement gaps between two official revisions of the EUR Document before commercial publication.",
        realisation: "Design and development of a Python script processing XML streams (ReqIF), calculation of evolution metrics, and PDF export with character-by-character visual comparison (red/green diff).",
        longDesc: "Stand-alone script analyzing the EUR revision tree in ReqIF format. It produces a statistical summary (additions, deletions, modifications, unchanged for requirements and comments) and a detailed two-column comparison table with syntax highlighting for text differences.",
        c1Ac: "AC 1: Choose and implement suitable architectures",
        c1Concrete: "Design of a Python automated processing pipeline to analyze, parse, and compare ReqIF XML data streams.",
        c2Ac: "AC 2: Profile, analyze, and justify the behavior of existing code",
        c2Concrete: "Optimization of the character-by-character text comparison algorithm to efficiently process large technical specification volumes."
      },
      m3: {
        nom: "Polarion Governance & Manuals Drafting",
        desc: "Standardization of application roles and design of administration and user guides.",
        context: "Complexity of the Polarion tool requiring a clear operational framework in English and simplified authorization management across EUR projects.",
        realisation: "Finalization of the user guide and drafting of the administrator manual in Canva (in English), coupled with a restructuring and uniformization of multi-project roles and permissions.",
        longDesc: "Design of two comprehensive user guides in English illustrated with screenshots and oriented towards business best practices. Audit and global refactoring of the Polarion role matrix to eliminate duplicate authorizations and secure access control.",
        c6Ac: "AC 1: Organize and share digital watch",
        c6Concrete: "Formalization and transmission of technical and methodological procedures through two reference guides written in English.",
        c3Ac: "AC 3: Secure services and data of a system",
        c3Concrete: "Harmonization, cleanup, and restructuring of roles and access rights across EUR projects in Polarion."
      },
      m4: {
        nom: "Design Assessment Process Implementation",
        desc: "Deployment and automation of a nuclear requirements assessment workflow on Polarion ALM.",
        context: "Main work-study mission at EDF. Digitalizing and simplifying a design assessment process spread over 2 years, involving designers, assessors, and working groups.",
        realisation: "Configuration of a reusable Polarion project template (workflows, fields, roles), development of display extensions in Velocity (VTL / Polarion API), and execution of Python robustness/load tests.",
        longDesc: "Design of a complete project environment to monitor reactor design conformity assessments. Integration of business rules (core requirement filtering and sampling), VTL development for dynamic AUR comment display via the API, Word/Polarion document cycle management, and validation of performance robustness against massive data volumes.",
        c1Ac: "AC 3: Integrate solutions in a production environment",
        c1Concrete: "Advanced configuration of project templates, validation workflows, and VTL/API scripts integrated directly into the corporate Polarion environment.",
        c2Ac: "AC 1: Anticipate the results of various metrics (execution time, memory footprint...)",
        c2Concrete: "Development of a Python robustness testbed (generating large text and image payloads) to validate data import without performance degradation.",
        c6Ac: "AC 4: Support IT project management",
        c6Concrete: "Planning via Gantt chart, technical suggestions during team meetings, and agile requirement framing with the apprenticeship supervisor and domain experts."
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project, a question or an apprenticeship opportunity? Send me a message!",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      messageLabel: "Your Message",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "An error occurred. Please try again or email me directly.",
      infoTitle: "My Info",
      email: "Email address",
      github: "My GitHub",
      linkedin: "My LinkedIn"
    },
    filter: {
      stackLabel: "Stack",
      compLabel: "BUT Skills",
      reset: "Reset",
      empty: "No results for these filters.",
      clickToFilter: "View projects"
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages
})

export default i18n
