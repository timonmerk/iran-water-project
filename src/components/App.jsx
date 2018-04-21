import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Language from "./Language";
import NoUnit from "./NoUnit";
import ChooseUnit from "./ChooseUnit";
import Direction from "./Direction";
import MapEnd from "./MapEnd";
import Broken from "./issues/Broken";
import Map from "./Map";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Route exact path="/" render={() => <Language />} />
          <Route exact path="/choose-unit" render={() => <ChooseUnit />} />
          <Route exact path="/no-unit" render={() => <NoUnit />} />
          <Route exact path="/direction" render={() => <Direction />} />
          <Route exact path="/map-end" render={() => <MapEnd />} />
          <Route exact path="/broken" render={() => <Broken />} />
          <Route exact path="/map" render={() => <Map />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
