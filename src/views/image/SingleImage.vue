<template>
  <div class="image-page">
    <div class="image-page-header"></div>
    <be-single-image
        v-if="imageValue"
        :img="imageValue['urls']['small']"
        :liked_by_user="isLiked"
        @like="like"
        @download="download"
    />
  </div>
</template>
<script setup lang="ts">
import {useRoute} from 'vue-router'
import {useFetchSingleImages} from '@/views/composables/use-fetch-single-image'
import {computed} from 'vue'
import BeSingleImage from '@/components/ui/BeSingleImage.vue'
import {downloadImage} from '@/api/image/ImageApi'
import { storeToRefs } from "pinia";
import { useImageStore } from "@/stores/image-store";

const route = useRoute()

const id = computed(() => route.params.id.toString())
const {imageValue} = useFetchSingleImages(id.value)
const { followImage } = useImageStore()
const { followedImages,  } = storeToRefs(useImageStore())

const like = async () => {
  followImage({
    id: imageValue.value?.['id'] || '',
    url: imageValue.value?.['urls']['small'] || ''
  })
}


const isLiked = computed(() => {
  return !!followedImages.value.find(e => e.id == imageValue.value?.['id']);

})
const download = async () => {
  try {
    const {data} = await downloadImage(id.value)
    await saveImage(data.url)
  } catch (e) {
    alert(e)
  }
}

const saveImage = async (
    imageSrc: string,
    nameOfDownload = 'picture.png',
) => {
  const response = await fetch(imageSrc);

  const blobImage = await response.blob();

  const href = URL.createObjectURL(blobImage);

  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;

  document.body.appendChild(anchorElement);
  anchorElement.click();

  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
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
