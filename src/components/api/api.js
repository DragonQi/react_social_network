import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {
        'API-KEY': '6a1315c1-3a31-49c8-b775-90135b06c639',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
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
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data;
        })
    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId).then(response => {
                return response.data;
        })
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status: status})
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
     login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data;
            })
    },
    logout() {
        return instance.delete('auth/login')
    }
}