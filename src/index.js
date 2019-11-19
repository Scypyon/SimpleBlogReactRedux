import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";

import App from "App.jsx";
import Profile from "Modules/Profile/Profile.jsx";
import Gallery from "Modules/Gallery/Gallery.jsx";

function NoMatch() {
  return <Redirect to="/profile" />;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/gallery" component={Gallery} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);
