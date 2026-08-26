<script setup lang="ts">
defineProps({
  activeDiv: String
})
</script>

<template>
  <nav class="bottom-nav">
    <a href="#" :class="{ active: activeDiv === 'home' }" aria-label="Go to Home">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'home' }">
        <font-awesome-icon :icon="['fas', 'house']" />
      </div>
    </a>
    <a href="#apropos" :class="{ active: activeDiv === 'apropos' }" aria-label="Go to About">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'apropos' }">
        <font-awesome-icon :icon="['fas', 'user']" />
      </div>
    </a>
    <a href="#competence" :class="{ active: activeDiv === 'competence' }" aria-label="Go to Skills">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'competence' }">
        <font-awesome-icon :icon="['fas', 'book']" />
      </div>
    </a>
    <a href="#projet" :class="{ active: activeDiv === 'projet' }" aria-label="Go to Projects">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'projet' }">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
      </div>
    </a>
    <a href="#contact" :class="{ active: activeDiv === 'contact' }" aria-label="Go to Contact">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'contact' }">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </div>
    </a>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 1.5rem;
  width: 360px;
  max-width: 90%;
  height: 60px;
  background: rgba(22, 31, 48, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  padding: 0 0.5rem;
}

a {
  text-decoration: none;
  font-size: 1.25rem;
  transition: var(--transition-fast);
}

.icon-wrapper {
  height: 2.6rem;
  width: 2.6rem;
  color: var(--text-secondary);
  border-radius: 50%;
  transition: var(--transition-normal);
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-wrapper:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.icon-wrapper.active {
  background-color: var(--primary);
  color: white;
  box-shadow: 0 4px 15px rgba(82, 99, 255, 0.4);
}

/* Slide in animation on page load */
@keyframes slideUp {
  from { transform: translate(-50%, 100px); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
}

.bottom-nav {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>