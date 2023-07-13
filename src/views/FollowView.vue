<template>
    <div class="follow">
        <div class="title">Избранное</div>
        <be-images :images="images" />
        <be-loader v-if="loading" class="loader" />
    </div>
</template>

<script setup lang="ts">
import { fetchLikedImages } from '@/api/image/ImageApi'
import { onMounted, ref } from 'vue'
import BeLoader from '@/components/ui/BeLoader.vue'
import BeImages from '@/components/ui/BeImages.vue'

const images = ref([])
const loading = ref(false)
const fetchLikes = async () => {
    try {
        loading.value = true
        const { data } = await fetchLikedImages('bekarysalashybaev')
        images.value = data
    } catch (e) {
        alert(e)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchLikes()
})
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