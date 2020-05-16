import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0f9ad5aa-2370-4567-a6c9-c2e808e281c0'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    profile(userId) {
        return profileAPI.profile(userId)
    }
};

export const profileAPI = {
    profile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },
    saveAvatar(avatarFile) {
        const formData = new FormData();
        formData.append('image', avatarFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

};