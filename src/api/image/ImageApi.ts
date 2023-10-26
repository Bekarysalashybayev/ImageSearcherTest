import http from '@/service/http'

const PER_PAGE = 15
export const fetchLikedImages = (username: string) => http.get(`/users/${username}/likes`)
export const fetchSingleImage = (id: string) => http.get(`/photos/${id}`)
export const likeImage = (id: string) => http.post(`/photos/${id}/like`)
export const unlikeImage = (id: string) => http.delete(`/photos/${id}/like`)
export const downloadImage = (id: string) => http.get(`/photos/${id}/download`)

export const fetchImage = (query: string, page = 1) =>
    http.get(`search/photos/?query=${query}&per_page=${PER_PAGE}&page=${page}`)
export const fetchRandomImage = () => http.get(`/photos/random/?count=${PER_PAGE}`)
