import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Language from "./Language";
import NoUnit from "./issues/NoUnit";
import ChooseUnit from "./ChooseUnit";
import Direction from "./Direction";
import MapEnd from "./MapEnd";
import Broken from "./issues/Broken";
import LowPressure from "./issues/LowPressure";
import Corruption from "./issues/Corruption";
import DirtyWater from "./issues/DirtyWater";
import NoWater from "./issues/NoWater";
import Map from "./Map";
import SignIn from "./portal/SignIn";

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
          <Route exact path="/low-pressure" render={() => <LowPressure />} />
          <Route exact path="/corruption" render={() => <Corruption />} />
          <Route exact path="/dirty-water" render={() => <DirtyWater />} />
          <Route exact path="/no-water" render={() => <NoWater />} />
          <Route exact path="/sign-in" render={() => <SignIn />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
