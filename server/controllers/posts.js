import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';
export const getPosts = async (req, res)=>{      //function for getting posts
    const { page } = req.query;
    try{
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await PostMessage.countDocuments({});
        const posts= await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);   //looks for all messages with the same model as models/postMessage.js in the database 
        console.log(postMessages);
        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error){
        res.status(404).json({message:error.message});
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");
        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;
  
    const newPost = new PostMessage(post);          //creates a new postmessage
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({message:error.message});
    }
    
}
export const updatePost = async (req, res) =>{
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(_id)) return res(404).send("no post with that id");
    
    const updatedPost= await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
   
    
}

export const deletePost = async (req, res) =>{
    const {id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(id)) return res(404).send("no post with that id");
    const deletedPost= await PostMessage.findByIdAndRemove(id);
    res.json(deletedPost);
   
    
}