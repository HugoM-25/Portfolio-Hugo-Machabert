<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import TopBar from './components/TopBar.vue'
import BottomBar from './components/BottomBar.vue'
import type { ProjectModel } from '../models/ProjectModel'
import Project from './components/Project.vue'

const listeProjects = ref<ProjectModel[]>([
  { nom: "Aichikier", description: "Site d'échecs en ligne", image: "./public/images/aichikier.png", longDescription: "projet de Sae chjvskdfhjkdvbdqjkvbjs<ldqn,ljk eobdqjvbjdksbvjdsvjkdvbs dovhjdskvbjkdbvjkdsvkjsbdjvjdkvjkdbv sdjvbvjbvjksvb<", imagesPaths : ["./public/images/aichikier.png", "./public/images/en.png"] },
])

const activeDiv = ref('home')

const handleScroll = () => {
  const divs = document.querySelectorAll('.section')
  let current = activeDiv.value

  for (const div of divs) {
    const rect = div.getBoundingClientRect()
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      current = div.id
      break
    }
  }

  if (current !== activeDiv.value) {
    activeDiv.value = current
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>



<template>
  <div>
    <TopBar />
    <div id="home" class="section"><p>img</p></div>
    <div id="apropos" class="section"><h1>A propos de moi</h1></div>
    <div id="competence" class="section"><h1>Mes compétences</h1></div>
    <div id="projet" class="section">
      <h1>Mes projets</h1>
       <div v-for="(project) in listeProjects" :key="project.nom">
          <Project :project="project"/>
        </div>
    </div>    
    <div id="contact" class="section"><h1>Contactez moi</h1></div>

    <BottomBar :activeDiv="activeDiv"/>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: #1F1F1F;
}

.full-width-image {
  display: block;
  width: 100%;
  max-width: 100vw;
  height: auto;
}

.section {
  /* height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem; */
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
h1{
  text-align: left;
}
img{
  width: 90vw;
  height: auto;
  display: block;
  object-fit: cover;
}

.card{
  box-shadow: 8px 8px 12 #5263FF;
}
</style>

