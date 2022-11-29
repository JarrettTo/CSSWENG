import PostMessage from '../models/postMessage.js';
import form from '../models/registerForm.js';
import mongoose from 'mongoose';
import user from '../models/user.js';
import { addLog, removeLog } from './attendance.js';
export const getPosts = async (req, res)=>{      //function for getting posts
    try{
        const postMessages= await PostMessage.find();   //looks for all messages with the same model as models/postMessage.js in the database 

        res.status(200).json(postMessages); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
}
export const createPost = async (req, res) =>{
    const post = req.body;
  
    const newPost = new PostMessage({...post, createdAt: new Date().toISOString()});          //creates a new postmessage
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
    const register =req.body;

    let date = new Date().toJSON();

    if (!req.id) {
        return res.json({ message: "Unauthenticated" });
    }
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);
    const foundUser= await user.findById(req.id);
    const registeredIndex = post.registeredUsers.findIndex((_id) => _id === String(req.id));
    const acceptedIndex = post.acceptedUsers.findIndex((_id) => _id === String(req.id));
    const valid= date<=Date(post.activeDate);
    let status, finalTxn;
    var claim=false;
  
    if (registeredIndex === -1 && acceptedIndex === -1 && valid) {
        if(foundUser.dlsu && !foundUser.claimed){
            post.acceptedUsers.push(req.id);
            foundUser.acceptedShows.push(id);
            foundUser.claimed=true;
            claim=true;
            
            status='Accepted';
            
        }
        else{
            post.registeredUsers.push(req.id);
            foundUser.registeredShows.push(id);
            status='Pending'
            

        }
        finalTxn = new form({userID: req.id, postID: id, selectedFile: register.payment, artPass: claim, status: status, firstName: foundUser.firstName, lastName: foundUser.lastName, dlsu_id: register.dlsu_id, contactNumber: register.contactNumber, degree: register.degree, college: register.college, altClass: register.altClass, email: foundUser.email, date: Date(post.activeDate)});
        console.log(finalTxn);
        try{
            await finalTxn.save();
            if(status=='Accepted'){
                await addLog(req.id, id, finalTxn._id);
            }
        } catch(error){
            return res.status(409).json({message:error.message});
        }
        
    } 
    else if((registeredIndex !== -1 || acceptedIndex!== -1) && valid) {
        post.registeredUsers = post.registeredUsers.filter((id) => id !== String(req.id));
        post.acceptedUsers = post.acceptedUsers.filter((id) => id !== String(req.id));
        foundUser.registeredShows= foundUser.registeredShows.filter((eid) => eid !== id);
        foundUser.acceptedShows= foundUser.acceptedShows.filter((eid) => eid !== id);
        const txn=await form.findOne({userID:req.id, postID:id}).sort({date: -1});
        txn.status='Cancelled';
        if(txn?.artPass){
            await removeLog(txn.userID, txn.postID, txn._id);
            foundUser.claimed=false;
        }
        finalTxn=await form.findByIdAndUpdate(txn._id, txn, {new: true});
    }
    else{
        return res(404).send("Too late! :(");
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    const updatedUser= await user.findByIdAndUpdate(req.id, foundUser, {new: true});
    console.log(updatedUser);
    return res.status(200).json({
        updatedPost: updatedPost, 
        updatedUser: {'result':updatedUser,'token': req.headers.authorization.slice(7)},
        txn:finalTxn,
    });

}