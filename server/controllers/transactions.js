
import form from '../models/registerForm.js';
import { addLog, removeLog } from './attendance.js';
import mongoose from 'mongoose';

export const getTxns = async (req, res)=>{      //function for getting posts
    try{
        const txns= await form.find();   //looks for all messages with the same model as models/postMessage.js in the database 
        console.log("it ran")
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

export const approveTxn = async (req, res)=>{      //function for getting posts
    const {id} = req.params;
    const post=req.body;
    try{
        const txn= await form.findById(id).sort({date: -1});   //looks for all messages with the same model as models/postMessage.js in the database 
        txn.status="Accepted";
        await form.findByIdAndUpdate(txn._id, txn, {new: true});
        await addLog(txn.userID, txn.postID, txn._id,txn.email, post.title, post.date, txn.firstName + txn.lastName);
        res.status(200).json(txn); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
    
}
export const declineTxn = async (req, res)=>{      //function for getting posts
    const {id} = req.params;
    try{
        const txn= await form.findById(id).sort({date: -1});   //looks for all messages with the same model as models/postMessage.js in the database 
        txn.status="Cancelled";
        await removeLog(txn.userID, txn.postID, txn._id);
        await form.findByIdAndUpdate(txn._id, txn, {new: true});
        
        res.status(200).json(txn); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
    
}