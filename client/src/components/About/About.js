import React, { Fragment } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import TitleImage from "../../images/TitleImage.png";

/*@brief: About Page
 * @author: Chelsea Alabanza
 */
const About = () => {
  const classes = useStyles();
  return (
    <Fragment>

  
      <section className={classes.about}>

        <div className={classes.row}> 
        
          <div className={classes.column}>
            <div className={classes.aboutImg} src={TitleImage}>
            
            </div>
          </div>

          <div className={classes.column}>

            <div className={classes.tabs}>

              {/* MUSIC DIVISION */}
              <div className={classes.singleTab}>
                <h2 className={classes.STH2}>Music</h2>
              </div>

              {/* DANCE DIVISON */}
              <div className={classes.singleTab}>
                <h2 className={classes.STH2}>Dance</h2>
              </div>

              {/* THEATRE/EVENTS DIVISION */}
              <div className={classes.singleTab}>
                <h2 className={classes.STH2}>Theatre/Events</h2>
              </div>

            </div>
            {/* CONTENTS */}
            <div className={classes.tabContent}>

              {/* MUSIC */}
              <div className={classes.content}>
                <h2 className={classes.CH2}>Content here</h2>
                <p className={classes.CP}>The De La Salle University Culture and Arts Office (CAO) has made its commitment to strengthen the foundation of culture and arts learning in the Lasallian community through both the academic and non-academic approaches for more than two decades (De La Salle University Manila, 2019). </p>
                <h3  className={classes.SCH3}>BIG CONTENT HERE AGAIN</h3>
                <p className={classes.CP}>The De La Salle University Culture and Arts Office (CAO) has made its commitment to strengthen the foundation of culture and arts learning in the Lasallian community through both the academic and non-academic approaches for more than two decades (De La Salle University Manila, 2019). </p>
              </div>

              {/* Content 2 */}
              <div className={classes.content}>
                <h2 className={classes.CH2}>Content here</h2>
                <p className={classes.CP}>The De La Salle University Culture and Arts Office (CAO) has made its commitment to strengthen the foundation of culture and arts learning in the Lasallian community through both the academic and non-academic approaches for more than two decades (De La Salle University Manila, 2019). </p>
                {/* inner content 2 */}
                <div className={classes.contentRow}>
                  <div className={classes.contentColumn}>

                    <div className={classes.infoWrap}>
                      <h3 className={classes.infoWrapH3}>Music</h3>

                      <div className={classes.info}>
                        <div className={classes.infoBar}>
                          <span>80%</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Content 3 */}
              <div className={classes.content}>
                <h2 className={classes.CH2}>Content here</h2>
                <p className={classes.CP}>The De La Salle University Culture and Arts Office (CAO) has made its commitment to strengthen the foundation of culture and arts learning in the Lasallian community through both the academic and non-academic approaches for more than two decades (De La Salle University Manila, 2019). </p>
                {/* inner content 3 */}
                <div className={classes.contentRow}>
                  <div className={classes.contentColumn}>

                    <div className={classes.infoWrap}>
                      <h3 className={classes.infoWrapH3}>Dance</h3>

                      <div className={classes.info}>
                        <div className={classes.infoBar}>
                          <span>90%</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Content 4 */}
              <div className={classes.content}>
                <h2 className={classes.CH2}>Content here</h2>
                <p className={classes.CP}>The De La Salle University Culture and Arts Office (CAO) has made its commitment to strengthen the foundation of culture and arts learning in the Lasallian community through both the academic and non-academic approaches for more than two decades (De La Salle University Manila, 2019). </p>
                {/* inner content 4 */}
                <div className={classes.contentRow}>
                  <div className={classes.contentColumn}>

                    <div className={classes.infoWrap}>
                      <h3 className={classes.infoWrapH3}>Theatre/Events1</h3>

                      <div className={classes.info}>
                        <div className={classes.infoBar}>
                          <span>80%</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* DANCE */}
              <div className={classes.content}>

                <div className={classes.danceCol}>
                  <h3>Web Dev</h3>
                  <span>2014-2022</span>
                  <p className={classes.CP}>The De La Salle University Culture and Arts Office (CAO) has made its commitment to strengthen the foundation of culture and arts learning in the Lasallian community through both the academic and non-academic approaches for more than two decades (De La Salle University Manila, 2019). </p>
                </div>
      
              </div>

            </div>

          </div>

        </div>

      </section>
    </Fragment>
  );
};

export default About;