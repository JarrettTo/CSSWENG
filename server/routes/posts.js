import express from 'express';
import {getPosts, createPost, updatePost} from '../controllers/posts.js';
const router= express.Router();

router.get('/', getPosts);          //triggers when localhost:5000/ is called. we also use the imported function getPosts from controllers/posts.js where we put all of the functionality so that this page looks clean and readable
router.post('/', createPost);
router.patch('/:id', updatePost);
export default router;