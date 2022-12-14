/*@brief: API calls to backend related to user authentication
 * @author: Justin To
 */
import * as api from "../api";
import { AUTH } from "../constants/actiontypes";

/*@brief: sign up
 * @params: form, history
 * form: registration details
 * history: react-router-dom function that allows for url redirection
 * @author: Justin To
 */
export const signUpFunc = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(form);
    console.log(data);
    const action = { type: AUTH, data };
    dispatch(action);
    history.push("/"); //return us to homepage
  } catch (error) {
    console.log(error);
  }
};

/*@brief: sign in
 * @params: form, history
 * form: login details
 * history: react-router-dom funcion that allows for URl redirection
 * @author: Justin To
 */
export const signIn = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);
    const action = { type: AUTH, data };
    dispatch(action);
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

/*@brief: sign in using google
 * @params: form, token, history
 * form: google sign in details
 * token: google auth token
 * history: react-router-dom library that allows for URL redirection
 * @author: Justin To
 */
export const googleSign = (form, token, history) => async (dispatch) => {
  try {
    const { data } = await api.googleSign(form, token);
    console.log(data);
    const action = { type: AUTH, data };
    dispatch(action);
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

/*@brief: update a user based on an id
 * @params: id
 * req: id of the user
 * @author: Justin To
 */
export const updateUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id);
    const action = { type: AUTH, data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
