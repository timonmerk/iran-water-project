import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Intro from "./Intro";
import NoUnit from "./NoUnit";
import ChooseUnit from "./ChooseUnit";
import ReportIssue from "./ReportIssue";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container container">
          <Route exact path="/" render={() => <Intro />} />
          <Route exact path="/no-unit" render={() => <NoUnit />} />
          <Route exact path="/choose-unit" render={() => <ChooseUnit />} />
          <Route exact path={`/:id`} render={() => <ReportIssue />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
