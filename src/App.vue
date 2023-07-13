<template>
  <be-header />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import BeHeader from '@/components/ui/BeHeader.vue'
</script>

<style scoped></style>