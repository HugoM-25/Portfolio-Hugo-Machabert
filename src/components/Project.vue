<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import type { ProjectModel } from '../../models/ProjectModel'

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
  intervalId = window.setInterval(() => {
    nextSlide()
  }, 3000)
}

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = undefined
  }
}

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <div class="card" @click="openModal" tabindex="0" role="button" aria-label="Open project details">
    <img :src="project.image" :alt="project.nom" class="card-image" />
    <div class="overlay">
      <h3>{{ project.nom }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>

  <div v-if="showModal" class="modal" @click.self="closeModal" role="dialog" aria-modal="true">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal" aria-label="Close popup">&times;</button>
      
      <div class="carousel-wrapper">
        <button class="nav-btn prev" @click.stop="prevSlide" aria-label="Previous image">&#10094;</button>
        
        <div class="carousel-image-container">
          <img
            :src="project.imagesPaths[currentIndex]"
            :alt="`Image ${currentIndex + 1} of ${project.imagesPaths.length}`"
            class="carousel-image"
            draggable="false"
          />
        </div>
        
        <button class="nav-btn next" @click.stop="nextSlide" aria-label="Next image">&#10095;</button>
      </div>
      
      <div class="long-description">
        <p>{{ project.longDescription }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Carte adaptative */
.card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s ease;
  display: inline-block; /* taille selon contenu */
  max-width: 300px; /* taille max raisonnable */
  max-height: 200px; /* max hauteur */
}

.card-image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 200px;
  object-fit: contain; /* conserve ratio, pas de rognage */
  transition: transform 0.3s ease;
}

.card:hover,
.card:focus {
  background-color: #ccc;
}

.card:hover .card-image,
.card:focus .card-image {
  transform: scale(1.05);
  filter: brightness(0.7);
}

.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card:hover .overlay,
.card:focus .overlay {
  opacity: 1;
}

.overlay h3 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.overlay p {
  margin: 0;
  font-size: 0.9rem;
}

/* Modal */
.modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden; /* on cache scroll ici, scroll sur long-description */
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* Close button fixe en haut à droite */
.close-btn {
  position: absolute;
  top: 10px; right: 15px;
  font-size: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  line-height: 1;
  padding: 0;
  z-index: 10;
}

/* Carousel container fixe en hauteur */
.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 350px; /* taille fixe pour éviter saut */
  margin-bottom: 20px;
}

/* Container image fixe */
.carousel-image-container {
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #f5f5f5;
  border-radius: 6px;
  box-sizing: border-box;
}

/* Image centrée et contenue */
.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  display: block;
}

/* Flèches navigation fixes */
.nav-btn {
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 50%;
  user-select: none;
  transition: background-color 0.2s ease;
  z-index: 10;
}

.nav-btn:hover {
  background: rgba(0,0,0,0.8);
}

.nav-btn.prev {
  margin-right: 10px;
}

.nav-btn.next {
  margin-left: 10px;
}

/* Description avec scroll si trop longue */
.long-description {
  font-size: 1rem;
  color: #333;
  white-space: pre-line;
  overflow-y: auto;
  max-height: 150px;
  padding-right: 8px; /* pour scrollbar */
}
</style>