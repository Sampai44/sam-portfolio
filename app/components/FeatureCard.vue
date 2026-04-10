<template>
  <div class="block" :class="{ 'education-block': type === 'edu' }">
    <div class="header-row">
      <h3>{{ title }}</h3>
    </div>
    <p>{{ description }}</p>
    <div class="pills">
      <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  tags: Array,
  type: String
})
</script>

<style scoped>
.block {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #e4e4e7;
}
.block h3 { margin-top: 0; color: #111; font-size: 1.2rem; }
.block p { color: #52525b; font-size: 0.95rem; line-height: 1.6; }
.pills { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 15px; }
.pills span {
  background: #f4f4f5;
  color: #3f3f46;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}
.education-block { border-left: 4px solid #e11d48; }
</style>
    