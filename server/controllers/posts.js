/*@brief: API functions pertaining to posts
* @author: Justin To and Daniel Capinpin
*/
import PostMessage from '../models/postMessage.js';
import form from '../models/registerForm.js';
import mongoose from 'mongoose';
import user from '../models/user.js';
import { addLog, removeLog } from './attendance.js';




/*@brief: get posts that user is registered for
* @params: req, res
* req: server requests
* res: server response
* @author: Daniel Capinpin
*/
export const getRegisteredPosts = async (req, res) => {
    
    console.log("Checking regposts");
    console.log(req.query);
    console.log("showing regposts");
    console.log(req.query.regpostsquery);
    try{
        const posts = await PostMessage.find({  '_id': { $in: req.query.regpostsquery.split(',') } } );
        console.log("finding");
        console.log(posts);
        res.json({ data: posts });
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}

/*@brief: get all posts
* @params: req, res
* @author: Justin To
*/
export const getPosts = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; 
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        const postMessages= await PostMessage.find();   //looks for all messages with the same model as models/postMessage.js in the database 
        updatePostStatus(postMessages);
        res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


/*@brief: update status of posts
* @params: posts
* posts: array of all the posts available in the database
* @author: Justin To
*/
const updatePostStatus = async (posts) =>{
    let date = new Date();
    for(var i=0;i<posts.length;i++){
        console.log(posts[i].expiryDate)
        console.log(date)
        if(posts[i].expiryDate-date<=0){        //if current date is past expiry date set status to dateClosed
            posts[i].status="dateClosed"
            await PostMessage.findByIdAndUpdate(posts[i]._id, posts[i], {new: true})
        }
    }
}

/*@brief: get posts based on a certain search query
* @params: req, res
* req: server request
* res: server response
* @author: Daniel Capinpin
*/
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

/*@brief: create a post
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
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

/*@brief: update a post
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const updatePost = async (req, res) =>{
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(_id)) return res.status(404).send("no post with that id");
    
    const updatedPost= await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});       //find post in database with passed id and update 
    res.json(updatedPost);
   
    
}

/*@brief: get a particular post
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const getPost = async (req, res) =>{
    const {id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(id)) return res.status(404).send("no post with that id");
    
    const getPost= await PostMessage.findById(id);                                          //find post with passed id

    res.json(getPost);
   
    
}


/*@brief: toggle the status of the post
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const togglePost = async (req,res)=>{
    let date = new Date();
    const {id: _id} = req.params;
    const post = await PostMessage.findById(_id);
    if(post.status=="Open"){                                                                //if post was formerly open, set status to manua        l          aaaly closed
        post.status="manualClosed"
    }                       
    else if(post.expiryDate-date>0){                                                        //if it isnt open and date is not past expiration date, set it to open
        post.status="Open"
    }
    else{
        return res.status(404).json("Post is past expiration date. Please extend to reopen show");
    }
    if(!mongoose.isValidObjectId(_id)) return res.status(404).send("no post with that id");
    
    const updatedPost= await PostMessage.findByIdAndUpdate(post._id, post, {new: true});
    res.json(updatedPost);
}

/*@brief: delete a particular post
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const deletePost = async (req, res) =>{
    const {id} = req.params;
    const post = req.body;
    if(!mongoose.isValidObjectId(id)) return res.status(404).send("no post with that id");
    const deletedPost= await PostMessage.findByIdAndRemove(id);                                     //find post based on id and delete
    res.json(deletedPost);
   
    
}

/*@brief: register a particular post
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const registerPost = async (req, res)=>{
    const { id } = req.params;
    const register =req.body;

    let date = new Date();

    if (!req.id) {
        return res.json({ message: "Unauthenticated" });
    }
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);                    
    const foundUser= await user.findById(req.id);                                                                               //find user based on id derived from token
    const registeredIndex = post.registeredUsers.findIndex((_id) => _id === String(req.id));                                        //find if user is in show's registeredUsers array
    const acceptedIndex = post.acceptedUsers.findIndex((_id) => _id === String(req.id));                                                    //find if user in show's acceptedUsers array
    const valid= date-post.expiryDate<0 && post.status=="Open";                                                 //checks if status is open and date is not past expiry
    let status, finalTxn;
    var claim=false;

    if (registeredIndex === -1 && acceptedIndex === -1 && valid) {          //check if user has not yet registered and show is still vaalid
        if(foundUser.dlsu && !foundUser.claimed){                       //check if user is valid art pass holder
            post.acceptedUsers.push(req.id);
            foundUser.acceptedShows.push(id);
            foundUser.claimed=true;
            claim=true;                                             //add him to acceptedUsers and automatically sign him up for the show
            
            status='Accepted';
            
        }
        else{
            post.registeredUsers.push(req.id);
            foundUser.registeredShows.push(id);                 //register user ofor the show, but not accept them
            status='Pending'
            

        }
        post.noOfAttendees+=1
        finalTxn = new form({userID: req.id, postID: id, selectedFile: register.payment, artPass: claim, status: status, firstName: foundUser.firstName, lastName: foundUser.lastName, dlsu_id: register.dlsu_id, contactNumber: register.contactNumber, degree: register.degree, college: register.college, altClass: register.altClass, email: foundUser.email, date: Date(post.activeDate)});
        console.log(finalTxn);
        try{
            await finalTxn.save();
            if(status=='Accepted'){
                
                await addLog(req.id, id, finalTxn._id, foundUser.email, post.title, post.date, foundUser.firstName + foundUser.lastName);
            }
        } catch(error){
            return res.status(409).json({message:error.message});
        }
        
    } 
    else if((registeredIndex !== -1 || acceptedIndex!== -1) && valid) {                     //check if user is already registered and show is still valid
        post.registeredUsers = post.registeredUsers.filter((id) => id !== String(req.id));
        post.acceptedUsers = post.acceptedUsers.filter((id) => id !== String(req.id));                 //remove user from show's registeredUsers and acceptedUsers
        foundUser.registeredShows= foundUser.registeredShows.filter((eid) => eid !== id);           //remove show from user's registeredShows and acceptedShows
        foundUser.acceptedShows= foundUser.acceptedShows.filter((eid) => eid !== id);
        const txn=await form.findOne({userID:req.id, postID:id}).sort({date: -1});              //find latest transaction between user and show and cancel it
        txn.status='Cancelled';                                             
        if(txn?.artPass){                                               //check if user registered for the show using art pass
            await removeLog(txn.userID, txn.postID, txn._id);
            foundUser.claimed=false;                                            //refund art pass
        }
        finalTxn=await form.findByIdAndUpdate(txn._id, txn, {new: true});
        post.noOfAttendees-=1
    }
    else{
        return res.status(404).send("Too late! :(");
    }
    if(post.noOfAttendees>=post.maxAttendees){              //check if no of attendees exceeds max attendees set by the admin
        post.status="maxClosed";
    }
    if(post.noOfAttendees<post.maxAttendees && post.status=="maxClosed"){           //check if no of attendees is less than the max and if the previous status is closed due to full booking
        post.status="Open";
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