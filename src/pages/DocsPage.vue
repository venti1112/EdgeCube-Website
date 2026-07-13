<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import MarkdownIt from 'markdown-it'
import { useI18n } from 'vue-i18n'

const md = new MarkdownIt({ html: true, linkify: true })
const { t, locale } = useI18n()

interface SidebarItem {
  labelZh: string
  labelEn: string
  file: string
}

interface SidebarGroup {
  labelZh: string
  labelEn: string
  items: SidebarItem[]
}

const sidebar: SidebarGroup[] = [
  {
    labelZh: '介绍', labelEn: 'Introduction',
    items: [
      { labelZh: '关于 EdgeCube', labelEn: 'About EdgeCube', file: 'index' },
    ],
  },
  {
    labelZh: '入门', labelEn: 'Getting Started',
    items: [
      { labelZh: '快速开始', labelEn: 'Quick Start', file: 'quick-start' },
      { labelZh: '常见问题', labelEn: 'FAQ', file: 'faq' },
    ],
  },
  {
    labelZh: '功能指南', labelEn: 'Guides',
    items: [
      { labelZh: '服务端核心', labelEn: 'Server Cores', file: 'server-cores' },
      { labelZh: '模组与插件', labelEn: 'Mods & Plugins', file: 'mods-plugins' },
      { labelZh: '远程访问', labelEn: 'Remote Access', file: 'remote-access' },
      { labelZh: '端口映射', labelEn: 'Port Mapping', file: 'port-mapping' },
      { labelZh: '玩家管理', labelEn: 'Player Management', file: 'player-management' },
    ],
  },
]

const currentFile = ref('index')
const contentHtml = ref('')
const loading = ref(true)
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}

function lang() {
  return locale.value === 'zh-CN' ? 'zh' : 'en'
}

function sidebarLabel(group: typeof sidebar[0]) {
  return lang() === 'en' ? group.labelEn : group.labelZh
}

function itemLabel(item: typeof sidebar[0]['items'][0]) {
  return lang() === 'en' ? item.labelEn : item.labelZh
}

async function loadDoc(file: string) {
  loading.value = true
  currentFile.value = file
  try {
    const mod = lang() === 'en'
      ? await import(`../docs/en/${file}.md?raw`)
      : await import(`../docs/zh/${file}.md?raw`)
    contentHtml.value = md.render(mod.default)
  } catch {
    contentHtml.value = lang() === 'en' ? '<p>Document not found</p>' : '<p>文档加载失败</p>'
  } finally {
    loading.value = false
  }
}

const flatItems = computed(() => sidebar.flatMap(g => g.items))
const currentIndex = computed(() => flatItems.value.findIndex(i => i.file === currentFile.value))
const prevDoc = computed(() => currentIndex.value > 0 ? flatItems.value[currentIndex.value - 1] : null)
const nextDoc = computed(() => currentIndex.value < flatItems.value.length - 1 ? flatItems.value[currentIndex.value + 1] : null)

watch(locale, () => {
  loadDoc(currentFile.value)
})

onMounted(() => {
  loadDoc('index')
})
</script>

<template>
  <div class="docs-layout">
    <div v-if="sidebarOpen" class="sidebar-overlay" @click="closeSidebar" />
    <aside class="docs-sidebar" :class="{ 'sidebar-open': sidebarOpen }">
      <div class="sidebar-header-mobile">
        <span class="sidebar-header-title">{{ lang() === 'en' ? 'TOC' : '目录' }}</span>
        <mc-button variant="normal" size="small" @click="closeSidebar">{{ t('nav.close') }}</mc-button>
      </div>
      <div v-for="group in sidebar" :key="group.labelZh" class="sidebar-group">
        <div class="sidebar-group-title">{{ sidebarLabel(group) }}</div>
        <div class="sidebar-items">
          <mc-button
            v-for="item in group.items"
            :key="item.file"
            class="sidebar-link"
            :variant="currentFile === item.file ? 'primary' : 'normal'"
            size="small"
            @click="loadDoc(item.file); closeSidebar()"
          >{{ itemLabel(item) }}</mc-button>
        </div>
      </div>
    </aside>
    <main class="docs-content">
      <div class="docs-toolbar">
        <mc-button variant="normal" size="small" class="sidebar-toggle" @click="toggleSidebar">
          ☰ {{ lang() === 'en' ? 'TOC' : '目录' }}
        </mc-button>
      </div>
      <div v-if="loading" class="loading-text">{{ lang() === 'en' ? 'Loading…' : '加载中…' }}</div>
      <article v-else class="markdown-body" v-html="contentHtml" />
      <div class="doc-footer">
        <mc-button
          v-if="prevDoc"
          variant="normal"
          size="small"
          @click="loadDoc(prevDoc.file)"
        >← {{ itemLabel(prevDoc) }}</mc-button>
        <span />
        <mc-button
          v-if="nextDoc"
          variant="normal"
          size="small"
          @click="loadDoc(nextDoc.file)"
        >{{ itemLabel(nextDoc) }} →</mc-button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.docs-layout {
  display: flex;
  gap: 0;
  min-height: calc(100vh - 52px);
}

.docs-sidebar {
  width: 220px;
  flex-shrink: 0;
  padding: 24px 12px;
  background: #313233;
  border-right: 2px solid var(--mc-border-dark, #1E1E1F);
  overflow-y: auto;
}

.sidebar-group {
  margin-bottom: 20px;
}

.sidebar-group-title {
  font-family: var(--mc-font-ui, 'Minecraft Seven');
  font-size: 13px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  padding: 0 8px;
}

.sidebar-items {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-link {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  text-transform: none;
  font-family: var(--mc-font-body, 'NotoSans Bold');
  letter-spacing: normal;
}



.docs-content {
  flex: 1;
  padding: 32px 40px 64px;
  overflow-y: auto;
  min-width: 0;
}

.loading-text {
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.6;
}

.doc-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.markdown-body {
  color: var(--mc-text-light, #D0D1D4);
  line-height: 1.7;
  font-size: 15px;
}

.markdown-body :deep(h1) {
  font-family: var(--mc-font-title, 'Minecraft Ten');
  font-size: 32px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 0 0 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--mc-border-dark, #1E1E1F);
}

.markdown-body :deep(h2) {
  font-family: var(--mc-font-ui, 'Minecraft Seven');
  font-size: 22px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 32px 0 12px;
}

.markdown-body :deep(h3) {
  font-size: 17px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 24px 0 8px;
}

.markdown-body :deep(p) {
  margin: 0 0 12px;
  opacity: 0.85;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 20px;
  margin: 0 0 12px;
}

.markdown-body :deep(li) {
  margin-bottom: 4px;
  opacity: 0.85;
}

.markdown-body :deep(strong) {
  color: var(--mc-text-light, #D0D1D4);
}

.markdown-body :deep(code) {
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 14px;
}

.markdown-body :deep(pre) {
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--mc-border-dark, #1E1E1F);
  overflow-x: auto;
  margin: 12px 0;
}

.markdown-body :deep(pre code) {
  background: none;
  padding: 0;
  font-size: 13px;
  line-height: 1.5;
}

.markdown-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
  font-size: 14px;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  padding: 8px 12px;
  border: 1px solid var(--mc-border-dark, #1E1E1F);
  text-align: left;
  opacity: 0.85;
}

.markdown-body :deep(th) {
  background: rgba(0, 0, 0, 0.2);
  font-family: var(--mc-font-ui, 'Minecraft Seven');
}

.markdown-body :deep(blockquote) {
  border-left: 3px solid var(--mc-green, #3C8527);
  margin: 12px 0;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.15);
  opacity: 0.85;
  font-size: 14px;
}

.markdown-body :deep(a) {
  color: #6bb5ff;
  text-decoration: underline;
  cursor: pointer;
}

.markdown-body :deep(hr) {
  border: none;
  border-top: 1px solid var(--mc-border-dark, #1E1E1F);
  margin: 24px 0;
}

.sidebar-overlay {
  display: none;
}

.sidebar-toggle {
  display: none;
}

.sidebar-header-mobile {
  display: none;
}

@media (max-width: 768px) {
  .sidebar-toggle {
    display: inline-flex;
    margin-bottom: 16px;
  }

  .sidebar-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
  }

  .sidebar-header-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px 12px;
    border-bottom: 1px solid var(--mc-border-dark, #1E1E1F);
    margin-bottom: 12px;
  }

  .sidebar-header-title {
    font-family: var(--mc-font-ui, 'Minecraft Seven');
    font-size: 14px;
    color: var(--mc-text-light, #D0D1D4);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .docs-sidebar {
    position: fixed;
    top: 48px;
    left: -260px;
    bottom: 0;
    width: 240px;
    z-index: 91;
    transition: left 0.2s ease;
    display: block;
    background: #313233;
  }

  .docs-sidebar.sidebar-open {
    left: 0;
  }

  .docs-content {
    padding: 24px 16px 48px;
  }

  .docs-toolbar {
    display: block;
  }
}

@media (min-width: 769px) {
  .docs-toolbar {
    display: none;
  }
}
</style>
