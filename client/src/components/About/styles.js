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
  div: {
    height: "700px",
    paddingTop: "50px",
  },
  title: {
    color: "white",
    marginTop: "10px",
  },
  title2: {
    color: "white",
    marginTop: "30px",
  },
  button: {
    color: "white",
    margin: "20px",
    backgroundColor: "#555760",
  },
  button1: {
    color: "white",
    margin: "5px",
    backgroundColor: "green",
  },
  button2: {
    color: "white",
    margin: "5px",
    backgroundColor: "red",
  },
  filter: {
    // - The TextField-root
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "gray", // - Set the Input border
      },
      "&:hover fieldset": {
        borderColor: "white", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "white",
        color: "white",
      },
      margin: "5px",
      backgroundColor: "#72737b",
    },
    "& .MuiInputBase-root": {
      color: "#e0e0e0",
    },
    width: "300px",
  },
  about: {
    padding: "5rem 3rem 3rem 3rem",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
  },
  column: {
    width: "40%",
  },
  tabs: {
    display: "flex",
  },
  singleTab: {
    background: "white",
    marginRight: "10px",
    cursor: "pointer",
  },
  STH2: {
    display: "block",
    padding: "10px 16px",
    borderRadius: "4px",
    color: "#3c3c3c",
    fontSize: "14px",
    fontWeight: "600",
  },
  aboutImg: {
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgoundPosition: "center center",
    height: "600px",
    width: "100%",
  },
  content: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem"
  },
  CH2: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "1.4",
    marginBottom: "1rem"
  },
  CP: {
    paddingBottom: "1rem",
    fontSize: "16px",
    lineHeight: "1.8",
    fontWeight: "400",
    color: "#999"
  },
  SCH3: {
    fontSize: "1.5rem",
    fontWeight: "700",
    lineHeight: "1.5",
    marginBottom: "1rem",
  },
  contentRow: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  contentColumn: {
    marginTop:  "30px",
    marginRight: "20px",
  },
  infoWrapH3: {
    fontSize: 
  }
}));
