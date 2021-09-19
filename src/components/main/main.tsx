import React, { Fragment } from "react";
import Box from "@mui/material/Box";
// @ts-ignore
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../main/home/home-page";
import AboutPage from "../main/about/about-page";
import ContactPage from "../main/contact/contact";
import SessionPage from "../main/session/session-page";

const Main: React.FC<any> = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/session" component={SessionPage} />
        <Route exact path="/contact-us" component={ContactPage} />
        <Route exact path="/about-us" component={AboutPage} />
      </Switch>
    </Fragment>
  );
};

export default Main;
