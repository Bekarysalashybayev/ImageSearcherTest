<template>
    <div class="images">
        <div class="container">
            <div class="images-block">
                <template v-for="(img, i) in images" :key="i">
                    <img v-if="img" :src="img['urls']['full']" alt="" @click="goTo(img['id'])" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from "@/router";

defineProps({
    images: {
        type: Array,
        default: () => []
    }
})

const goTo = (id: string) => router.push(`/image/${id}`)
</script>

<style scoped lang="scss">
.images {
    padding: 2rem 0;

    &-block {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
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