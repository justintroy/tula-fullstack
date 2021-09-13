import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const fetchPoems = () => API.get('/poems');
export const createPoem = (newPoem) => API.post('/poems', newPoem)
export const updatePoem = (id, updatedPoem) => API.patch(`/poems/${id}`, updatedPoem)
export const deletePoem = (id) => API.delete(`/poems/${id}`)
export const likePoem = (id) => API.patch(`/poems/${id}/like`)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)