import mongoose from "mongoose"
import PostModel from "../models/PostModel.js"

const getPosts = (req, res) => {
    try {
        PostModel.find({})
            .then(data => {
                res.status(200).json(data)
            }).catch(err => {
                res.status(500).json({ message: err.message })
            })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPosts = (req, res) => {
    const body = req.body
    // if (body.tags) {
    //     let tmp = []
    //     for (let item of body.tags.split(',')) {
    //         tmp = [...tmp, item]
    //     }
    //     body.tags = [...tmp]
    // }
    const newPost = new PostModel(body)
    try {
        newPost.save()
            .then(data => {
                res.status(201).json(data)
            }).catch(err => {
                res.status(500).json({ message: err.message })
            })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updatePost = (req, res) => {
    const id = req.params.id
    PostModel.findById(id).then(data => {
        if (data) {
            // if (req.body.tags) {
            //     let tmp = []
            //     for (let item of req.body.tags.split(',')) {
            //         tmp = [...tmp, item]
            //     }
            //     req.body.tags = [...tmp]
            // }
            PostModel.findByIdAndUpdate(id, req.body, { new: true })
                .then(data => {
                    if (data) {
                        res.json(data)
                    }
                }).catch(err => {
                    res.status(400).send(err.message)
                })
        } else {
            res.status(404).json({ "message": "Not Found With Id: " + id })
        }
    })

}

const deletePost = (req, res) => {
    const id = req.params.id
    PostModel.findById(id).then(data => {
        if (data) {
            PostModel.findByIdAndDelete(id)
                .then(data => {
                    if (data) {
                        res.json("Delete success")
                    }
                }).catch(err => {
                    res.status(400).send(err.message)
                })
        } else {
            res.status(404).json({ "message": "Not Found With Id: " + id })
        }
    })
}

const increaseLike = (req, res) => {
    const id = req.params.id
    PostModel.findById(id).then(data => {
        if (data) {
            let newData = { likeCount: data.likeCount + 1 }
            console.log(newData)
            PostModel.findByIdAndUpdate(id, newData, { new: true })
                .then(data => {
                    if (data) {
                        res.json(data)
                    }
                }).catch(err => {
                    res.status(400).send(err.message)
                })
        } else {
            res.status(404).json({ "message": "Not Found With Id: " + id })
        }
    })
}

export {
    getPosts, createPosts, updatePost, deletePost, increaseLike
}