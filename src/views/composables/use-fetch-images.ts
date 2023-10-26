import { onMounted, ref } from 'vue'
import { fetchImage, fetchRandomImage } from '@/api/image/ImageApi'

export const useFetchImages = () => {
    const images = ref([])

    const loading = ref(false)

    const getRandomImage = async () => {
        try {
            loading.value = true
            const { data } = await fetchRandomImage()
            images.value = data
        } catch (e) {
            alert(e)
        } finally {
            loading.value = false
        }
    }
    const getImage = async (searchText: string, page = 1) => {
        try {
            loading.value = true
            const { data } = await fetchImage(searchText, page)
            images.value = images.value.concat(data.results)
        } catch (e) {
            alert(e)
        } finally {
            loading.value = false
        }
    }

    onMounted(async () => {
        await getRandomImage()
    })

    return {
        getRandomImage,
        getImage,
        images,
        loading
    }
}
