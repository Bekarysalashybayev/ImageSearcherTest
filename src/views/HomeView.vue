<template>
    <main>
        <be-search>
            <be-input class="be-input" v-model="searchText" @icon-clicked="search" />
        </be-search>
        <be-images :images="images" />
        <be-loader v-if="loading" class="loader" />
        <be-observer v-if="images.length && searchText" @intersect="intersect" />
        <be-button-top />
    </main>
</template>

<script setup lang="ts">
import BeSearch from '@/components/ui/BeSearch.vue'
import BeInput from '@/components/ui/BeInput.vue'
import { ref } from 'vue'
import BeLoader from '@/components/ui/BeLoader.vue'
import BeButtonTop from '@/components/ui/BeButtonTop.vue'
import { useFetchImages } from '@/views/composables/use-fetch-images'
import BeImages from '@/components/ui/BeImages.vue'
import BeObserver from '@/components/helper/BeObserver.vue'

const { images, loading, getImage } = useFetchImages()

const page = ref(1)

const searchText = ref('')
const search = async () => {
    if (!searchText.value) return
    images.value = []
    await getImage(searchText.value, page.value)
}

const intersect = async () => {
    page.value++
    await getImage(searchText.value, page.value)
}
</script>

<style scoped lang="scss">
.be-input {
    max-width: 866px;
}

.loader {
    display: block;
    margin: 0 auto;
}
</style>