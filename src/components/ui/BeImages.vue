<template>
    <div class="images">
        <div class="container">
            <div class="images-block">
                <template v-for="(img, i) in images" >
                    <img v-if="img" :key="i" :src="img?.urls?.small || img['url']" alt="" @click="goTo(img.id)" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from "@/router";

defineProps<{
  images: {
    id: string,
    url?: string,
    urls?: {
      small: string
    }
  }[]
}>()

const goTo = (id: string) => router.push(`/image/${id}`)
</script>

<style scoped lang="scss">
.images {
    padding: 2rem 0;

    &-block {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        img {
            min-width: 280px;
            width: 335px;
            height: 335px;
            min-height: 280px;
            object-fit: cover;
            cursor: pointer;
        }
    }
}
</style>
