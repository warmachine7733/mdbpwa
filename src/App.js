import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import ConnectedIntlProvider from "./commons/intl/ConnectedIntlProvider";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedIntlProvider>
        <Routes />
      </ConnectedIntlProvider>
    </Provider>
  );
};

export default App;
