<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { showPop } from 'mcui-oreui'

const { t, locale } = useI18n()

interface DownloadLink {
  name: string
  url: string
  type: string
  extra: string
}

interface UpdateEntry {
  version: string
  build: number
  sha256: string
  releaseNotes: string
  download_links: DownloadLink[]
}

interface UpdatesJson {
  stable: UpdateEntry
  beta: UpdateEntry
}

const data = ref<UpdatesJson | null>(null)
const loading = ref(true)
const error = ref(false)
const copiedKey = ref('')

function openUrl(url: string) {
  window.open(url, '_blank')
}

async function copyLink(key: string, url: string) {
  try {
    await navigator.clipboard.writeText(url)
    copiedKey.value = key
    showPop(locale.value === 'zh-CN' ? '已复制到剪贴板' : 'Copied to clipboard', 2500, 'success')
    setTimeout(() => { copiedKey.value = '' }, 3000)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = url
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copiedKey.value = key
    showPop(locale.value === 'zh-CN' ? '已复制到剪贴板' : 'Copied to clipboard', 2500, 'success')
    setTimeout(() => { copiedKey.value = '' }, 3000)
  }
}

onMounted(async () => {
  try {
    const res = await fetch('https://edgecube-files.ventichat.com/app/updates.json')
    const json: UpdatesJson = await res.json()
    data.value = json
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="download-page">
    <h1 class="page-title">{{ t('download.title') }}</h1>
    <p class="page-subtitle">{{ t('download.subtitle') }}</p>

    <p v-if="loading" class="loading-text">加载中…</p>
    <p v-else-if="error" class="loading-text">无法获取版本信息</p>

    <template v-if="data">
        <div v-for="(entry, vkey) in { stable: data.stable, beta: data.beta }" :key="vkey" class="version-block">
        <div class="version-header">
          <h2 class="version-label">{{ vkey === 'stable' ? (locale === 'zh-CN' ? '正式版' : 'Stable') : (locale === 'zh-CN' ? '测试版' : 'Beta') }}</h2>
          <span class="version-number">{{ entry.version }}</span>
          <span class="version-build">Build {{ entry.build }}</span>
        </div>

        <div class="sha256-line">
          <strong>SHA256:</strong>
          <code class="sha256">{{ entry.sha256 }}</code>
        </div>

        <div class="notes-row">
          <div class="notes-title">更新日志</div>
          <pre class="notes-text">{{ entry.releaseNotes }}</pre>
        </div>

        <div class="link-list">
          <div v-for="(link, li) in entry.download_links" :key="vkey + '-' + li" class="link-row">
            <div class="link-info">
              <span class="link-name">{{ link.name }}</span>
              <span class="link-desc">{{ link.extra }}</span>
            </div>
            <div class="link-actions">
              <mc-button variant="normal" size="small" @click="copyLink(vkey + '-' + li, link.url)">
                {{ copiedKey === vkey + '-' + li ? '已复制' : '复制' }}
              </mc-button>
              <mc-button variant="primary" size="small" @click="openUrl(link.url)">下载</mc-button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.download-page {
  padding: 48px 24px 64px;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-family: var(--mc-font-title, 'Minecraft Ten');
  font-size: 36px;
  color: var(--mc-text-light, #D0D1D4);
  text-align: center;
  margin: 0 0 8px;
}

.page-subtitle {
  font-size: 16px;
  color: var(--mc-text-light, #D0D1D4);
  text-align: center;
  opacity: 0.8;
  margin: 0 0 40px;
}

.loading-text {
  text-align: center;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.6;
  font-size: 15px;
}

.version-block {
  margin-bottom: 40px;
}

.version-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}

.version-label {
  font-family: var(--mc-font-title, 'Minecraft Ten');
  font-size: 24px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 0;
}

.version-number {
  font-size: 18px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.9;
}

.version-build {
  font-size: 13px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.6;
}

.sha256-line {
  font-size: 13px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.7;
  margin-bottom: 12px;
  word-break: break-all;
}

.sha256 {
  font-size: 12px;
  margin-left: 4px;
}

.notes-row {
  padding: 12px 16px;
  margin-bottom: 8px;
  background: var(--mc-bg-panel, #58585A);
  border: 2px solid var(--mc-border-dark, #1E1E1F);
  border-radius: 4px;
}

.notes-title {
  font-family: var(--mc-font-ui, 'Minecraft Seven');
  font-size: 14px;
  color: var(--mc-text-light, #D0D1D4);
  margin-bottom: 6px;
}

.notes-text {
  font-size: 13px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.85;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 0;
  font-family: inherit;
}

.link-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  background: var(--mc-bg-panel, #58585A);
  border: 2px solid var(--mc-border-dark, #1E1E1F);
  border-radius: 4px;
}

.link-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.link-name {
  font-family: var(--mc-font-ui, 'Minecraft Seven');
  font-size: 15px;
  color: var(--mc-text-light, #D0D1D4);
}

.link-desc {
  font-size: 12px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.link-actions {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
</style>
