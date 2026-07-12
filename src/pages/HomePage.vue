<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function goDownload() {
  window.location.hash = '#download'
}

function goIntro() {
  window.location.hash = '#intro'
}

function goGithub() {
  window.open('https://github.com/venti1112/EdgeCube', '_blank')
}
</script>

<template>
  <div class="home-page">
    <div class="hero">
      <div class="hero-icon">
        <img src="/favicon.png" alt="EdgeCube" width="128" />
      </div>
      <h1 class="hero-title">{{ t('home.title') }}</h1>
      <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
      <p class="hero-tagline">{{ t('home.tagline') }}</p>
      <div class="hero-actions">
        <mc-button variant="primary" size="large" @click="goDownload" class="hero-btn">
          {{ t('home.startDownload') }}
        </mc-button>
        <mc-button variant="normal" size="large" @click="goIntro" class="hero-btn">
          {{ t('home.learnMore') }} →
        </mc-button>
        <mc-button variant="normal" size="large" @click="goGithub" class="hero-btn">
          GitHub
        </mc-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 48px);
}

.hero {
  text-align: center;
  padding: 48px 24px;
}

.hero-icon {
  margin-bottom: 20px;
}

.hero-title {
  font-family: var(--mc-font-title, 'Minecraft Ten');
  font-size: 64px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 0 0 12px;
}

.hero-subtitle {
  font-size: 26px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 0 0 12px;
  opacity: 0.9;
}

.hero-tagline {
  font-size: 17px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 0 0 36px;
  opacity: 0.7;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.hero-btn {
  font-size: 18px !important;
  padding: 18px 48px !important;
  min-width: 260px;
}
</style>
