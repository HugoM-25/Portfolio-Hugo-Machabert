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
    nom: "Aichikier", 
    description: t('projects.chessDesc'), 
    image: `${import.meta.env.BASE_URL}images/aichikier.png`, 
    longDescription: t('projects.chessLongDesc'), 
    imagesPaths: [
      `${import.meta.env.BASE_URL}images/aichikier.png`
    ] 
  },
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
              <a href="#contact" class="btn btn-secondary">{{ $t('hero.cvButton') }}</a>
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
          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'code']" class="category-icon" />
              <h3>{{ $t('skills.frontend') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">Vue 3</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">HTML5 / CSS3</span>
              <span class="skill-tag">Responsive Design</span>
              <span class="skill-tag">JavaScript ES6+</span>
            </div>
          </div>
          
          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'code']" class="category-icon" />
              <h3>{{ $t('skills.backend') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express.js</span>
              <span class="skill-tag">RESTful APIs</span>
              <span class="skill-tag">SQL & NoSQL</span>
              <span class="skill-tag">JSON / Web Services</span>
            </div>
          </div>

          <div class="skills-category-card">
            <div class="card-header">
              <font-awesome-icon :icon="['fas', 'briefcase']" class="category-icon" />
              <h3>{{ $t('skills.tools') }}</h3>
            </div>
            <div class="skills-list">
              <span class="skill-tag">Git & GitHub</span>
              <span class="skill-tag">Vite.js</span>
              <span class="skill-tag">npm / PNPM</span>
              <span class="skill-tag">CI/CD Workflows</span>
              <span class="skill-tag">Linux / Unix</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Projets -->
      <section id="projet" class="section">
        <h2 class="section-title">{{ $t('projects.title') }}</h2>
        <div class="projects-grid">
          <div v-for="(project) in listeProjects" :key="project.nom" class="project-card-wrapper">
            <Project :project="project"/>
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
                  <a href="mailto:hugo.machabert@etu.univ-lyon1.fr">hugo.machabert@etu.univ-lyon1.fr</a>
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
  grid-template-columns: repeat(3, 1fr);
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
