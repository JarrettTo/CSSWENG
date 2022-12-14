import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: "5px",
    padding: theme.spacing(2),
    borderRadius: "10px",
    backgroundColor: "#555760",
    width: "450px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",

    // color:'white',
  },
  label: {
    color: "white",
    marginBottom: "7px",
  },
  input: {
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
      marginBottom: "10px",
      backgroundColor: "#72737b",
    },
    "& .MuiInputBase-root": {
      color: "#e0e0e0",
    },
  },
  button1: {
    marginBottom: "10px",
    marginTop: "10px",
    color: "white",
    backgroundColor: "#5865f2",
  },
  button2: {
    marginBottom: "10px",
    color: "white",
    backgroundColor: "red",
  },
  err_msg: {
    color: "red",
    fontStyle: "italic",
  },
  fileLabel: {
    alignContent: "left",
    color: "white",
    marginRight: "5px",
  },
}));
