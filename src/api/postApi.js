import config from './config'

const posts = {
    getAll: () => config.get('posts'),
    addNew: (payload) => config.post('posts', payload),
    update: (id, payload) => config.update(`posts`, id, payload),
    delete: (id) => config.delete(`posts`, id),
    increase: (id) => config.increase(`posts`, id)
}


export default posts