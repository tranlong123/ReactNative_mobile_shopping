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
    formatPrice(num) {
        return num
            ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            : '0'
    },
    formatDate(date) {
        return date ? date : ''
    },
    getRandom(items) {
        const tempArray = [...items]
        const result = []
        while (tempArray.length > 0) {
            const index = Math.floor(Math.random() * tempArray.length)
            result.push(...tempArray.splice(index, 1))
        }
        return result
    },
}

export default helper
