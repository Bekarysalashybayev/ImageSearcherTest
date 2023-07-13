<template>
    <loader-icon class="loader" />
</template>

<script setup lang="ts">
import LoaderIcon from '../icons/LoaderIcon.vue'
</script>

<style scoped lang="scss">
.loader {
    animation: loader 1s linear infinite;
}

@keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>