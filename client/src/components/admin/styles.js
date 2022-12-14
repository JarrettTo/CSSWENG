import { makeStyles } from "@material-ui/core/styles";

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
  container: {
    height: "100%",
    paddingBottom: "50px",
    marginTop: "30px",
    minHeight: "100vh",
  },
  appbar: {
    width: "380px",
    backgroundColor: "#555760",
    marginTop: "20px",
    borderRadius: "5px",
  },
  card: {
    backgroundColor: "#555760",
  },
  text: {
    color: "white",
  },
  filterButton: {
    width: "50px",
    margin: "5px",
    marginTop: "7px",
  },
  box: {
    marginTop: "30px",
  },
  divider: {
    backgroundColor: "lightGrey",
    marginBottom: "30px",
    marginTop: "70px",
  },
  div1: {
    height: "200vh",
  },
  text1: {
    overflowWrap: "break-word",
    color: "white",
  },
  text2: {
    width: "200px",
    color: "white",
  },
}));
