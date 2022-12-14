/*@brief: Brwoser router that renders pages based on URL
 * @author: Justin To, Daniel Capinpin, Cara Alabanza, Janielle Enriquez
 */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Paper, CssBaseline } from "@material-ui/core";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Music from "./components/About/Music";
import Dance from "./components/About/Dance";
import Theater from "./components/About/Theater";
import Auth from "./components/Auth/Auth";
import Admin from "./components/admin/Admin";
import QR from "./components/admin/QR";
import Txns from "./components/admin/Txns";
import { getPosts } from "./actions/posts";
import PageNotFound from "./components/PageNotFound";
import useStyles from "./styles";
// import useStyles from './GlobalStyles';
import Attendance from "./components/admin/Attendance";
import PostDetails from "./components/PostDetails/PostDetails";

import AuthVerify from "./AuthVerify";
import { LOGOUT } from "./constants/actiontypes";

/*@brief: logout user
 * @author: Justin To
 */

const logout = () => {
  const history = useHistory();
  dispatch({ type: LOGOUT });
  history.push("/auth");
};

/*@brief: Browser Router
 * @author: Justin To, Daniel Capinpin, Chelsea Alabanza, and Janielle Enriquez
 */
const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory(); //Browser router that renders different pages based on url
  return (
    <Paper className={classes.paperContainer}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Container className={classes.body}>
          {" "}
          {/*equivalent of a div, lg means large*/}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/posts/regposts" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/about/music" exact component={Music} />
            <Route path="/about/dance" exact component={Dance} />
            <Route path="/about/theater-events" exact component={Theater} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/admin" component={Admin} />
            <Route path="/scan" component={QR} />
            <Route path="/transactions" component={Txns} />
            <Route path="/transactions/txnsrch" component={Txns} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/attendance/attsrch" component={Attendance} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Container>
        <AuthVerify logOut={logout} />
      </BrowserRouter>
    </Paper>
  );
};

export default App;
