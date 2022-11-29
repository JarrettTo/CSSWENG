import QRCode from 'qrcode';
import attendanceLog from '../models/attendanceLog.js';
import mongoose from 'mongoose';

export const addLog = async (userID, postID, txnID)=>{      //function for getting posts
    const newLog = new attendanceLog({userID: userID, postID: postID, txnID:txnID});
    try{
        await newLog.save();
        QRCode.toDataURL(JSON.stringify(newLog), {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			
		});
         
    } catch (error){
        console.log(error);
    }
}

export const removeLog = async (userID, postID, txnID)=>{      //function for getting posts

    try{
        await attendanceLog.findOneAndRemove({userID: userID, postID: postID, txnID: txnID});
         
    } catch (error){
        console.log(error);
    }
}