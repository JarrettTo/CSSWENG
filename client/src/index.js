/*@brief: Main Index File
 * @author: Justin To and Daniel Capinpin
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App.js";
const store = createStore(reducers, compose(applyMiddleware(thunk))); //holds the state tree of our app
ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/*call provider template and pass the variable store to it*/}
    <App />,
  </Provider>,
  document.getElementById("root")
);
