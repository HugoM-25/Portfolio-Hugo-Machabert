<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type Language = {
  code: string
  label: string
  flag: string
}

const dropdownOpen = ref(false)
const languages: Language[] = [
    { code: 'fr', label: 'Français', flag: '/images/fr.avif' },
    { code: 'en', label: 'English', flag: '/images/en.png' },
]

const selectedLanguage = ref<Language>(languages[0])
const selectorRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const selectLanguage = (lang: Language) => {
  selectedLanguage.value = lang
  dropdownOpen.value = false
  // i18n.global.locale = lang.code // à décommenter si tu utilises vue-i18n
}

const handleClickOutside = (event: MouseEvent) => {
  if (
    selectorRef.value &&
    !selectorRef.value.contains(event.target as Node)
  ) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>


<template>
  <nav class="navbar">
    <a href="#" class="logo">HM</a>

    <div class="language-selector" ref="selectorRef">
      <button @click="toggleDropdown" class="lang-button">
        <img :src="selectedLanguage.flag" alt="flag" />
        {{ selectedLanguage.code }}
        <span>▼</span>
      </button>

      <div v-if="dropdownOpen" class="dropdown">
        <ul>
          <li
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang)"
          >
            {{ lang.label }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #1F1F1F;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 5px 10px #5263FF;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  color: #5263FF;
  text-decoration: none;
  background: none;
}

.language-selector {
  position: relative;
}
.lang-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  background: #1F1F1F;
  border: 1px solid #5263FF;
  color: #5263FF;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.lang-button img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.dropdown {
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #1F1F1F;
  border-radius: 10%;
}

.dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: white;
}

.dropdown li:first-of-type{
  border-radius: 15% 15% 0 0;
}

.dropdown li:last-of-type{
  border-radius:0 0 15% 15%;
}

.dropdown li:hover {
  background-color: #3f3f3f;
}

div:first-of-type{
    top: 0;
}
</style>