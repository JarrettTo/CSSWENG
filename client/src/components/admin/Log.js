import React from "react";
import useStyles from "./styles";

import { Typography, Card } from "@material-ui/core";

/*@brief: render single log
 * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
 */
const Log = ({ log }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {log ? (
        <Typography className={classes.text}>Post: {log?.postID}</Typography>
      ) : null}

      <Typography className={classes.text}>TxnID: {log.txnID}</Typography>
      <Typography className={classes.text}>UserID : {log.userID}</Typography>
      <Typography className={classes.text}>
        User Name : {log.userName}
      </Typography>
      <Typography className={classes.text}>
        Post Name : {log.postName}
      </Typography>
      <Typography className={classes.text}>Email : {log.email}</Typography>
      <Typography className={classes.text}>TimeIn : {log.timeIn}</Typography>
      <Typography className={classes.text}>TimeOut : {log.timeOut}</Typography>
    </Card>
  );
};

export default Log;
