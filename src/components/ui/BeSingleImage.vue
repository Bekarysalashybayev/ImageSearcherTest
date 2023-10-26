<template>
    <div class="container">
        <div class="single-image">
            <div class="single-image__header">
                <be-user />
                <div class="actions">
                    <be-button class="like" @click="like">
                        <like-icon :is-liked="liked_by_user"/>
                    </be-button>
                    <be-button class="download" @click="downloadPhoto">
                        <download-icon />
                        <span> Download </span>
                    </be-button>
                </div>
            </div>
            <img :src="img" alt="picture" class="picture" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BeUser from '@/components/ui/BeUser.vue'
import BeButton from '@/components/ui/BeButton.vue'
import LikeIcon from '@/components/icons/LikeIcon.vue'
import DownloadIcon from '@/components/icons/DownloadIcon.vue'

defineProps({
    img: {
        type: String,
        required: true
    },
    liked_by_user: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['like', 'download'])

const like = () => emit('like')

const downloadPhoto = () => emit('download')
</script>

<style scoped lang="scss">
.single-image {
    padding: 4rem 0 2rem;

    &__header {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .actions {
            display: flex;
            align-items: center;

            .download {
                margin-left: 10px;
                background-color: #fff200;
                display: flex;
                align-items: center;

                span {
                    margin-left: 10px;
                    font-size: 1.8rem;
                }

                @media screen and (max-width: 500px) {
                    span {
                        display: none;
                    }
                }
            }
        }
    }

    .picture {
        width: 100%;
        max-height: 60vh;
        object-fit: cover;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
}
</style>
