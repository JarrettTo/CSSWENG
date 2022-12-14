/*@brief: Verifying validity of token
 * @author: Justin To
 */
import React from "react";
import { withRouter } from "react-router-dom";

/*@brief: parse jwt token
 * @params: token
 * token: token to be parsed
 * @author: Justin To
 */
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

/*@brief: verify is current token is expired or not
 * @params: props
 * props: props
 * @author: Justin To
 */

const AuthVerify = (props) => {
  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem("profile"));

    if (user) {
      const decodedJwt = parseJwt(user.token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

export default withRouter(AuthVerify);
