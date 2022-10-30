import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';
export const getPosts = async (req, res)=>{      //function for getting posts
    try{
        const postMessages= await PostMessage.find();   //looks for all messages with the same model as models/postMessage.js in the database 
        console.log(postMessages);
        res.status(200).json(postMessages); 
    } catch (error){
        res.status(404).json({message:error.message});
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