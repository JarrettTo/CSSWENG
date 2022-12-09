 //body-parser cors express mongoose nodemon

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import attendanceRoutes from './routes/attendance.js';
import userRoutes from './routes/users.js';
import txnRoutes from './routes/transactions.js';
const CONNECTION_URL= 'mongodb+srv://jarrettto:flsmdfs30@cluster0.91eauuj.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
dotenv.config();
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology : true})
//mongoose.connect('mongodb://127.0.0.1/CSSWENGDB', { useNewUrlParser: true, useUnifiedTopology : true})
    .then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message)); 

const app = express();
app.use(cors());

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}));
app.use('/posts', postRoutes) //adds a /posts to the url, meaning to access localhost:5000/, u have to now do localhost:5000/posts
app.use('/users', userRoutes);
app.use('/transactions', txnRoutes);
app.use('/attendance', attendanceRoutes);