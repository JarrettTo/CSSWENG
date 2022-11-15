import user from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
/*export const getUsers = async (req, res)=>{      //function for getting posts

    try{
        const users= await user.find();   //looks for all messages with the same model as models/postMessage.js in the database 
        console.log(users);
        res.status(200).json(users); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
}*/
export const signUp = async (req, res) =>{      
    const {email,password,confirmPassword, firstName, lastName, id, dlsu} = req.body;
  
             
    try{
        
        const foundUserEmail= await user.findOne({email: email})
        if(foundUserEmail) return res.status(400).json({message: "Account Already Exists!"});
        if(password!=confirmPassword)  return res.status(400).json({message: "Passwords don't match!"});
        const hashedPassword= await bcrypt.hash(password, 12);
        const newUser = await user.create({email: email, password: hashedPassword, firstName: firstName, lastName: lastName, id: id, admin: false, dlsu: false, claimed: false, registeredShows: []}) 
        const token = jwt.sign({id:newUser._id, email: newUser.email, isAdmin: newUser.admin},"dlsucao", {expiresIn: "2h"});
        console.log({result: newUser, token});
        res.status(200).json({result: newUser, token});    
    } catch(error){
        res.status(409).json({message:error.message});
    }
    
}
/*export const updatePost = async (req, res) =>{
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(_id)) return res(404).send("no post with that id");
    
    const updatedPost= await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
   
    
}*/
export const signIn = async (req, res) =>{        //signin
    const {email, password} = req.body;
    try{
        const foundUser= await user.findOne({email: email})
        if(!foundUser) return res.status(404).json({message: "User does not exist!"});
        const checkPassword= await bcrypt.compare(password, foundUser.password);
        if(!checkPassword) return res.status(400).json({message: "Invalid Password!"}); 
        const token = jwt.sign({id:foundUser._id, email: foundUser.email, isAdmin: foundUser.admin },"dlsucao", {expiresIn: "2h"});
        res.status(200).json({result: foundUser, token});
    } catch (error){
        res.status(500).json({message: "Something Went Wrong!"});
    }
    
   
    
}
/*export const deleteUser = async (req, res) =>{
    const {id} = req.params;
    const users = req.body;
    if(!mongoose.isValidObjectId(id)) return res(404).send("no post with that id");
    const deletedUser= await user.findByIdAndRemove(id);
    res.json(deletedUser);
   
    
}*/