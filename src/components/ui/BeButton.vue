<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    cursor: pointer;
    padding: 2rem;
}
</style>
