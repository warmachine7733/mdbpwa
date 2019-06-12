import React from "react";

import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import LangScreen from "./components/layouts/languageScreen";
// import TitleScreen from "./components/layouts/TitleScreen";

import RouteHandler from "./commons/RouteHandler";
const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/title" component={TitleScreen} /> */}
        <Route path="/language" component={LangScreen} />

      </Switch>
    </HashRouter>
  );
};

export default Routes;
