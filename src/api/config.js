import axios from "axios"

const url = 'http://localhost:5000/api/v1'

const config = {
    get: (uri) => axios.get(`${url}/${uri}`),
    post: (uri, payload) => axios.post(`${url}/${uri}`,payload),
    update: (uri,id, payload) => axios.patch(`${url}/${uri}/${id}`,payload),
    delete: (uri, id) => axios.delete(`${url}/${uri}/${id}`),
    increase: (uri, id) => axios.put(`${url}/${uri}/${id}`)
}


export default config