import { ref } from "vue";
import { defineStore } from "pinia";

interface IFollowImage {
  id: string,
  url: string
}

export const useImageStore = defineStore("counter", () => {
  const followedImages = ref<IFollowImage[]>(
    JSON.parse(localStorage.getItem('follow') || '[]')
  );

  const followImage = (image: IFollowImage) => {

    if (!image.id) return;

    const has = followedImages.value.filter(e => e.id === image.id);

    if (has.length) {
      removeImage(image.id);
      return;
    }

    followedImages.value.push(image);
    localStorage.setItem('follow', JSON.stringify(followedImages.value))
  };

  const removeImage = (id: string) => {
    followedImages.value = followedImages.value.filter(e => e.id != id);
    localStorage.setItem('follow', JSON.stringify(followedImages.value))
  };

  return { followedImages, followImage, removeImage };
});
