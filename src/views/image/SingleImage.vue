<template>
    <div class="image-page">
        <div class="image-page-header"></div>
        <be-single-image
            v-if="imageValue"
            :img="imageValue['urls']['full']"
            :liked_by_user="imageValue['liked_by_user']"
            @like="like"
            @download="download"
        />
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetchSingleImages } from '@/views/composables/use-fetch-single-image'
import { computed } from 'vue'
import BeSingleImage from '@/components/ui/BeSingleImage.vue'
import { downloadImage, likeImage, unlikeImage } from '@/api/image/ImageApi'

const route = useRoute()

const id = computed(() => route.params.id.toString())
const { imageValue } = useFetchSingleImages(id.value)
const like = async () => {
    try {
        if (!imageValue.value?.['liked_by_user']) {
            const { data } = await likeImage(id.value)
            imageValue.value = data
        } else {
            const { data } = await unlikeImage(id.value)
            imageValue.value = data
        }
    } catch (e) {
        alert(e)
    }
}
const download = async () => {
    try {
        const { data } = await downloadImage(id.value)
        const link = document.createElement('a')
        link.download = 'picture.png'
        link.href = data.url
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    } catch (e) {
        alert(e)
    }
}
</script>

<style scoped lang="scss">
.image-page {
    &-header {
        position: absolute;
        width: 100%;
        z-index: -1;
        background-image: linear-gradient(#363636, rgba(16, 16, 16, 0.5)),
            url('@/assets/img/bg-image-single.png');
        height: 70vh;

        @media screen and (max-width: 500px) {
            display: none;
        }
    }
}
</style>