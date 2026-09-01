<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

type Language = {
  code: string
  label: string
  flag: string
}

const { locale } = useI18n()

const dropdownOpen = ref(false)
const languages: Language[] = [
  { code: 'fr', label: 'Français', flag: `${import.meta.env.BASE_URL}images/fr.png` },
  { code: 'en', label: 'English', flag: `${import.meta.env.BASE_URL}images/en.png` },
]

const selectedLanguage = ref<Language>(
  languages.find(l => l.code === locale.value) || languages[0]
)
const selectorRef = ref<HTMLElement | null>(null)
const iutLogo = `${import.meta.env.BASE_URL}images/Logo_IUT_Lyon1.png`

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const selectLanguage = (lang: Language) => {
  selectedLanguage.value = lang
  dropdownOpen.value = false
  locale.value = lang.code
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
  <nav class="navbar glass">
    <div class="brand-container">
      <a href="#" class="logo">HM</a>
      <img :src="iutLogo" alt="Logo IUT Lyon 1" class="iut-logo" />
    </div>

    <div class="language-selector" ref="selectorRef">
      <button @click="toggleDropdown" class="lang-button">
        <img :src="selectedLanguage.flag" alt="flag" />
        {{ selectedLanguage.code }}
        <span class="arrow" :class="{ open: dropdownOpen }">▼</span>
      </button>

      <div v-if="dropdownOpen" class="dropdown">
        <ul>
          <li
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang)"
          >
            <div class="lang-item">
              <img :src="lang.flag" alt="flag" class="mini-flag" />
              {{ lang.label }}
            </div>
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
  padding: 0.8rem 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  border-bottom: 1px solid var(--border-color);
}

.brand-container {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.logo {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1.5rem;
  text-decoration: none;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  transition: var(--transition-fast);
}

.iut-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
}

.logo:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.language-selector {
  position: relative;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: var(--transition-fast);
}

.lang-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--primary);
}

.lang-button img {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
}

.arrow {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  z-index: 1100;
  overflow: hidden;
  min-width: 130px;
  animation: fadeInDropdown 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeInDropdown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0.3rem 0;
}

.dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 0.9rem;
  transition: var(--transition-fast);
}

.dropdown li:hover {
  background-color: var(--bg-tertiary);
  color: var(--primary);
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.mini-flag {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: cover;
}
</style>