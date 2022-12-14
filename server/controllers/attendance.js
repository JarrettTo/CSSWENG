/*@brief: API functions pertaining to attendance logs
 * @author: Justin To and Daniel Capinpin
 */
import QRCode from "qrcode";
import attendanceLog from "../models/attendanceLog.js";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

/*@brief: adds an attendance log, generates qr code that serves as their ticket and emails it to user.
 * @params: userID, postID, txnID, email, show, date, name
 * userID: database id of user registering
 * postID: database id of post being registered for
 * txnID: database id of approved transaction
 * email: email of registering user
 * show: title of show being registered for
 * date: date of show being registered for
 * name: name of registering user
 * @author: Justin To
 */
export const addLog = async (
  userID,
  postID,
  txnID,
  email,
  show,
  date,
  name
) => {
  //function for getting posts
  let b;
  var qr;
  const newLog = new attendanceLog({
    userID: userID,
    postID: postID,
    userName: name,
    email: email,
    postName: show,
    txnID: txnID,
  });
  try {
    await newLog.save();
    qr = await QRCode.toDataURL(JSON.stringify(newLog), {
      //generates qr code based on new attendanceLog object
      width: 800,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#EEEEEEFF",
      },
    });
    qr = qr.replace("data:image/png;base64,", ""); //removes file tag from base64 version of QR image
    const transporter = nodemailer.createTransport({
      //initialization of emailing transporter
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "justin_jarrett_to@dlsu.edu.ph",
        pass: "yoqIsa103_",
        clientId:
          "387249647738-f58tonsbl58g3n75hh3rt3mqs9bkl0r0.apps.googleusercontent.com", //google api service credentials
        clientSecret: "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",
        refreshToken:
          "1//04VMrmN-PP8OnCgYIARAAGAQSNwF-L9IrO2S-VpEt8kL0g0FFGKHkkygoax6QoAeI8ihp-7OVtGhbr50NFLxpOyyeHRTW1hrcDgc",
      },
    });
    console.log(email);
    const message =
      "Hello " +
      name +
      "!\n\nThank you for purchasing a ticket for " +
      show +
      " on " +
      date +
      ".\nAttached below is your QR code for attendance.\n\nThank You!";
    const mailConfigurations = {
      //email configurations

      // It should be a string of sender email
      from: "justin_jarrett_to@dlsu.edu.ph",

      // Comma Separated list of mails
      to: email,

      // Subject of Email
      subject: "Tickets for " + show,

      // This would be the text of email body
      text: message,
      attachments: [
        {
          filename: "Ticket.png",
          content: qr,
          encoding: "base64",
        },
      ],
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
      //use transporter to send email
      if (error) throw Error(error);
      console.log("Email Sent Successfully");
      console.log(info);
    });
  } catch (error) {
    console.log(error);
  }
};
/*@brief: remove attendance logs
 * @params: userID, postID, txnID
 * userID: database id of registered user
 * postID: database id of registered post
 * txnID: database id of transaction
 * @author: Justin To
 */
export const removeLog = async (userID, postID, txnID) => {
  //function for getting posts
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "justin_jarrett_to@dlsu.edu.ph",
      pass: "yoqIsa103_",
      clientId:
        "387249647738-f58tonsbl58g3n75hh3rt3mqs9bkl0r0.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04VMrmN-PP8OnCgYIARAAGAQSNwF-L9IrO2S-VpEt8kL0g0FFGKHkkygoax6QoAeI8ihp-7OVtGhbr50NFLxpOyyeHRTW1hrcDgc",
    },
  });
  try {
    const log = await attendanceLog.findOneAndRemove({
      userID: userID,
      postID: postID,
      txnID: txnID,
    });
    const message =
      "Hello " +
      log.userName +
      "!\n\nUnfortunately, your tickets for " +
      log.postName +
      " have been cancelled.\nPlease contact this email if you believe this was a mistake.\n\nThank You!";
    const mailConfigurations = {
      // It should be a string of sender email
      from: "justin_jarrett_to@dlsu.edu.ph",

      // Comma Separated list of mails
      to: log.email,

      // Subject of Email
      subject: "Cancelling of Tickets for " + log.postName,

      // This would be the text of email body
      text: message,
    };
    transporter.sendMail(mailConfigurations, function (error, info) {
      if (error) throw Error(error);
      console.log("Email Sent Successfully");
      console.log(info);
    });
  } catch (error) {
    console.log(error);
  }
};
/*@brief: scans qr code and logs time of scanning for attendance, as well as sends email
 * @params: req, res
 * req: request sent to the server
 * res: response of the server
 * @author: Justin To and Daniel Capinpin
 */
export const logTime = async (req, res) => {
  const log = req.body;
  let date = new Date().toJSON();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "justin_jarrett_to@dlsu.edu.ph",
      pass: "yoqIsa103_",
      clientId:
        "387249647738-f58tonsbl58g3n75hh3rt3mqs9bkl0r0.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04VMrmN-PP8OnCgYIARAAGAQSNwF-L9IrO2S-VpEt8kL0g0FFGKHkkygoax6QoAeI8ihp-7OVtGhbr50NFLxpOyyeHRTW1hrcDgc",
    },
  });
  const foundLog = await attendanceLog.findOne({
    userID: log.userID,
    postID: log.postID,
    txnID: log.txnID,
  });
  if (foundLog) {
    if (foundLog.timeIn == null) {
      //if there is no record of logged time for that particular user and show pairing, log current time as timeIn
      console.log(Date(date));
      foundLog.timeIn = Date(date);
      try {
        await attendanceLog.findByIdAndUpdate(foundLog._id, foundLog, {
          new: true,
        });
        return res.status(200).json(foundLog);
      } catch (error) {
        res.status(404);
      }
    } //if there is a record of logged time for that particular user and show pairing, log current time as timeOut
    else {
      console.log(Date(date));
      foundLog.timeOut = Date(date);
      try {
        const message =
          "Hello " +
          foundLog.userName +
          "!\n\nWe would like your feedback for " +
          foundLog.postName +
          ".\n *Insert Feedback Link Here* .\n\nThank You!";
        const mailConfigurations = {
          // It should be a string of sender email
          from: "justin_jarrett_to@dlsu.edu.ph",

          // Comma Separated list of mails
          to: foundLog.email,

          // Subject of Email
          subject: "Feedback for " + foundLog.postName,

          // This would be the text of email body
          text: message,
        };
        transporter.sendMail(mailConfigurations, function (error, info) {
          if (error) throw Error(error);
          console.log("Email Sent Successfully");
          console.log(info);
        });
        await attendanceLog.findByIdAndUpdate(foundLog._id, foundLog, {
          new: true,
        });
        return res.status(200).json(foundLog);
      } catch (error) {
        res.status(404);
      }
    }
  }
};
/*@brief: searches for attendance based on a query
 * @params: req, res
 * req: request sent to the server
 * res: response of the server
 * @author: Daniel Capinpin
 */
export const getAttBySearch = async (req, res) => {
  console.log("Checking att");
  console.log(req.query);
  console.log("showing att");
  console.log(req.query.attsrchquery); //function for getting posts
  try {
    const title = new RegExp(req.query.attsrchquery, "i");
    console.log("trying to search in controller");
    console.log(title);
    const logs = await attendanceLog.find({ postName: { $in: title } });
    console.log("finding");
    console.log(logs);
    res.json(logs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLogs = async (req, res) => {
  try {
    const logs = await attendanceLog.find(); //looks for all messages with the same model as models/postMessage.js in the database

    res.status(200).json(logs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
