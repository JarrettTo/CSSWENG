/*@brief: API functions pertaining to transactions
* @author: Justin To and Daniel Capinpin
*/
import user from '../models/user.js';
import form from '../models/registerForm.js';
import { addLog, removeLog } from './attendance.js';
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';




/*@brief: get all transactions
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const getTxns = async (req, res)=>{      
    try{
        const txns= await form.find();   //looks for all messages with the same model as models/registerform.js in the database 
        console.log("it ran")
        res.status(200).json(txns); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
}
/*@brief: delete a particular post
* @params: req, res
* req: server request
* res: server response
* @author: Daniel Capinpin
*/
export const getTxnsBySearch = async (req, res)=>{ 
    console.log("Checking txns");
    console.log(req.query);
    console.log("showing txns");
    console.log(req.query.txnsrchquery);     //function for getting posts
    try{
        const title = new RegExp(req.query.txnsrchquery, "i");
        console.log("trying to search in controller")
        console.log(title)
    } catch (error){
        res.status(404).json({message:error.message});
    }
}

/*@brief: get a particular transaction
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const getTxn = async (req, res)=>{      
    const {id} = req.params;
    try{
        const txn= await form.findOne({userID: req.id, postID: id}).sort({date: -1});   //looks for all messages with the same model as models/postMessage.js in the database 
        console.log(txn);
        res.status(200).json(txn); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
}

/*@brief: approve a particular transaction
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const approveTxn = async (req, res)=>{      
    const {id} = req.params;
    const post=req.body;
    try{
        const txn= await form.findById(id).sort({date: -1});                        //looks for transaction from the database with certain txn id
        txn.status="Accepted";
        console.log("Here");
        const foundPost=await PostMessage.findById(txn.postID);
        const foundUser = await user.findById(txn.userID);
        console.log(foundUser)
        var index = foundUser.registeredShows.indexOf(txn.postID);
        if (index > -1) {                                                        // only splice array when item is found
            foundUser.registeredShows.splice(index, 1);                             // 2nd parameter means remove one item only
            foundUser.acceptedShows.push(txn.postID)
        }
        index=foundPost.registeredUsers.indexOf(txn.userID);
        if (index > -1) {                                                       // only splice array when item is found
            foundPost.registeredUsers.splice(index, 1);                         // 2nd parameter means remove one item only
            foundPost.acceptedUsers.push(txn.userID)
        }
        console.log(foundUser)
        await user.findByIdAndUpdate(foundUser._id,foundUser,{new: true});                  //update user, post, transaction
        await PostMessage.findByIdAndUpdate(foundPost._id,foundPost,{new: true});
        await form.findByIdAndUpdate(txn._id, txn, {new: true});
        await addLog(txn.userID, txn.postID, txn._id,txn.email, post.title, post.date, txn.firstName + txn.lastName);
        res.status(200).json(txn); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
    
}


/*@brief: decline a transaction
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const declineTxn = async (req, res)=>{      
    const {id} = req.params;
    
    try{
        const txn= await form.findById(id).sort({date: -1});   //looks for all messages with the same model as models/postMessage.js in the database 
        txn.status="Cancelled";
        await removeLog(txn.userID, txn.postID, txn._id);
        await form.findByIdAndUpdate(txn._id, txn, {new: true});
        
        const post=await PostMessage.findById(txn.postID);
        const foundUser = await user.findById(txn.userID);
        var index = foundUser.registeredShows.indexOf(txn.postID);              // remove user from show's registered users, remove show from user's registerd shows
        if (index > -1) {                                               // only splice array when item is found
            foundUser.registeredShows.splice(index, 1);                                 // 2nd parameter means remove one item only
        }
        index = foundUser.acceptedShows.indexOf(txn.postID);
        if (index > -1) {                                                               // only splice array when item is found
            foundUser.acceptedShows.splice(index, 1);                                           // 2nd parameter means remove one item only
        }
        index=post.registeredUsers.indexOf(txn.userID);
        if (index > -1) {                                               // only splice array when item is found
            post.registeredUsers.splice(index, 1);                              // 2nd parameter means remove one item only
        }
        index=post.acceptedUsers.indexOf(txn.userID);
        if (index > -1) {                                           // only splice array when item is found
            post.acceptedUsers.splice(index, 1);                            // 2nd parameter means remove one item only
        }
        post.noOfAttendees-=1;
        if(post.noOfAttendees<post.maxAttendees && (post.status=="maxClosed")){
            post.status="Open"
        }
        await PostMessage.findByIdAndUpdate(post._id,post,{new: true});
        await user.findByIdAndUpdate(foundUser._id,foundUser,{new: true});
        
        

        res.status(200).json(txn); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
    
}