import { onMounted, ref } from "vue";
import { fetchSingleImage } from "@/api/image/ImageApi";

export const useFetchSingleImages = (id: string) => {
    const imageValue = ref(null)
    const fetchImage = async () => {
        try {
            const {data} = await fetchSingleImage(id)
            imageValue.value = data
        }catch (e) {
            alert(e)
        }
    }

    onMounted(async () => {
        await fetchImage()
    })

    return {
        imageValue,
        fetchImage
    }
}
