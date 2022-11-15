import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';
import user from '../models/user.js';
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
  
    const newPost = new PostMessage({...post, creator: req.userID, createdAt: new Date().toISOString()});          //creates a new postmessage
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
    if(!mongoose.isValidObjectId(_id)) return res.status(404).send("no post with that id");
    
    const updatedPost= await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
   
    
}
export const getPost = async (req, res) =>{
    const {id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(id)) return res.status(404).send("no post with that id");
    
    const getPost= await PostMessage.findById(id);
    console.log("GetPost=", getPost)
    res.json(getPost);
   
    
}

export const deletePost = async (req, res) =>{
    const {id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(id)) return res.status(404).send("no post with that id");
    const deletedPost= await PostMessage.findByIdAndRemove(id);
    res.json(deletedPost);
   
    
}

export const registerPost = async (req, res)=>{
    const { id } = req.params;
    let date = new Date().toJSON();
    console.log(req.id);
    if (!req.id) {
        return res.json({ message: "Unauthenticated" });
    }
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);
    const foundUser= await user.findById(req.id);
    const index = post.registeredUsers.findIndex((_id) => _id === String(req.id));
    const valid= date<=Date(post.activeDate);
    console.log(post);
    console.log(valid);
    console.log(foundUser);
    console.log(index);
    if (index === -1 && valid) {
        post.registeredUsers.push(req.id);
        foundUser.registeredShows.push(id);
    } 
    else if(index !== -1 && valid) {
        post.registeredUsers = post.registeredUsers.filter((id) => id !== String(req.id));
        foundUser.registeredShows= foundUser.registeredShows.filter((eid) => eid !== id);
    }
    else{
        return res(404).send("Too late! :(");
    }
    console.log(foundUser);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    const updatedUser= await user.findByIdAndUpdate(req.id, foundUser, {new: true});
    console.log(updatedUser);
    res.status(200).json({
        updatedPost: updatedPost, 
        updatedUser: {'result':updatedUser,'token': req.headers.authorization.slice(7)}
    });

}