import { ApiPost } from "../api";


// action creator
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await ApiPost.getAll()
        dispatch({
            type: 'FETCH_ALL',
            payload: data,
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await ApiPost.addNew(post)
        dispatch({
            type: 'CREATE',
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await ApiPost.update(id, post)
        dispatch({
            type: 'UPDATE',
            payload: data,
        })
    } catch (error) {
        console.log(error)

    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const { status } = await ApiPost.delete(id)
        if (status === 200) {
            dispatch({
                type: 'DELETE',
                payload: id,
            })
        } else {
            console.log("error");
        }

    } catch (error) {
        console.log(error)

    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await ApiPost.increase(id)
        dispatch({
            type: 'LIKE',
            payload: data,
        })
    } catch (error) {
        console.log(error)

    }
}
