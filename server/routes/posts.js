import express from 'express';
import { getPostsBySearch, getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js';
const router= express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);          //triggers when localhost:5000/ is called. we also use the imported function getPosts from controllers/posts.js where we put all of the functionality so that this page looks clean and readable
router.post('/', createPost);
router.patch('/:id', updatePost);       //:id means it tales in an idea, so when localhost:5000/posts/123123 123123 is the id
router.delete('/:id', deletePost);
export default router;