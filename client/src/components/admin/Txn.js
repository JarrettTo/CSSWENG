import React, { useEffect } from "react";

import { useState } from "react";
import { Typography, Button, Card, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { approveTxn, declineTxn } from "../../actions/transactions";
import useStyles from "./styles";

/*@brief: rendering of individual transaction
 * @params: txn
 * txn: transaction
 * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
 */

const Txn = ({ txn }) => {
  const [trigger, setTrigger] = useState(false);
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [trigger]);

  const selPost = posts.find((e) => {
    return e._id == txn.postID;
  });

  const dispatch = useDispatch();

  /*@brief: approve transaction
   * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
   */
  const approve = () => {
    dispatch(approveTxn(txn._id, selPost));
    setTrigger(!trigger);
  };

  /*@brief: decline transaction
   * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
   */
  const decline = () => {
    dispatch(declineTxn(txn._id));
    setTrigger(!trigger);
  };
  return (
    <Card className={classes.card}>
      {selPost ? (
        <Typography className={classes.text}>Post: {selPost?.title}</Typography>
      ) : null}

      <Typography className={classes.text}>
        Date of Order: {txn.date}
      </Typography>
      <Typography className={classes.text}>
        Name : {txn.firstName + " " + txn.lastName}
      </Typography>
      <Typography className={classes.text}>Email : {txn.email}</Typography>
      <Typography className={classes.text}>
        Contact Number : {txn.contactNumber}
      </Typography>
      <Typography className={classes.text}>
        {txn.dlsu_id ? "ID :" + txn.dlsu_id : null}
      </Typography>
      <Typography className={classes.text}>
        {txn.college ? "College :" + txn.college : null}
      </Typography>
      <Typography className={classes.text}>
        {txn.degree ? "Degree :" + txn.degree : null}
      </Typography>
      <Typography className={classes.text}>
        {txn.altClass ? "Alt Class :" + txn.altClass : null}
      </Typography>
      <Typography className={classes.text}>
        {txn.status ? "Current Status :" + txn.status : null}
      </Typography>
      {txn.status == "Pending" ? (
        <>
          <Button
            className={classes.button1}
            type="submit"
            variant="contained"
            onClick={approve}
          >
            Approve
          </Button>
          <Button
            className={classes.button2}
            type="submit"
            variant="contained"
            onClick={decline}
          >
            Decline
          </Button>
        </>
      ) : null}
      {txn.status == "Accepted" ? (
        <Button
          className={classes.button2}
          type="submit"
          variant="contained"
          onClick={decline}
        >
          Decline
        </Button>
      ) : null}
    </Card>
  );
};

export default Txn;
