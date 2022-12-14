import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "20px",
  },
  container2: {
    display: "flex",
    margin: "20px",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  div: {
    flexGrow: "1",
  },
}));
