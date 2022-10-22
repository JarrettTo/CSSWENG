import PostMessage from '../models/postMessage.js';
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
    res.send('Post');
}