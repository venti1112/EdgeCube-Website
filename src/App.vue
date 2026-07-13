<script setup lang="ts">
import { ref, shallowRef, watch, onMounted, markRaw } from 'vue'
import gsap from 'gsap'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'

const { t } = useI18n()
import HomePage from './pages/HomePage.vue'
import IntroPage from './pages/IntroPage.vue'
import DownloadPage from './pages/DownloadPage.vue'
import DocsPage from './pages/DocsPage.vue'
import AboutPage from './pages/AboutPage.vue'

const pageMap: Record<string, any> = {
  home: markRaw(HomePage),
  intro: markRaw(IntroPage),
  download: markRaw(DownloadPage),
  docs: markRaw(DocsPage),
  about: markRaw(AboutPage),
}

const initialHash = location.hash.slice(1) || 'home'
const currentPage = ref(pageMap[initialHash] ? initialHash : 'home')

const currentComponent = shallowRef(pageMap[currentPage.value])

function syncFromHash() {
  const hash = location.hash.slice(1) || 'home'
  if (pageMap[hash]) {
    currentPage.value = hash
    currentComponent.value = pageMap[hash]
  }
}

watch(currentPage, (val) => {
  if (location.hash !== '#' + val) {
    location.hash = val
  }
})

onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
})

function onEnter(el: Element, done: () => void) {
  gsap.fromTo(
    el,
    { scale: 0.5, opacity: 0, clipPath: 'inset(50%)' },
    { scale: 1, opacity: 1, clipPath: 'inset(0%)', duration: 0.4, ease: 'back.out(1.7)', clearProps: 'all', onComplete: done }
  )
}

function onLeave(el: Element, done: () => void) {
  gsap.to(el, {
    scale: 1.2,
    opacity: 0,
    clipPath: 'inset(50%)',
    duration: 0.25,
    ease: 'power2.in',
    clearProps: 'all',
    onComplete: done,
  })
}
</script>

<template>
  <mc-pop-host />
  <NavBar />
  <main>
    <Transition :css="false" @enter="onEnter" @leave="onLeave" mode="out-in">
      <component :is="currentComponent" :key="currentPage" />
    </Transition>
  </main>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-row">
        <span>{{ t('footer.version', ['202607132004(2)']) }}</span>
      </div>
      <div class="footer-row">
        <i18n-t keypath="footer.builtWith" tag="span">
          <a href="https://vuejs.org" target="_blank">Vue</a>
        </i18n-t>
        <i18n-t keypath="footer.usesMcui" tag="span">
          <a href="https://github.com/ShenYuanOR/mcui-oreui" target="_blank">McUI Vue</a>
        </i18n-t>
      </div>
      <div class="footer-row">
        <span>{{ t('footer.disclaimer') }}</span>
      </div>
      <div class="footer-row">
        <i18n-t keypath="footer.copyright" tag="span">
          <span>{{ new Date().getFullYear() }}</span>
          <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html" target="_blank">GPL-3.0</a>
          <a href="https://github.com/venti1112/EdgeCube-Website" target="_blank">GitHub</a>
        </i18n-t>
      </div>
    </div>
  </footer>
</template>

<style scoped>
main {
  padding-top: 48px;
  min-height: calc(100vh - 48px - 52px);
}

.app-footer {
  border-top: 2px solid var(--mc-border-dark, #1E1E1F);
  background: var(--mc-bg-panel, #58585A);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 24px;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 13px;
  opacity: 0.6;
  color: var(--mc-text-light, #D0D1D4);
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-inner a {
  color: inherit;
  text-decoration: underline;
}

.footer-row span {
  text-align: center;
}

</style>
