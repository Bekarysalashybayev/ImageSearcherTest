<template>
    <div class="be-search">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.be-search {
    height: 268px;
    background-image: url('@/assets/img/bg-search-large.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;

    @media screen and (max-width: 767px) {
        background-image: url('@/assets/img/bg-search.png');
        height: 230px;
    }
}
</style>
