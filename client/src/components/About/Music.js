import React, { Fragment } from "react";
import { Container,Typography, Button, Grid } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import LYC1 from "../../images/lyc1.png";
import LYC2 from "../../images/lyc3.png";
import LYC3 from "../../images/lyc2.png";
import DC1 from "../../images/DC1.png";
import DC2 from "../../images/DC2.png";
import D1 from "../../images/D1.png";
import D2 from "../../images/D2.png";
import D3 from "../../images/D3.png";
import GM1 from "../../images/GM1.png";
import GM2 from "../../images/GM2.png";
import GM3 from "../../images/GM3.png";

/*@brief: Music Division Page
 * @author: Chelsea Alabanza
 */
const Music = () => {
  const classes = useStyles();
  return (
    <Container className={classes.body}>
      {/* HEADER */}
      <Container className={classes.title}>MUSIC DIVISION</Container>

      
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>De La Salle University Chorale</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={DC1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={DC2} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
                Expressive vocal renditions and world-class recognition — these are the trademarks of the university choral group, which remains to be one of the Philippine's best.
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/DeLaSalleUniversityChorale"noWrap>
                    DE LA SALLE UNIVERSITY CHORALE FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>

       
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>Lasallian Youth Orchestra</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={LYC1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={LYC2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={LYC3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
                Since 1948, the university orchestra has evolved from a marching band to a symphony orchestra, boasting a reportoire that explores the fusion of classical, contemporary and ethinc Filipino music.
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/LasallianYouthOrchestra"noWrap>
                    LASALLIAN YOUTH ORCHESTRA FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>

       
      <Container className={classes.group}>
        <Container className={classes.grpTitle}>De La Salle Innersoul</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={D2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={D1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={D3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
            Empowerment through contemporary music - with that goal, the university premiere vocal group has produced versatile contemporary singers based here and abroad.
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/dlsinnersoul" noWrap>
                    DE LA SALLE INNERSOUL FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>

        <Container className={classes.group}>
        <Container className={classes.grpTitle}>Green Music Collective (Affiliate Organization)</Container>
            <Container className={classes.photoContainer}>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={GM1} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={GM2} alt="memories" />
            </Container>
            <Container className={classes.photoBox}>
                <img className={classes.grpImg} src={GM3} alt="memories" />
            </Container>
            </Container>
            <Container className={classes.grpInfo}>
                The newest addition to the CAO family as an affiliate group, the Green Music Collective is an inclusive community of musicians and non-musicians, regardless of skill level and experience. It dedicates itself to the promotion and creation of avenues for music appreciation and expression across all genres through creative collaborations
            </Container>
            <Container className={classes.grpInfo}>
                <Typography component={Link} className={classes.grpLink} to="https://www.facebook.com/GreenMusicCollective"noWrap>
                    GREEN MUSIC COLLECTIVE FACEBOOK PAGE
                </Typography>
            </Container>
        </Container>
      
    </Container>
  );
};

export default Music;