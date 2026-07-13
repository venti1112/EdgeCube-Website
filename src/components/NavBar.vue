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

function openUrl(url: string) {
  window.open(url, '_blank')
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
        <mc-button variant="normal" size="small" class="desktop-github github-btn" @click="openUrl('https://github.com/venti1112/EdgeCube')" title="GitHub">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
        </mc-button>
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
          <mc-dropdown
            v-model="selectedLang"
            :options="langOptions"
            unselected-text=""
            class="mobile-lang-dropdown"
            @change="(idx: number) => { onLangChange(idx); menuOpen = false }"
          />
          <mc-button variant="normal" size="small" class="github-btn" @click="openUrl('https://github.com/venti1112/EdgeCube'); menuOpen = false" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
          </mc-button>
        </div>
      </div>
    </Transition>
  </div>
  <div v-if="menuOpen" class="menu-overlay" @click="menuOpen = false" />
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
  position: relative;
  z-index: 100;
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
  width: 112px;
  margin: 0 4px;
}

.desktop-github.github-btn {
  display: none;
}

@media (min-width: 1100px) {
  .nav-desktop-lang {
    display: inline-block;
  }

  .desktop-github.github-btn {
    display: inline-flex;
  }
}

.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 99;
}

.mobile-lang-divider {
  height: 1px;
  background: var(--mc-border-dark, #1E1E1F);
  opacity: 0.3;
  margin: 4px 0;
}

.mobile-lang-row {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

.mobile-lang-dropdown {
  width: 110px;
}

.github-btn {
  width: 40px;
  height: 40px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
