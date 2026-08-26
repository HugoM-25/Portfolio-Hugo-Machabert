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
      title: "Développeur Full-Stack",
      subtitle: "Étudiant en Informatique à l'Université Lyon 1",
      description: "Passionné par le développement d'applications web modernes et performantes. J'adore concevoir des solutions élégantes à des problèmes complexes.",
      cvButton: "Mon CV",
      projectsButton: "Mes projets"
    },
    about: {
      title: "À Propos de Moi",
      p1: "Actuellement étudiant en Licence d'Informatique à l'Université Claude Bernard Lyon 1, je me spécialise dans la conception et le développement d'applications.",
      p2: "Je m'intéresse aussi bien à la solidité des architectures backend qu'au design d'interfaces fluides et soignées. Mon objectif est d'approfondir mes compétences à travers des projets ambitieux.",
      details: {
        location: "Lyon, France",
        status: "Recherche d'Alternance / Stage",
        interests: "Jeu d'échecs, Programmation, Veille Technologique"
      }
    },
    skills: {
      title: "Mes Compétences",
      frontend: "Développement Frontend",
      backend: "Développement Backend",
      tools: "Outils & DevOps"
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
      title: "Full-Stack Developer",
      subtitle: "Computer Science Student at Lyon 1 University",
      description: "Passionate about building modern and performant web applications. I love crafting elegant solutions to complex problems.",
      cvButton: "My CV",
      projectsButton: "My Projects"
    },
    about: {
      title: "About Me",
      p1: "Currently a Computer Science Bachelor student at Claude Bernard Lyon 1 University, focusing on software engineering and application development.",
      p2: "I design robust backends and clean user interfaces. My goal is to continuously tackle new technical challenges and refine my skills through ambitious projects.",
      details: {
        location: "Lyon, France",
        status: "Open for Apprenticeship / Internship",
        interests: "Chess, Software development, Tech news"
      }
    },
    skills: {
      title: "My Skills",
      frontend: "Frontend Development",
      backend: "Backend Development",
      tools: "Tools & DevOps"
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
