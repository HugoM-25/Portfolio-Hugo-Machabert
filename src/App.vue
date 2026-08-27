<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TopBar from './components/TopBar.vue'
import BottomBar from './components/BottomBar.vue'
import type { ProjectModel } from '@/models/ProjectModel'
import Project from './components/Project.vue'

const { t } = useI18n()

// Reactive list of projects driven by i18n translations
const listeProjects = computed<ProjectModel[]>(() => [
  { 
    nom: "AichiKier", 
    description: t('projects.chessDesc'), 
    image: `${import.meta.env.BASE_URL}images/projets/aichikier-thumb.png`, 
    contexte: t('projects.chessContext'),
    realisation: t('projects.chessRealisation'),
    longDescription: t('projects.chessLongDesc'), 
    imagesPaths: [
      `${import.meta.env.BASE_URL}images/projets/aichikier-home.png`,
      `${import.meta.env.BASE_URL}images/projets/aichikier-board.png`,
      `${import.meta.env.BASE_URL}images/projets/aichikier-account.png`
    ],
    competencesEvaluees: [
      {
        code: t('projects.chessComp1Code'),
        ac: t('projects.chessComp1Ac'),
        actionConcrete: t('projects.chessComp1Concrete')
      },
      {
        code: t('projects.chessComp2Code'),
        ac: t('projects.chessComp2Ac'),
        actionConcrete: t('projects.chessComp2Concrete')
      },
      {
        code: t('projects.chessComp3Code'),
        ac: t('projects.chessComp3Ac'),
        actionConcrete: t('projects.chessComp3Concrete')
      }
    ]
  },
])

const listeMissions = computed<ProjectModel[]>(() => [
  {
    nom: t('missions.m1.nom'),
    description: t('missions.m1.desc'),
    image: `${import.meta.env.BASE_URL}images/missions/mission-import-thumb.png`,
    contexte: t('missions.m1.context'),
    realisation: t('missions.m1.realisation'),
    longDescription: t('missions.m1.longDesc'),
    imagesPaths: [
      `${import.meta.env.BASE_URL}images/missions/mission-import-1.png`,
      `${import.meta.env.BASE_URL}images/missions/mission-import-2.png`
    ],
    competencesEvaluees: [
      {
        code: 'C1',
        ac: t('missions.m1.c1Ac'),
        actionConcrete: t('missions.m1.c1Concrete')
      },
      {
        code: 'C6',
        ac: t('missions.m1.c6Ac'),
        actionConcrete: t('missions.m1.c6Concrete')
      }
    ]
  },
  {
    nom: t('missions.m2.nom'),
    description: t('missions.m2.desc'),
    image: `${import.meta.env.BASE_URL}images/missions/mission-delta-thumb.png`,
    contexte: t('missions.m2.context'),
    realisation: t('missions.m2.realisation'),
    longDescription: t('missions.m2.longDesc'),
    imagesPaths: [
      `${import.meta.env.BASE_URL}images/missions/mission-delta-1.png`,
      `${import.meta.env.BASE_URL}images/missions/mission-delta-2.png`
    ],
    competencesEvaluees: [
      {
        code: 'C1',
        ac: t('missions.m2.c1Ac'),
        actionConcrete: t('missions.m2.c1Concrete')
      },
      {
        code: 'C2',
        ac: t('missions.m2.c2Ac'),
        actionConcrete: t('missions.m2.c2Concrete')
      }
    ]
  },
  {
    nom: t('missions.m3.nom'),
    description: t('missions.m3.desc'),
    image: `${import.meta.env.BASE_URL}images/missions/mission-manuels-thumb.png`,
    contexte: t('missions.m3.context'),
    realisation: t('missions.m3.realisation'),
    longDescription: t('missions.m3.longDesc'),
    imagesPaths: [
      `${import.meta.env.BASE_URL}images/missions/mission-manuels-1.png`,
      `${import.meta.env.BASE_URL}images/missions/mission-manuels-2.png`
    ],
    competencesEvaluees: [
      {
        code: 'C6',
        ac: t('missions.m3.c6Ac'),
        actionConcrete: t('missions.m3.c6Concrete')
      },
      {
        code: 'C3',
        ac: t('missions.m3.c3Ac'),
        actionConcrete: t('missions.m3.c3Concrete')
      }
    ]
  },
  {
    nom: t('missions.m4.nom'),
    description: t('missions.m4.desc'),
    image: `${import.meta.env.BASE_URL}images/missions/mission-eval-thumb.png`,
    contexte: t('missions.m4.context'),
    realisation: t('missions.m4.realisation'),
    longDescription: t('missions.m4.longDesc'),
    imagesPaths: [
      `${import.meta.env.BASE_URL}images/missions/mission-eval-1.png`,
      `${import.meta.env.BASE_URL}images/missions/mission-eval-2.png`,
      `${import.meta.env.BASE_URL}images/missions/mission-eval-3.png`
    ],
    competencesEvaluees: [
      {
        code: 'C1',
        ac: t('missions.m4.c1Ac'),
        actionConcrete: t('missions.m4.c1Concrete')
      },
      {
        code: 'C2',
        ac: t('missions.m4.c2Ac'),
        actionConcrete: t('missions.m4.c2Concrete')
      },
      {
        code: 'C6',
        ac: t('missions.m4.c6Ac'),
        actionConcrete: t('missions.m4.c6Concrete')
      }
    ]
  }
])

const activeDiv = ref('home')
const profileImage = `${import.meta.env.BASE_URL}images/avatar.jpg`

// Scroll tracking for navigation highlight
const handleScroll = () => {
  const divs = document.querySelectorAll('.section')
  let current = activeDiv.value

  for (const div of divs) {
    const rect = div.getBoundingClientRect()
    // Trigger highlight when section is centered in screen
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      current = div.id
      break
    }
  }

  // Treat BUT competencies as part of competence category for navigation active highlight
  if (current === 'but-competence') {
    current = 'competence'
  }

  if (current !== activeDiv.value) {
    activeDiv.value = current
  }
}

// Form state
const formData = ref({
  name: '',
  email: '',
  message: ''
})
const formSubmitted = ref(false)

const submitForm = () => {
  formSubmitted.value = true
}

const resetForm = () => {
  formData.value = { name: '', email: '', message: '' }
  formSubmitted.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Run initial check
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <TopBar />
    
    <main class="container">
      <!-- Section Accueil (Hero) -->
      <section id="home" class="section animate-fade-in">
        <div class="hero-wrapper">
          <div class="hero-text">
            <span class="greeting">{{ $t('hero.greeting') }}</span>
            <h1 class="name">Hugo Machabert</h1>
            <h2 class="title gradient-text">{{ $t('hero.title') }}</h2>
            <p class="subtitle">{{ $t('hero.subtitle') }}</p>
            <p class="description">{{ $t('hero.description') }}</p>
            
            <div class="cta-buttons">
              <a href="#projet" class="btn btn-primary">{{ $t('hero.projectsButton') }}</a>
              <!-- <a href="#contact" class="btn btn-secondary">{{ $t('hero.cvButton') }}</a> -->
            </div>
          </div>
          <div class="hero-image-container">
            <div class="profile-card-wrapper">
              <div class="profile-card">
                <img :src="profileImage" alt="Hugo Machabert" class="profile-img" />
                <div class="profile-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section À Propos -->
      <section id="apropos" class="section">
        <h2 class="section-title">{{ $t('about.title') }}</h2>
        <div class="about-wrapper">
          <div class="about-text">
            <p>{{ $t('about.p1') }}</p>
            <p>{{ $t('about.p2') }}</p>
          </div>
          <div class="about-details card-glass">
            <div class="detail-item">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="detail-icon" />
              <div>
                <h4>Localisation</h4>
                <p>{{ $t('about.details.location') }}</p>
              </div>
            </div>
            <div class="detail-item">
              <font-awesome-icon :icon="['fas', 'graduation-cap']" class="detail-icon" />
              <div>
                <h4>Statut</h4>
                <p>{{ $t('about.details.status') }}</p>
              </div>
            </div>
            <div class="detail-item">
              <font-awesome-icon :icon="['fas', 'book']" class="detail-icon" />
              <div>
                <h4>Intérêts</h4>
                <p>{{ $t('about.details.interests') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Compétences -->
      <section id="competence" class="section">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <div class="skills-grid">
          <!-- Langages -->
          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'code']" class="category-icon" />
              <h3>{{ $t('skills.languages') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">Java</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Kotlin</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">PHP</span>
              <span class="skill-tag">C</span>
              <span class="skill-tag">XML</span>
              <span class="skill-tag">HTML / CSS</span>
            </div>
          </div>
          
          <!-- Frameworks & Runtimes -->
          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'code']" class="category-icon" />
              <h3>{{ $t('skills.frameworks') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">Spring Boot</span>
              <span class="skill-tag">Symfony</span>
              <span class="skill-tag">Angular</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">Node.js</span>
            </div>
          </div>

          <!-- Bases de données -->
          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'globe']" class="category-icon" />
              <h3>{{ $t('skills.databases') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">SQL</span>
              <span class="skill-tag">PL/SQL</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Neo4j</span>
            </div>
          </div>

          <!-- DevOps & Outils -->
          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'briefcase']" class="category-icon" />
              <h3>{{ $t('skills.devops') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Ansible</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">CI/CD</span>
            </div>
          </div>

          <!-- Conception & Méthodes -->
          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'book']" class="category-icon" />
              <h3>{{ $t('skills.methodologies') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">UML</span>
              <span class="skill-tag">Design Patterns</span>
              <span class="skill-tag">Méthodes Agiles</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Compétences BUT Informatique -->
      <section id="but-competence" class="section">
        <h2 class="section-title">{{ $t('butSkills.title') }}</h2>
        <div class="skills-grid">
          <div v-for="i in 6" :key="i" class="skills-category-card but-skill-card">
            <div class="card-header-but">
              <font-awesome-icon :icon="['fas', 'graduation-cap']" class="category-icon-but" />
              <h3>{{ $t(`butSkills.c${i}.title`) }}</h3>
            </div>
            <p class="but-skill-desc">{{ $t(`butSkills.c${i}.desc`) }}</p>
            <div class="but-skill-level">
              <span class="level-badge">{{ $t(`butSkills.c${i}.level`) }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Projets & Missions -->
      <section id="projet" class="section">
        <!-- Projets Académiques -->
        <div class="projects-subsection">
          <h2 class="section-title">{{ $t('projects.title') }}</h2>
          <div class="projects-grid">
            <div v-for="(project) in listeProjects" :key="project.nom" class="project-card-wrapper">
              <Project :project="project"/>
            </div>
          </div>
        </div>

        <!-- Missions Alternance -->
        <div class="projects-subsection" style="margin-top: 4rem;">
          <h2 class="section-title">{{ $t('missions.title') }}</h2>
          <div class="projects-grid">
            <div v-for="(mission) in listeMissions" :key="mission.nom" class="project-card-wrapper">
              <Project :project="mission"/>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Contact -->
      <section id="contact" class="section">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="contact-subtitle">{{ $t('contact.subtitle') }}</p>
        
        <div class="contact-wrapper">
          <div class="contact-info">
            <h3>{{ $t('contact.infoTitle') }}</h3>
            
            <div class="info-card">
              <div class="info-item">
                <font-awesome-icon :icon="['fas', 'envelope']" class="info-icon" />
                <div>
                  <h4>{{ $t('contact.email') }}</h4>
                  <a href="mailto:h.machabert@gmail.com">h.machabert@gmail.com</a>
                </div>
              </div>
              
              <div class="info-item">
                <font-awesome-icon :icon="['fas', 'globe']" class="info-icon" />
                <div>
                  <h4>{{ $t('contact.github') }}</h4>
                  <a href="https://github.com/HugoM-25" target="_blank" rel="noopener noreferrer">github.com/HugoM-25</a>
                </div>
              </div>

              <div class="info-item">
                <font-awesome-icon :icon="['fas', 'user']" class="info-icon" />
                <div>
                  <h4>{{ $t('contact.linkedin') }}</h4>
                  <a href="https://www.linkedin.com/in/hugo-machabert-a7b6b12a8" target="_blank" rel="noopener noreferrer">Hugo Machabert</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form v-if="!formSubmitted" @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">{{ $t('contact.nameLabel') }}</label>
                <input type="text" id="name" v-model="formData.name" required class="form-input" />
              </div>
              <div class="form-group">
                <label for="email">{{ $t('contact.emailLabel') }}</label>
                <input type="email" id="email" v-model="formData.email" required class="form-input" />
              </div>
              <div class="form-group">
                <label for="message">{{ $t('contact.messageLabel') }}</label>
                <textarea id="message" v-model="formData.message" rows="5" required class="form-input"></textarea>
              </div>
              <button type="submit" class="btn btn-primary form-submit-btn">{{ $t('contact.sendButton') }}</button>
            </form>
            <div v-else class="form-success animate-fade-in">
              <div class="success-icon">✓</div>
              <h3>{{ $t('contact.successMessage') }}</h3>
              <p>Merci pour votre message. Je vous recontacterai rapidement !</p>
              <button @click="resetForm" class="btn btn-secondary btn-sm">Renvoyer un message</button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <BottomBar :activeDiv="activeDiv"/>
  </div>
</template>

<style scoped>
.hero-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
}

.hero-text {
  text-align: left;
}

.greeting {
  font-size: 1.2rem;
  color: var(--secondary);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
}

.name {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
}

.subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 500;
}

.description {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card-wrapper {
  animation: floatProfile 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
}

.profile-card {
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: var(--shadow-lg), 0 10px 30px rgba(82, 99, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-slow);
}

@keyframes floatProfile {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(1.5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

.profile-card:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 45px rgba(82, 99, 255, 0.45);
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--bg-primary);
}

.profile-glow {
  position: absolute;
  top: -10px; left: -10px; right: -10px; bottom: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
  z-index: -1;
  filter: blur(10px);
}

/* About Section */
.about-wrapper {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
}

.about-text p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.about-details {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: var(--shadow-md);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-align: left;
}

.detail-icon {
  font-size: 1.5rem;
  color: var(--primary);
  width: 25px;
}

.detail-item h4 {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.15rem;
}

.detail-item p {
  font-size: 1.05rem;
  color: var(--text-primary);
  font-weight: 600;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skills-category-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
}

.skills-category-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-glow);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.category-icon {
  font-size: 1.8rem;
  color: var(--secondary);
}

.skills-category-card h3 {
  font-size: 1.3rem;
  font-family: var(--font-title);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition-fast);
}

.skill-tag:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: scale(1.05);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* Contact Section */
.contact-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-top: -2rem;
  margin-bottom: 3rem;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
}

.contact-info {
  text-align: left;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.info-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.info-icon {
  font-size: 1.5rem;
  color: var(--secondary);
  width: 25px;
}

.info-item h4 {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 0.15rem;
}

.info-item a {
  font-size: 1.05rem;
  color: var(--text-primary);
  font-weight: 600;
  transition: var(--transition-fast);
}

.info-item a:hover {
  color: var(--primary);
}

.contact-form-container {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.form-input {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 8px var(--primary-glow);
}

textarea.form-input {
  resize: vertical;
}

.form-submit-btn {
  padding: 0.9rem;
  font-size: 1.05rem;
  margin-top: 1rem;
  width: 100%;
}

.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 2rem 0;
  gap: 1rem;
}

.success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 242, 254, 0.15);
  color: var(--secondary);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.form-success h3 {
  font-size: 1.4rem;
}

.form-success p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

/* BUT Competencies Card styles */
.but-skill-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header-but {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.8rem;
}

.category-icon-but {
  font-size: 1.5rem;
  color: var(--secondary);
  margin-top: 0.2rem;
}

.card-header-but h3 {
  font-size: 1.15rem;
  line-height: 1.4;
  text-align: left;
}

.but-skill-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
  flex-grow: 1;
}

.but-skill-level {
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
}

.level-badge {
  background: rgba(82, 99, 255, 0.15);
  border: 1px solid var(--primary-glow);
  color: var(--secondary);
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Empty state styling */
.empty-state {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: rgba(22, 31, 48, 0.4);
  border: 2px dashed var(--border-color);
  border-radius: 16px;
  color: var(--text-muted);
  text-align: center;
  gap: 1rem;
  width: 100%;
}

.empty-icon {
  font-size: 2.2rem;
  color: var(--text-muted);
  opacity: 0.6;
}

.empty-state p {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .hero-image-container {
    order: -1;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .about-wrapper {
    grid-template-columns: 1fr;
  }
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .name {
    font-size: 2.8rem;
  }
  .title {
    font-size: 1.8rem;
  }
  .profile-card {
    width: 260px;
    height: 260px;
  }
  .contact-form-container {
    padding: 1.8rem;
  }
}
</style>
