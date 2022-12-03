import React, { useEffect , useRef} from "react";
import QrReader from 'react-qr-scanner';
import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Grid, TextareaAutosize    } from '@material-ui/core';
import Txn from "./Txn.js";
import { useDispatch, useSelector } from 'react-redux';
import { logTime } from "../../actions/attendance";
import { getTxns } from "../../actions/transactions";
const QR = () => {
    const log = useSelector((state)=>state.log);
    const dispatch= useDispatch();
    const [status, setStatus]=useState(true);
    /*const txns = useSelector((state)=> state.txns);
    const posts = useSelector((state)=>state.posts);
    const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const qrRef= useRef(null);
    useEffect(() => {
        
    },[])*/
    const handleErrorFile = (error)=>{
        console.log(error);
    }

    const handleScanFile = (result)=>{
        if(result){
            try{
                result=JSON.parse(result.text);
                console.log(result);
                if(result.userID && result.txnID && result.postID && status){
                    setStatus(false);
                    dispatch(logTime(result));
                }
            }catch(error){
                console.log(error);
            }
        }
        
        

    }
    const setTrue=()=>{
        setStatus(true);
        window.location.reload(false);
    }

    return(
        <>
        <Grid container alignItems="stretch" spacing={3}>
            <Typography>Scan QR Code:</Typography>
        </Grid>
        {console.log(status)}
        {!status ? (
            <>
            <Typography>Scan Again?</Typography>
            <Button onClick={setTrue}>Yes</Button>
            </>
            
        ) : null}
        <Grid container alignItems="stretch" spacing={3}>

            <QrReader
            
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorFile}
                onScan={handleScanFile}
                
                
            />
            {log?(<Typography>{JSON.stringify(log)}</Typography>):null}
            
        </Grid>
        
        </>
    )
}

export default QR;