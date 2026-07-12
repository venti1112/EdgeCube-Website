<script setup lang="ts">
import { ref, shallowRef, watch, onMounted, markRaw } from 'vue'
import gsap from 'gsap'
import NavBar from './components/NavBar.vue'
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
        <span>当前网页版本：202607122305(1)</span>
      </div>
      <div class="footer-row">
        <span>本网页使用 <a href="https://vuejs.org" target="_blank">Vue</a> 构建</span>
        <span>使用 <a href="https://github.com/ShenYuanOR/mcui-oreui" target="_blank">McUI Vue</a> UI 组件</span>
      </div>
      <div class="footer-row">
        <span>本软件和开发团队与 Mojang、Microsoft 无任何关联，亦非其认可项目。Minecraft 为 Mojang AB 注册商标</span>
      </div>
      <div class="footer-row">
        <span>© {{ new Date().getFullYear() }} EdgeCube 开发团队版权所有，使用 <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html" target="_blank">GPL-3.0</a> 在 <a href="https://github.com/venti1112/EdgeCube-Website" target="_blank">GitHub</a> 上开源</span>
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
