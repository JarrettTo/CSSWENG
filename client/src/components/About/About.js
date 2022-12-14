import React, { Fragment } from "react";
import { Container,Typography, Button, Grid } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import TitleImage from "../../images/TitleImage.png";

/*@brief: About Page
 * @author: Chelsea Alabanza
 */
const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.body}>

      <Container className={classes.caoInfo}>
        {/* HEADER */}
        <Container className={classes.headerImgBox} >
          <img className={classes.headerImg} src={TitleImage} alt="memories" />
        </Container>

        <Container className={classes.headerContainer}>
        DLSU Culture & Arts Office
        </Container>

        <Container className={classes.caoDesc}>
        The De La Salle University Culture and Arts Office (CAO) has made its commitment to strengthen the foundation of culture and arts learning in the Lasallian community through both the academic and non-academic approaches for more than two decades (De La Salle University Manila, 2019). There are several groups within CAO that allow students to express and explore their passion and creativity, namely: the La Salle Dance Company Contemporary, the DLSU Harlequin Theatre Guild, the La Salle Dance Company Folk, the La Salle Dance Company Street, the De La Salle Innersoul, the DLSU Green Media Group, the DLSU Chorale, and the Lasallian Youth Orchestra.DLSU Culture & Arts Office
        </Container>
      </Container>

      {/* DIVISIONS */}
        {/* MUSIC */}
        <Container className={classes.division}>
          <Container className={classes.divTitle}>
            <Typography component={Link} to="/about/music" className={classes.divLink} noWrap>MUSIC DIVISION</Typography>
          </Container>
          <Container className={classes.divInfo}>De La Salle University Chorale</Container>
          <Container className={classes.divInfo}>Lasallian Youth Orchestra</Container>
          <Container className={classes.divInfo}>De La Salle Innersoul</Container>
          <Container className={classes.divInfo}>Green Music Collective (Affiliate Organization)</Container>
        </Container>

        {/* DANCE */}
        <Container className={classes.division}>
          <Container className={classes.divTitle}>
            <Typography component={Link} to="/about/dance" className={classes.divLink} noWrap>DANCE DIVISION</Typography>
          </Container>
          <Container className={classes.divInfo}>La Salle Dance Company-Contemporary</Container>
          <Container className={classes.divInfo}>La Salle Dance Company-Folk</Container>
          <Container className={classes.divInfo}>La Salle Dance Company-Street</Container>
        </Container>

        {/* THEATER/EVENTS */}
        <Container className={classes.division}>
          <Container className={classes.divTitle}>
            <Typography component={Link} to="/about/theater-events" className={classes.divLink} noWrap>THEATRE/EVENTS DIVISION</Typography>
          </Container>
          <Container className={classes.divInfo}>DLSU Harlequin Theatre Guild</Container>
          <Container className={classes.divInfo}>DLSU Green Media Group</Container>
        </Container>

        
      
      
      {/* ROLES */}
      <Container className={classes.rolesHeader}>
        ROLES IN THE BUSINESS PROCESS
      </Container>

      <Container className={classes.roleCategory}>
        CAO STAFF
      </Container>

      {/* DIRECTOR */}
      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Director</Container>
        <Container className={classes.roleTitleBullet}>• General direction and operations, and exploration of growth opportunities for the office; implementation of capacity-building opportunities and retooling for all staff regarding online platforms and creation of online instructional materials</Container>
      </Container>

      {/* Talent Development & Programming Coordinator */}
      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Talent Development & Programming Coordinator</Container>
      
        <Container className={classes.roleTitleBullet}>• Office Management - policies/processes/issues related to CAO groups; supervision of SAMs or 0JTs, administrative / consolidated calendar</Container>

        <Container className={classes.roleTitleBullet}>• Marketing Management - management of solicitations process/ data privacy concerns</Container>

        <Container className={classes.roleTitleBullet}>• Education - Public Programs (Marketing); Internal Programs - artistic and production trainings; Program Development/Refinement</Container>

        <Container className={classes.roleTitleBullet}>• Faith & Community Engagement - 
          management of solicitations process/ data privacy concerns</Container>

        <Container className={classes.roleTitleBullet}>• Theatre and House Management (housekeeping/prod, project management)
        </Container>

        <Container className={classes.roleTitleBullet}>• Research/Evaluation</Container>
        
        
        <Container className={classes.roleTitleBullet}>• Human Resource Management</Container>
      </Container>

      {/* Events Coordinator */}
      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Events Coordinator</Container>
      
        <Container className={classes.roleTitleBullet}>• Events Management - managing the CAO calendar of events, production management of CAO organized, CAO-group event, institutional events and performance requests</Container>

        <Container className={classes.roleTitleBullet}>• Marketing Management - oversight of materials for CAO mainstream and CAO group mainstream publicity, social media, web, corporate gifts, donations, sponsorships, PR audience development, letters for incentives and sponsorships</Container>
        <Container className={classes.roleTitleBullet}>• Education (Public Programs) - implementation</Container>
      </Container>

      {/* Technical Theatre Crew */}
      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Technical Theatre Crew</Container>
      
        <Container className={classes.roleTitleBullet}>• Theatre and Facilities Management (technical services, facilities and equipment maintenance)
        </Container>

        <Container className={classes.roleTitleBullet}>• Reservation of venues and AVSU, in coordination with other offices on theatre and theatre equipment use.</Container>
      </Container>

      {/* Secretary */}
      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Secretary</Container>
      
        <Container className={classes.roleTitleBullet}>• Financial Management</Container>

        <Container className={classes.roleTitleBullet}>• Property Management</Container>

        <Container className={classes.roleTitleBullet}>• HR Management (assistance in hiring, renewal/ permanency)</Container>
        <Container className={classes.roleTitleBullet}>• Promotion of employee and preparation of honoraria for Ind.Cont.
        </Container>
        <Container className={classes.roleTitleBullet}>• Office Management - implementation of CAO policies and other university & department policies
      </Container>

      

      </Container>
      
      
      


      <Container className={classes.roleCategory}>
        CAO GROUPS
      </Container>

      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Company Manager/President</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for the general welfare of the organization, execution and implementation of policies set by the University, CAO, and the group itself.
        </Container>
        <Container className={classes.roleTitleBullet}>• Represents the group in all legislative meetings that concerns policy making in relation to the directions by the University, CAO, and the group itself. (COCM)
        </Container>
        <Container className={classes.roleTitleBullet}>• Represents the group in external affairs or activities within and outside DLSU</Container>
        <Container className={classes.roleTitleBullet}>• Manages the Operational Calendar of the group </Container>
        <Container className={classes.roleTitleBullet}>• Bridges all concerns between the members, officers, trainer, and the office</Container>
        <Container className={classes.roleTitleBullet}>• Initiates meetings of the officers</Container>
      </Container>

      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Assistant Company Manager</Container>
        <Container className={classes.roleTitleBullet}>• Assists the CM in overseeing the operations of the group</Container>
        <Container className={classes.roleTitleBullet}>• Substitutes the CM in his/her absence</Container>
        <Container className={classes.roleTitleBullet}>Other Sample Functions of ACM:</Container>
        <Container className={classes.roleTitleBullet}>• LSDC: Assigned to handle Human Resource function of the group</Container>
        <Container className={classes.roleTitleBullet}>• LYO & HTG: Handles artistic aspect of group/performance requests</Container>
      </Container>

      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Division Manager for Human Resource</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for monitoring the well-being of members and trainees
        </Container>
        <Container className={classes.roleTitleBullet}>• Organizes activities and workshops to supplement needs of members</Container>
        <Container className={classes.roleTitleBullet}>• Monitors member's performance</Container>
        <Container className={classes.roleTitleBullet}>• Prepares and maintains Members & Officers Contracts</Container>
        <Container className={classes.roleTitleBullet}>• Maintains the A&A Worksheet of the group</Container>
        <Container className={classes.roleTitleBullet}>• Directly coordinates with Ms. Mau Ledesma, CAO Anchor Counselor</Container>
        <Container className={classes.roleTitleBullet}>• Coordinates with TDP Coordinator on the development needs of the members and ensures the attendance of the members during SAFP webinars.</Container>
      </Container>

      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Division Manager for Finance</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for maintaining the group's financial records and facilitating transactions</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for monitoring the financial stability of the group</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for budget allocation, projected income & expenses, and ticket sales of the group's projects</Container>
        <Container className={classes.roleTitleBullet}>• Supplies the information for the Terms of Reference and Memorandum of Agreement.</Container>
        <Container className={classes.roleTitleBullet}>• Coordinates with DM-Marketing in setting sales targets in projects</Container>
      </Container>

      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Division Manager for Documentations</Container>
        <Container className={classes.roleTitleBullet}>• Tasked to do the minutes of EB meetings and effective dissemination to people concerned</Container>
        <Container className={classes.roleTitleBullet}>• Collates & archives important documents, photos, and videos of productions</Container>
        <Container className={classes.roleTitleBullet}>• Prepares all the communications to various stakeholders.</Container>
        <Container className={classes.roleTitleBullet}>• Prepares the templates for TORs and MOAs</Container>
        <Container className={classes.roleTitleBullet}>• Processes permits for campus access </Container>
        <Container className={classes.roleTitleBullet}>• Processes waivers of members, approved absences, and request for special exams (as needed)</Container>
        <Container className={classes.roleTitleBullet}>• Maintains the group's AQUA folder </Container>
      </Container>

      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Division Manager for Production</Container>
        <Container className={classes.roleTitleBullet}>• Takes care of all production needs and logistical requirements of the group</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for the creative outcome of the group's production</Container>
        <Container className={classes.roleTitleBullet}>• Processes permits for equipment, reservation of venue and resources</Container>
        <Container className={classes.roleTitleBullet}>• Directly coordinates with the Events Coordinator and Technical Theater Crew</Container>
        <Container className={classes.roleTitleBullet}>• Collates documentation for the Production Book.</Container>
        <Container className={classes.roleTitleBullet}>• Initiates the completion of the Accomplishment Report.</Container>
        <Container className={classes.roleTitleBullet}>• GMG: Handles production requests </Container>
      </Container>
      
      <Container className={classes.role}>
        <Container className={classes.roleTitle}>Division Manager for Marketing</Container>
        <Container className={classes.roleTitleBullet}>• Upholds the group's branding</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for partnerships with organizations</Container>
        <Container className={classes.roleTitleBullet}>• Responsible for seeking sponsorships & partnerships with companies</Container>
        <Container className={classes.roleTitleBullet}>• Processes Memorandum of Agreement of sponsors & partners</Container>
        <Container className={classes.roleTitleBullet}>• Prepares primers and solicitation letters</Container>
        <Container className={classes.roleTitleBullet}>• Prepares alternative class letters</Container>
        <Container className={classes.roleTitleBullet}>• Monitors the quality of the group's publicity materials</Container>
      </Container>

    </Container>
      
  );
};

export default About;