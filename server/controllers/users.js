/*@brief: API functions pertaining to users
* @author: Justin To and Daniel Capinpin
*/
import user from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';



/*@brief: sign a user up
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const signUp = async (req, res) =>{      
    const {email,password,confirmPassword, firstName, lastName, id, dlsu} = req.body;
  
             
    try{
        
        const foundUserEmail= await user.findOne({email: email})                                //find user based on email
        if(foundUserEmail) return res.status(400).json({message: "Account Already Exists!"});                   
        if(password!=confirmPassword)  return res.status(400).json({message: "Passwords don't match!"});
        const hashedPassword= await bcrypt.hash(password, 12);                                      //encrypt password
        const newUser = await user.create({email: email, password: hashedPassword, firstName: firstName, lastName: lastName, id: id, admin: false, dlsu: false, claimed: false, registeredShows: []}) 
        const token = jwt.sign({id:newUser._id, email: newUser.email, isAdmin: newUser.admin},"dlsucao", {expiresIn: "2h"});                    //create jwt token
        console.log({result: newUser, token});
        res.status(200).json({result: newUser, token});    
    } catch(error){
        res.status(409).json({message:error.message});
    }
    
}


/*@brief: sign user in
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const signIn = async (req, res) =>{        //signin
    const {email, password} = req.body;
    try{
        const foundUser= await user.findOne({email: email})
        if(!foundUser) return res.status(404).json({message: "User does not exist!"});                  //user not found
        const checkPassword= await bcrypt.compare(password, foundUser.password);                    //if user is found, check decrypted password to see if they match
        if(!checkPassword) return res.status(400).json({message: "Invalid Password!"}); 
        const token = jwt.sign({id:foundUser._id, email: foundUser.email, isAdmin: foundUser.admin },"dlsucao", {expiresIn: "2h"});             //create jwt token
        res.status(200).json({result: foundUser, token});
    } catch (error){
        res.status(500).json({message: "Something Went Wrong!"});
    }
    
   
    
}
/*@brief: update a user profile
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const updateUser= async (req, res) =>{        //signin
    const {id} = req.params;
    console.log(id)
    try{
        const foundUser= await user.findById(id)
        if(!foundUser) return res.status(404).json({message: "User does not exist!"});                  
        
        const token = jwt.sign({id:foundUser._id, email: foundUser.email, isAdmin: foundUser.admin },"dlsucao", {expiresIn: "2h"});                 //create new token for user
        res.status(200).json({result: foundUser, token});
    } catch (error){
        res.status(500).json({message: "Something Went Wrong!"});
    }
    
   
    
}
/*@brief: sign user in through google
* @params: req, res
* req: server request
* res: server response
* @author: Justin To
*/
export const googleSign=async(req, res)=>{
    const {email,firstName, lastName, id} = req.body[0];
    let newUser;
    try{
        const foundUser= await user.findOne({email: email});
        if(foundUser){                                                  //check if user exists, if so, generate token for them
            const token = jwt.sign({id:foundUser._id, email: foundUser.email, isAdmin: foundUser.admin },"dlsucao", {expiresIn: "2h"});
            res.status(200).json({result:foundUser,token});
            
        }
        else{
            if(("@dlsu.edu.ph".indexOf(email) != -1)){                  //if emaail is a dlsu email, set it to be a dlsu account
                newUser = await user.create({email: email, password: ' ', firstName: firstName, lastName: lastName, id: id, admin: false, dlsu: true, claimed: false, registeredShows: []})
            }
            else{
                newUser = await user.create({email: email, password: ' ', firstName: firstName, lastName: lastName, id: id, admin: false, dlsu: false, claimed: false, registeredShows: []})
            }
            const token = jwt.sign({id:newUser._id, email: newUser.email, isAdmin: newUser.admin },"dlsucao", {expiresIn: "2h"});
            res.status(200).json({result: newUser, token});
        }
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Something Went Wrong!"});
    }
}
