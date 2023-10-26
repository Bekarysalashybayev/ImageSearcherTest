<template>
    <div class="follow">
        <div class="title">Избранное</div>
        <be-images :images="followedImages" />
    </div>
</template>

<script setup lang="ts">
import BeImages from '@/components/ui/BeImages.vue'
import { useImageStore } from "@/stores/image-store";

const {followedImages} = useImageStore()

</script>

<style>
.follow {
    .title {
        font-weight: bold;
        font-size: 3rem;
        margin: 3rem 0;
        text-align: center;
    }

    .loader {
        display: block;
        margin: 0 auto;
    }
}
</style>
