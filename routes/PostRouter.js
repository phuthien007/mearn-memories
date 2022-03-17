import express from "express"
import { createPosts, getPosts, updatePost, deletePost, increaseLike } from "../controllers/PostController.js"
const router = express.Router()

router.get('/', getPosts)
router.post('/', createPosts)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id', increaseLike)
export default router