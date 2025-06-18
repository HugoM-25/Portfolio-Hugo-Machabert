<script setup lang="ts">
defineProps({
  activeDiv: String
})
</script>


<template>
  <nav class="bottom-nav">
    <a href="#" :class="{ active: activeDiv === 'home' }">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'home' }">
        <font-awesome-icon :icon="['fas', 'house']" />
      </div>
    </a>
    <a href="#apropos" :class="{ active: activeDiv === 'apropos' }">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'apropos' }">
        <font-awesome-icon :icon="['fas', 'user']" />
      </div>
    </a>
    <a href="#competence" :class="{ active: activeDiv === 'competence' }">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'competence' }">
        <font-awesome-icon :icon="['fas', 'book']" />
      </div>
    </a>
      <a href="#projet" :class="{ active: activeDiv === 'projet' }">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'projet' }">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
      </div>
    </a>
    <a href="#contact" :class="{ active: activeDiv === 'contact' }">
      <div class="icon-wrapper" :class="{ active: activeDiv === 'contact' }">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </div>
    </a>
  </nav>
</template>
  
<style scoped>
.bottom-nav {
  margin-bottom: 0.5%;
  position: fixed;
  bottom: 0;
  width: 25%;
  height: 60px;
  background: #242F42;
  display: flex;
  justify-content: space-around;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  opacity: 0.8;
}
a {
  text-decoration: none;
  font-size: 1.5rem;
  color: lightgrey;
}

.bottom-nav a:hover {
  color: inherit;
  text-decoration: none;
  background: none;
}

.icon-wrapper {
  height: 1.8em;
  width: 1.8em;
  color: lightgrey;
  padding: 0.6rem;
  border-radius: 50%;
  transition: background 0.3s, color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-wrapper.active {
  background-color: #4F5EE1;
}
</style>
  