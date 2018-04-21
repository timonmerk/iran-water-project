import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Language from "./Language";
import NoUnit from "./NoUnit";
import ChooseUnit from "./ChooseUnit";
import ReportIssue from "./ReportIssue";
import Direction from "./Direction";
import MapEnd from "./MapEnd";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Route exact path="/" render={() => <Language />} />
          <Route exact path="/choose-unit" render={() => <ChooseUnit />} />
          <Route exact path="/direction" render={() => <Direction />} />
          <Route exact path="/no-unit" render={() => <NoUnit />} />
          <Route exact path={`/:id`} render={() => <ReportIssue />} />
          <Route exact path={`/map-end`} render={() => <MapEnd />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
