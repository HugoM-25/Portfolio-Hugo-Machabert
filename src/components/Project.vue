<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ProjectModel } from '@/models/ProjectModel'

const { locale } = useI18n()

interface Props {
  project: ProjectModel
}
const { project } = defineProps<Props>()

const showModal = ref(false)
const currentIndex = ref(0)
let intervalId: number | undefined = undefined

const openModal = () => {
  showModal.value = true
  startAutoSlide()
}

const closeModal = () => {
  showModal.value = false
  stopAutoSlide()
  currentIndex.value = 0
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % project.imagesPaths.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + project.imagesPaths.length) % project.imagesPaths.length
}

const startAutoSlide = () => {
  stopAutoSlide()
  if (project.imagesPaths.length > 1) {
    intervalId = window.setInterval(() => {
      nextSlide()
    }, 4000)
  }
}

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = undefined
  }
}

const formatCompCode = (code: string, projectNom: string) => {
  const labels: Record<string, { fr: string, en: string }> = {
    C1: { fr: "Réaliser", en: "Software Development" },
    C2: { fr: "Optimiser", en: "Optimize" },
    C3: { fr: "Administrer", en: "Administer" },
    C4: { fr: "Gérer les données", en: "Data Management" },
    C5: { fr: "Conduire un projet", en: "Project Management" },
    C6: { fr: "Collaborer", en: "Collaborate" }
  }
  
  // Determine level
  let levelNum = 3
  if (projectNom === 'AichiKier') {
    levelNum = 2
  } else if (code === 'C3') {
    levelNum = 2
  }
  
  const label = labels[code] || { fr: "", en: "" }
  const nameStr = locale.value === 'fr' ? label.fr : label.en
  const levelStr = locale.value === 'fr' ? `Niv. ${levelNum}` : `Lvl. ${levelNum}`
  
  return `${code} — ${nameStr} (${levelStr})`
}

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <div class="card" @click="openModal" tabindex="0" role="button" aria-label="Open project details" @keydown.enter="openModal">
    <div class="card-logo-container">
      <img :src="project.logo" :alt="project.nom" class="card-large-logo" />
    </div>
    <div class="card-title-bar">
      <h3>{{ project.nom }}</h3>
    </div>
    <div class="overlay">
      <h3 class="overlay-title">{{ project.nom }}</h3>
      <p>{{ project.description }}</p>
      <div class="btn-more">{{ $t('projects.viewProject') }} →</div>
    </div>
  </div>

  <div v-if="showModal" class="modal" @click.self="closeModal" role="dialog" aria-modal="true">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal" aria-label="Close popup">&times;</button>
      
      <h2 class="project-title">{{ project.nom }}</h2>
      
      <div class="project-info-details">
        <!-- Colonne Gauche : Images & Détails du projet -->
        <div class="info-left-col">
          <div class="carousel-wrapper">
            <button v-if="project.imagesPaths.length > 1" class="nav-btn prev" @click.stop="prevSlide" aria-label="Previous image">&#10094;</button>
            
            <div class="carousel-image-container">
              <img
                :src="project.imagesPaths[currentIndex]"
                :alt="`Image ${currentIndex + 1} of ${project.imagesPaths.length}`"
                class="carousel-image"
                draggable="false"
              />
            </div>
            
            <button v-if="project.imagesPaths.length > 1" class="nav-btn next" @click.stop="nextSlide" aria-label="Next image">&#10095;</button>
          </div>

          <div class="info-section">
            <h4>{{ $t('projects.contextTitle') }}</h4>
            <p>{{ project.contexte }}</p>
          </div>
          <div class="info-section">
            <h4>{{ $t('projects.realisationTitle') }}</h4>
            <p>{{ project.realisation }}</p>
          </div>
          <div class="info-section">
            <h4>{{ $t('projects.descriptionTitle') }}</h4>
            <p class="long-description">{{ project.longDescription }}</p>
          </div>
        </div>

        <!-- Colonne Droite : Compétences BUT -->
        <div v-if="project.competencesEvaluees && project.competencesEvaluees.length > 0" class="info-right-col">
          <div class="info-section">
            <h4>{{ $t('projects.competenciesTitle') }}</h4>
            <div class="modal-competencies">
              <div v-for="comp in project.competencesEvaluees" :key="comp.code" class="modal-comp-item">
                <span class="modal-comp-code">{{ formatCompCode(comp.code, project.nom) }}</span>
                <div class="modal-comp-text">
                  <strong>{{ comp.ac }}</strong>
                  <p>{{ comp.actionConcrete }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Card component styling */
.card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  width: 100%;
  height: 180px;
  display: block;
}

.card:hover,
.card:focus-within {
  transform: translateY(-6px);
  border-color: var(--primary);
  box-shadow: 0 12px 30px rgba(82, 99, 255, 0.15);
}

.card-logo-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.9) 100%);
  padding: 1.5rem;
  box-sizing: border-box;
  transition: var(--transition-normal);
}

.card-large-logo {
  max-width: 70%;
  max-height: 60%;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
  transition: var(--transition-normal);
}

.card:hover .card-large-logo,
.card:focus-within .card-large-logo {
  transform: scale(1.08);
  filter: drop-shadow(0 12px 24px rgba(82, 99, 255, 0.3)) blur(3px) brightness(0.3);
}

.card:hover .card-logo-container,
.card:focus-within .card-logo-container {
  background: radial-gradient(circle at center, rgba(30, 41, 59, 0.2) 0%, rgba(15, 23, 42, 0.95) 100%);
}

.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to top, rgba(11, 15, 25, 0.9) 20%, rgba(11, 15, 25, 0.4) 100%);
  color: white;
  opacity: 0;
  transition: var(--transition-normal);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card:hover .overlay,
.card:focus-within .overlay {
  opacity: 1;
}

/* Card logo badge removed */

/* Card title bar (shown by default) */
.card-title-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(11, 15, 25, 0.95) 40%, rgba(11, 15, 25, 0) 100%);
  padding: 1.2rem 1rem 0.8rem 1rem;
  transition: var(--transition-fast);
  text-align: left;
  z-index: 5;
}

.card-title-bar h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  font-family: var(--font-title);
  letter-spacing: -0.01em;
}

.card:hover .card-title-bar {
  opacity: 0;
  transform: translateY(10px);
}

.overlay-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.8rem 0;
  text-align: left;
  font-family: var(--font-title);
  background: linear-gradient(135deg, #ffffff 40%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.overlay p {
  margin: 0 0 10px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: left;
  line-height: 1.4;
}

.btn-more {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
}

/* Modal Styling */
.modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: fadeInModal 0.3s ease;
}

@keyframes fadeInModal {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  max-width: 950px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2.5rem 2rem 2rem 2rem;
  box-sizing: border-box;
  box-shadow: var(--shadow-lg);
  animation: slideInModal 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideInModal {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Close button */
.close-btn {
  position: absolute;
  top: 1rem; right: 1.2rem;
  font-size: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  transition: var(--transition-fast);
  line-height: 1;
}

.close-btn:hover {
  color: var(--text-primary);
  transform: scale(1.1);
}

.project-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text-primary) 30%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Carousel wrapper */
.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 260px;
  margin-bottom: 1.5rem;
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.carousel-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
}

.nav-btn {
  position: absolute;
  background: rgba(11, 15, 25, 0.6);
  border: 1px solid var(--border-color);
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-fast);
  z-index: 10;
}

.nav-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 0 15px var(--primary-glow);
}

.nav-btn.prev { left: 1rem; }
.nav-btn.next { right: 1rem; }

/* Project details structures */
.project-info-details {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  margin-top: 0.5rem;
  text-align: left;
}

.info-left-col,
.info-right-col {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info-section h4 {
  font-size: 0.95rem;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.3rem;
  font-family: var(--font-title);
  font-weight: 700;
}

.info-section p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.info-section .long-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  white-space: pre-line;
}

/* Competencies inside modal */
.modal-competencies {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.6rem;
}

.modal-comp-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  padding: 0.8rem 1rem;
  border-radius: 8px;
}

.modal-comp-code {
  background: var(--primary);
  color: white;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  line-height: 1;
  text-transform: uppercase;
  margin-top: 0.15rem;
}

.modal-comp-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
}

.modal-comp-text strong {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 600;
}

.modal-comp-text p {
  font-size: 0.9rem !important;
  color: var(--text-secondary) !important;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .carousel-wrapper {
    height: 220px;
  }
  .modal-content {
    padding: 2rem 1.2rem 1.5rem 1.2rem;
  }
  .project-title {
    font-size: 1.5rem;
  }
  .project-info-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>