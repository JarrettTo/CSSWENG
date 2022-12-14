import React, { Fragment } from "react";
import { Container,Typography, Button, Grid } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import HT1 from "../../images/HT1.png";
import HT2 from "../../images/HT2.png";
import HT3 from "../../images/HT3.png";
import MG1 from "../../images/MG1.png";
import MG2 from "../../images/MG2.png";
import MG3 from "../../images/MG3.png";

/*@brief: Theater/Events Division Page
 * @author: Chelsea Alabanza
 */
const Theater = () => {
  const classes = useStyles();
  return (
    <Container className={classes.body}>
      {/* HEADER */}
      <Container className={classes.title}>THEATER/EVENTS DIVISION</Container>

      
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>DLSU Harlequin Theatre Guild</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={HT1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={HT2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={HT3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
            For almost 60 years, the university's theatre group is an avenue for Lasallians to raise social consciousness in the community through performance art and theatrical productions.
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/dlsuhtg"noWrap>
                    DLSU HARLEQUIN THEATER GUILD FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>

       
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>DLSU Green Media Group</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={MG1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={MG2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={MG3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
            Behind every Lasallian production is a group of dedicated people who make things happen. The recalibrated production and media services arm of the office trains student experts in online event management, graphic design, audio-visual productions, hosting, event scriptwriting, social media management and online audience management to respond to the needs of the times.
            </Container>
            <Container className={classes.grpInfo}>

                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/DLSUGreenMediaGroup"noWrap>
                
                DLSU GREEN MEDIA GROUP FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>
      
    </Container>
  );
};

export default Theater;