import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Language from "./Language";
import NoUnit from "./NoUnit";
import ChooseUnit from "./ChooseUnit";
import ReportIssue from "./ReportIssue";
import Direction from "./Direction";
import Map from './Map'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container" id="app-container">
          <Route exact path="/" render={() => <Language />} />
          <Route exact path="/choose-unit" render={() => <ChooseUnit />} />
          <Route exact path="/direction" render={() => <Direction />} />
          <Route exact path="/no-unit" render={() => <NoUnit />} />
          <Route exact path="/map" render={() => <Map />} />
          <Route exact path={`/:id`} render={() => <ReportIssue />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
