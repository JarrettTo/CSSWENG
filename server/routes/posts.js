import express from 'express';
import {getPosts, createPost, updatePost, deletePost, registerPost, getPost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router= express.Router();

router.get('/', getPosts);          //triggers when localhost:5000/ is called. we also use the imported function getPosts from controllers/posts.js where we put all of the functionality so that this page looks clean and readable
router.post('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);       //:id means it tales in an idea, so when localhost:5000/posts/123123 123123 is the id
router.delete('/:id', auth, deletePost);
router.post('/:id/registerPost', auth, registerPost);
//router.get('/:id', getPost);
export default router;