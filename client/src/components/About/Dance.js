import React, { Fragment } from "react";
import { Container,Typography, Button, Grid } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import CC1 from "../../images/CC1.png";
import CC2 from "../../images/CC2.png";
import CC3 from "../../images/CC3.png";
import F1 from "../../images/F1.png";
import F2 from "../../images/F2.png";
import F3 from "../../images/F3.png";
import S1 from "../../images/S1.png";
import S2 from "../../images/S2.png";
import S3 from "../../images/S3.png";

/*@brief: Dance Division Page
 * @author: Chelsea Alabanza
 */
const Dance = () => {
  const classes = useStyles();
  return (
    <Container className={classes.body}>
      {/* HEADER */}
      <Container className={classes.title}>DANCE DIVISION</Container>

      
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>La Salle Dance Company-Contemporary</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={CC1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={CC2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={CC3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
            Defined by the confluence of traditional and modern Filipino culture, the university' contemporary dance group promotes Filipino cultural awareness and pride.
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/LSDCC"noWrap>
                    LSDC-CONTEMPORARY FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>

       
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>La Salle Dance Company-Folk</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={F1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={F2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={F3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
            Best known for their vibrant performances of our country's ethnic and traditional dances, the university's folk dance group seeks to conect the Lasallian youth to their Filipino heritage.
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/LSDCFolk"noWrap>
                LSDC-FOLK FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>

       
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>La Salle Dance Company-Street</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={S1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={S2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={S3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
            The university's streetdance group has a solid reputation in the national and international dance arena, with their energetic performances of pioneering dance styles that redefine Filipino hiphop.
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/lsdcstreet" noWrap>
                    LSDC-STREET FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>
      
    </Container>
  );
};

export default Dance;