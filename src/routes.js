import React from "react";

import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import LangScreen from "./components/layouts/languageScreen";
import { Offline, Online } from "react-detect-offline";
// import TitleScreen from "./components/layouts/TitleScreen";
import Toaster from "./components/UI/Toaster/Toaster";

import RouteHandler from "./commons/RouteHandler";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route path="/title" component={TitleScreen} /> */}
          <Route path="/" component={LangScreen} />
        </Switch>
      </HashRouter>
    );
  }
  componentWillMount() {
   
    //   <Offline>
    //   <Toaster condition="offline" />
    // </Offline>
    // <Online>
    //   <Toaster condition="online" />
    // </Online>
  }
}

export default Routes;
