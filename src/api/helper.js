import axios from 'axios'

const helper = {
    async get(url) {
        const response = await axios.get(url, {
            withCredentials: true,
        })
        return response
    },
    async post(url, payload = {}) {
        const response = await axios.post(url, payload, {
            withCredentials: true,
        })
        return response
    },
    async put(url, payload = {}) {
        const response = await axios.put(url, payload, {
            withCredentials: true,
        })
        return response
    },
}

export default helper
