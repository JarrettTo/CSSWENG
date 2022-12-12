import React from "react";
import useStyles from './styles';

import { Typography,  Card} from '@material-ui/core';



/*@brief: render single log
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
*/
const Log = ({log}) =>{
const classes = useStyles();
    
    

    return(
        <Card>
            {log? (<Typography>Post: {log?.postID}</Typography>) : null}
            
            <Typography>TxnID: {log.txnID}</Typography>
            <Typography>UserID : {log.userID}</Typography>
            <Typography>User Name : {log.userName}</Typography>
            <Typography>Post Name : {log.postName}</Typography>
            <Typography>Email : {log.email}</Typography>
            <Typography>TimeIn : {log.timeIn}</Typography>
            <Typography>TimeOut : {log.timeOut}</Typography>
            
            
        </Card>
    )
}

export default Log;