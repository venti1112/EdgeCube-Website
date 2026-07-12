<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const features = tm('home.features') as unknown as { title: string; desc: string }[]
</script>

<template>
  <div class="intro-page">
    <div class="intro-header">
      <h1 class="intro-title">{{ t('intro.title') }}</h1>
      <p class="intro-desc">{{ t('intro.desc') }}</p>
    </div>
    <div class="features-grid">
      <mc-card v-for="(f, i) in features" :key="i">
        <template #title>
          <span class="feature-index">0{{ i + 1 }}</span>
          {{ f.title }}
        </template>
        {{ f.desc }}
      </mc-card>
    </div>
  </div>
</template>

<style scoped>
.intro-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

.intro-header {
  text-align: center;
  margin-bottom: 40px;
}

.intro-title {
  font-family: var(--mc-font-title, 'Minecraft Ten');
  font-size: 32px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 0 0 12px;
}

.intro-desc {
  font-size: 15px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.75;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.feature-index {
  font-family: var(--mc-font-title, 'Minecraft Ten');
  font-size: 12px;
  opacity: 0.5;
  margin-right: 6px;
}
</style>
