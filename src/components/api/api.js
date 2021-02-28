import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {
        'API-KEY': '6a1315c1-3a31-49c8-b775-90135b06c639'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getAuthMe () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    getFollow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getUnfollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile (userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data;
        })
    }
}