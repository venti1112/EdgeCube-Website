<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const features = tm('about.features') as unknown as string[]
</script>

<template>
  <div class="about-page">
    <h1 class="page-title">{{ t('about.title') }}</h1>

    <mc-panel class="about-section">
      <p class="about-desc">{{ t('about.desc') }}</p>
      <ul class="about-features">
        <li v-for="(f, i) in features" :key="i">
          <mc-icon name="mc-check" /> {{ f }}
        </li>
      </ul>
    </mc-panel>

    <div class="about-grid">
      <mc-card :title="t('about.team')" :description="t('about.teamDesc')" />
      <mc-card :title="t('about.thanks')" :description="t('about.thanksDesc')" />
      <mc-card :title="t('about.license')" :description="t('about.licenseDesc')" />
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 48px 24px 64px;
  max-width: 720px;
  margin: 0 auto;
}

.page-title {
  font-family: var(--mc-font-title, 'Minecraft Ten');
  font-size: 36px;
  color: var(--mc-text-light, #D0D1D4);
  margin: 0 0 24px;
}

.about-section {
  margin-bottom: 24px;
}

.about-desc {
  font-size: 15px;
  color: var(--mc-text-light, #D0D1D4);
  opacity: 0.85;
  margin: 0 0 16px;
  line-height: 1.6;
}

.about-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.about-features li {
  color: var(--mc-text-light, #D0D1D4);
  padding: 4px 0;
  font-size: 14px;
  opacity: 0.85;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>
