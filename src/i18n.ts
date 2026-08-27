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
      projectsButton: "Mes projets"
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
      title: "Mes Projets",
      viewProject: "Voir le projet",
      chessDesc: "Site d'échecs en ligne interactif avec salon de jeu",
      chessLongDesc: "Un site complet pour jouer aux échecs en ligne. Permet de jouer contre une IA ou en local, de consulter l'historique des coups, d'analyser les parties et d'utiliser une interface de jeu moderne et réactive. Développé avec soin pour offrir une expérience fluide."
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Un projet, une question ou une opportunité d'alternance ? Laissez-moi un message !",
      nameLabel: "Nom complet",
      emailLabel: "Adresse e-mail",
      messageLabel: "Votre message",
      sendButton: "Envoyer le message",
      successMessage: "Message envoyé avec succès !",
      infoTitle: "Mes Coordonnées",
      email: "Adresse e-mail",
      github: "Mon GitHub",
      linkedin: "Mon LinkedIn"
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
      projectsButton: "My Projects"
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
      title: "My Projects",
      viewProject: "View Project",
      chessDesc: "Online interactive chess site with game lobby",
      chessLongDesc: "A complete online chess platform. It features local match play, move history, game analysis, and a modern reactive board UI. Built with care to deliver a seamless gaming experience."
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project, a question or an apprenticeship opportunity? Send me a message!",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      messageLabel: "Your Message",
      sendButton: "Send Message",
      successMessage: "Message sent successfully!",
      infoTitle: "My Info",
      email: "Email address",
      github: "My GitHub",
      linkedin: "My LinkedIn"
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
