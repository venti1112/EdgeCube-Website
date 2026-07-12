<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const navItems = [
  { key: 'home', hash: '#home' },
  { key: 'intro', hash: '#intro' },
  { key: 'download', hash: '#download' },
  { key: 'docs', hash: '#docs' },
  { key: 'about', hash: '#about' },
]

const currentHash = ref(window.location.hash || '#home')
const pageKeys = navItems.map(i => i.hash)
if (currentHash.value !== '#home' && !pageKeys.includes(currentHash.value)) {
  currentHash.value = '#home'
}
const menuOpen = ref(false)

const langOptions = ['简体中文', 'English']
const selectedLang = ref(locale.value === 'zh-CN' ? 1 : 2)

function syncHash() {
  const hash = window.location.hash || '#home'
  currentHash.value = hash
}

function setPage(hash: string) {
  window.location.hash = hash
  currentHash.value = hash
  menuOpen.value = false
}

function onLangChange(idx: number) {
  const lang = idx === 1 ? 'zh-CN' : 'en'
  locale.value = lang
  localStorage.setItem('edgecube-lang', lang)
  selectedLang.value = idx
}

function isActive(item: { key: string; hash: string }) {
  return currentHash.value === item.hash || (item.key === 'home' && !window.location.hash)
}

watch(currentHash, () => {
  menuOpen.value = false
})

onMounted(() => {
  window.addEventListener('hashchange', syncHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', syncHash)
})
</script>

<template>
  <div class="nav-wrapper">
    <mc-appbar>
      <template #left>
        <img src="/favicon.png" alt="EdgeCube" class="nav-logo" />
        <span class="nav-title">EdgeCube</span>
      </template>
      <template #right>
         <div class="nav-desktop">
          <mc-button
            v-for="item in navItems"
            :key="item.key"
            :variant="isActive(item) ? 'primary' : 'normal'"
            size="small"
            @click="setPage(item.hash)"
          >
            {{ t('nav.' + item.key) }}
          </mc-button>
        </div>
        <mc-dropdown
          v-model="selectedLang"
          :options="langOptions"
          unselected-text=""
          class="nav-desktop-lang"
          @change="onLangChange"
        />
        <mc-button
          variant="normal"
          size="small"
          class="menu-toggle"
          @click="menuOpen = !menuOpen"
        >
          <span class="hamburger" :class="{ open: menuOpen }">
            <span class="bar" />
            <span class="bar" />
            <span class="bar" />
          </span>
        </mc-button>
      </template>
    </mc-appbar>
    <Transition name="menu-slide">
      <div v-if="menuOpen" class="mobile-menu">
        <mc-button
          v-for="item in navItems"
          :key="item.key"
          :variant="isActive(item) ? 'primary' : 'normal'"
          class="mobile-nav-item"
          @click="setPage(item.hash)"
        >
          {{ t('nav.' + item.key) }}
        </mc-button>
        <div class="mobile-lang-divider" />
        <div class="mobile-lang-row">
          <mc-button
            :variant="locale === 'zh-CN' ? 'primary' : 'normal'"
            class="mobile-nav-item"
            @click="onLangChange(1); menuOpen = false"
          >中文</mc-button>
          <mc-button
            :variant="locale === 'en' ? 'primary' : 'normal'"
            class="mobile-nav-item"
            @click="onLangChange(2); menuOpen = false"
          >EN</mc-button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.nav-logo {
  height: 32px;
  width: auto;
  vertical-align: middle;
  margin-right: 8px;
}

.nav-title {
  font-family: var(--mc-font-ui, 'Minecraft Seven');
  font-size: 20px;
  font-weight: 700;
  vertical-align: middle;
}

.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  overflow: visible;
}

:deep(.mc-appbar) {
  padding: 4px 12px;
  min-height: 38px;
}

.nav-desktop {
  display: none;
  gap: 4px;
}

.menu-toggle {
  display: inline-flex;
}

@media (min-width: 1100px) {
  .nav-desktop {
    display: inline-flex;
  }
  .menu-toggle {
    display: none;
  }
}

.hamburger {
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 0;
  transition: transform 0.2s;
}

.hamburger.open {
  transform: rotate(90deg);
}

.bar {
  display: block;
  width: 14px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 12px;
  background: var(--mc-bg-header, #E6E8EB);
  border-bottom: 3px solid #B1B2B5;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.15);
}

.mobile-nav-item {
  width: 100%;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.2s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.nav-desktop-lang {
  display: none;
  min-width: 100px;
  margin: 0 4px;
}

@media (min-width: 1100px) {
  .nav-desktop-lang {
    display: inline-block;
  }
}

.mobile-lang-divider {
  height: 1px;
  background: var(--mc-border-dark, #1E1E1F);
  opacity: 0.3;
  margin: 4px 0;
}

.mobile-lang-row {
  display: flex;
  gap: 4px;
}
</style>
