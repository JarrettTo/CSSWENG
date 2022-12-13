import { makeStyles } from "@material-ui/core/styles";
import bg from "../src/images/bg.png";

export default makeStyles(() => ({
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
  paperContainer: {
    // border: '1px solid red',
    height: "100%",
    minWidth: "500px",
    width: "100vw",
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    borderRadius: "0",
    marginBottom: '-5%',
    // marginRight: '-5%',
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "center center",
    // overflow: 'overlay'
  },
  body: {
    border: "1px solid rgba(0, 0, 0, 0)",
    width: "100vw",
    padding: "0",
  },
}));
