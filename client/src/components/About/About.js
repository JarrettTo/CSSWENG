import React, { Fragment } from "react";
import { Container,Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import TitleImage from "../../images/TitleImage.png";

/*@brief: About Page
 * @author: Chelsea Alabanza
 */
const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Container className={classes.headerContainer}>
        <img className={classes.headerImg} src={TitleImage} />
      </Container>
      
    </Container>
  );
};

export default About;