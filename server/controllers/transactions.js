
import form from '../models/registerForm.js';
import mongoose from 'mongoose';

export const getTxns = async (req, res)=>{      //function for getting posts
    try{
        const txns= await form.find();   //looks for all messages with the same model as models/postMessage.js in the database 
        res.status(200).json(txns); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
}

export const getTxn = async (req, res)=>{      //function for getting posts
    const {id} = req.params;
    try{
        const txn= await form.findOne({userID: req.id, postID: id}).sort({date: -1});   //looks for all messages with the same model as models/postMessage.js in the database 
        console.log(txn);
        res.status(200).json(txn); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
}