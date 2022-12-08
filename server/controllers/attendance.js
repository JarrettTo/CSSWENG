import QRCode from 'qrcode';
import attendanceLog from '../models/attendanceLog.js';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import fs from 'fs';
export const addLog = async (userID, postID, txnID, email, show, date, name)=>{      //function for getting posts
    let b;
    var qr;
    const newLog = new attendanceLog({userID: userID, postID: postID, userName: name, email: email, postName: show, txnID:txnID});
    try{
        await newLog.save();
        qr=await QRCode.toDataURL(JSON.stringify(newLog), {
			width: 800,
			margin: 2,
			color: {
				dark: '#000000',
				light: '#EEEEEEFF'
			}
		})
        qr= qr.replace("data:image/png;base64,","");
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: "justin_jarrett_to@dlsu.edu.ph",
                pass: "yoqIsa103_",
                clientId: "387249647738-f58tonsbl58g3n75hh3rt3mqs9bkl0r0.apps.googleusercontent.com",
                clientSecret: "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",
                refreshToken: "1//04VMrmN-PP8OnCgYIARAAGAQSNwF-L9IrO2S-VpEt8kL0g0FFGKHkkygoax6QoAeI8ihp-7OVtGhbr50NFLxpOyyeHRTW1hrcDgc"
            }
          });
        console.log(email);
        const message="Hello " + name+ "!\n\nThank you for purchasing a ticket for "+ show + " on "+ date+ ".\nAttached below is your QR code for attendance.\n\nThank You!"
        const mailConfigurations = {
            
            // It should be a string of sender email
            from: 'justin_jarrett_to@dlsu.edu.ph',
                
            // Comma Separated list of mails
            to: email,
            
            // Subject of Email
            subject: 'Tickets for ' + show,
                
            // This would be the text of email body
            text: message,
            attachments: [
                {
                    filename: "teste.png",
                    content:qr,
                    encoding: "base64",
                }
            ],
                
        };
        
        transporter.sendMail(mailConfigurations, function(error, info){
            if (error) throw Error(error);
            console.log('Email Sent Successfully');
            console.log(info);
            
        });
        
         
    } catch (error){
        console.log(error);
    }
}

export const removeLog = async (userID, postID, txnID)=>{      //function for getting posts
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: "justin_jarrett_to@dlsu.edu.ph",
            pass: "yoqIsa103_",
            clientId: "387249647738-f58tonsbl58g3n75hh3rt3mqs9bkl0r0.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04VMrmN-PP8OnCgYIARAAGAQSNwF-L9IrO2S-VpEt8kL0g0FFGKHkkygoax6QoAeI8ihp-7OVtGhbr50NFLxpOyyeHRTW1hrcDgc"
        }
    });
    try{
        const log=await attendanceLog.findOneAndRemove({userID: userID, postID: postID, txnID: txnID});
        const message="Hello " + log.userName+ "!\n\nUnfortunately, your tickets for "+ log.postName + " have been cancelled.\nPlease contact this email if you believe this was a mistake.\n\nThank You!"
        const mailConfigurations = {
            
            // It should be a string of sender email
            from: 'justin_jarrett_to@dlsu.edu.ph',
                
            // Comma Separated list of mails
            to: log.email,
            
            // Subject of Email
            subject: 'Cancelling of Tickets for ' + log.postName,
                
            // This would be the text of email body
            text: message,
                
        };
        transporter.sendMail(mailConfigurations, function(error, info){
            if (error) throw Error(error);
            console.log('Email Sent Successfully');
            console.log(info);
            
        });
    } catch (error){
        console.log(error);
    }
}

export const logTime= async (req,res)=>{      //function for getting posts
    const log= req.body;
    let date = new Date().toJSON();
    const foundLog=await attendanceLog.findOne({userID: log.userID, postID: log.postID, txnID: log.txnID});
    if(foundLog){
        if(foundLog.timeIn==null){
            console.log(Date(date));
            foundLog.timeIn=Date(date);
            try{
                await attendanceLog.findByIdAndUpdate(foundLog._id, foundLog, { new: true });
                return res.status(200).json(foundLog);
            } catch (error){
                res.status(404);
            }
            
        }
        else{
            console.log(Date(date));
            foundLog.timeOut=Date(date);
            try{
                await attendanceLog.findByIdAndUpdate(foundLog._id, foundLog, { new: true });
                return res.status(200).json(foundLog);
            } catch (error){
                res.status(404);
            }
        }
    }

}

export const getLogs = async(req,res)=>{
    try{
        const logs= await attendanceLog.find();   //looks for all messages with the same model as models/postMessage.js in the database 

        res.status(200).json(logs); 
    } catch (error){
        res.status(404).json({message:error.message});
    }
}