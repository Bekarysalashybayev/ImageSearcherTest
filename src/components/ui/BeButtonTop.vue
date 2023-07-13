<template>
    <teleport to="body">
        <transition>
            <be-button v-if="scY > 700" class="btn-top" @click="scrollTop">
                <arrow-icon />
            </be-button>
        </transition>
    </teleport>
</template>
<script setup lang="ts">
import ArrowIcon from '../icons/ArrowIcon.vue'
import BeButton from './BeButton.vue'
import { onMounted, ref } from 'vue'

const scY = ref(0)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
    scY.value = window.scrollY
}

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style scoped lang="scss">
.btn-top {
    position: fixed;
    bottom: 3rem;
    right: 5rem;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>