import { makeStyles, withTheme } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "8px",
      // backgroundColor: 'black'
    },
    "*::-webkit-scrollbar-track": {
      boxshadow: "rgb(0, 0, 0)",
      background: "rgb(0, 0, 0)",
    },
    "*::-webkit-scrollbar-thumb": {
      background: "rgba(255, 255, 255, 0.289) ",
    },
    "*::-webkit-scrollbar-thumb:hover": {
      background: "rgb(74, 74, 72)",
    },
  },
  body: {
    marginTop: "3vh",
    // border: "1px solid green",
    width: "100vw",
    height: "auto-fit",
    marginBottom: "200px",
    padding: "0",
    color: "white",
    fontSize: "30%",
  },
  headerImgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5vh",
    // height: "15vh"
  },
  headerImg: {
    height: "20rem"
  },
  headerContainer: {
    padding: "0",
    marginTop: "3vh",
    // border: "1px solid red",
    width: "100vw",
    height: "100px",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "11em",
    fontWeight: "700",
  },
  caoDesc: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "justify",
    fontSize: "4em",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  division: {
    // border: "1px solid green",
    marginTop: "1vh", 
    padding: "0",

  },
  divTitle: {
    padding: "0",
    // border: "1px solid red",
    width: "100vw",
    height: "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    
  },
  divLink: {
    // textDecoration: "none",
    color: "white",
    fontSize: "6em",
    fontWeight: "400",
    marginBottom: "-2%",
    "&:hover": {
      color: "#4caf50",
    },
  },
  grpLink: {
    // textDecoration: "none",
    color: "white",
    fontSize: "1em",
    fontWeight: "400",
    marginBottom: "-2%",
    "&:hover": {
      color: "#4caf50",
    },
  },
  divInfo: {
    padding: "0",
    // border: "1px solid red",
    width: "100vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "Center",
    fontSize: "3.5em"
  },
  list: {
    // textAlign: "Center"
    listStyle: "none",
  },

  // ROLES
  rolesHeader: {
    padding: "0",
    // border: "1px solid red",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    borderRadius: "9%",
    marginTop: "7vh",
    // marginBottom: "7vh",
    width: "70vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "8em"
  },
  roleCategory: {
    padding: "0",
    // border: "1px solid red",
    marginTop: "7vh",
    width: "60vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    fontSize: "7em",
    fontWeight: "700",
    color: "#4caf50",
  },
  role: {
    // border: "1px solid red",
    alignItems: "center",
    marginTop: "3vh",
  },
  roleTitle: {
    padding: "0",
    // border: "1px solid red",
    width: "60vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    fontSize: "6em",
    fontWeight: "400",
    textDecoration: "underline"
  },
  roleTitleBullet: {
    padding: "0",
    // border: "1px solid red",
    width: "60vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    fontSize: "4em",
    fontWeight: "300",
    fontStyle: "italic",
    color: "grey"
  },
  roleDesc: {
    padding: "0",
    // border: "1px solid red",
    marginTop: ".4vh",
    width: "60vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    textAlign: "justify",
    fontSize: "4em"
  },
  // -----------------------------

  // DIVISION PAGES
  title: {
    padding: "0",
    marginTop: "3vh",
    // border: "1px solid red",
    width: "100vw",
    height: "100px",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "11em",
    fontWeight: "700",
  },

  group: {
    padding: "0",
    // border: "1px solid ",
    width: "100vw",
    height: "700px"
  },
  grpTitle: {
    padding: "0",
    marginTop: "3vh",
    // border: "1px solid red",
    width: "100vw",
    height: "65px",
    fontSize: "7em",
    fontWeight: "550",
    // fontStyle: "italic",
    color: "#4caf50"
  },
  photoContainer: {
    marginTop: "2vh",
    padding: "1%",
    paddingTop: "1%",
    // border: "1px solid red",
    width: "100vw",
    height: "300px",
    display: "flex",
    flexDirection: "row",
  },
  photoBox: {
    padding: "0",
    // border: "1px solid blue",
    width: "33%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  grpImg: {
    minWidth: "50px",
    minHeight: "auto",
    maxWidth: "100%",
    maxHeight: "auto",
  },
  grpInfo: {
    padding: "0",
    marginTop: "3vh",
    // border: "1px solid red",
    width: "100vw",
    height: "65px",
    fontSize: "5em",
  }
  

}));
