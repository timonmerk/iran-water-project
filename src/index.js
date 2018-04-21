import React from "react";
import { render } from "react-dom";
import "./css/style.css";

class Header extends React.Component {
  render() {
    return <h1>Iran Water Thingie</h1>;
  }
}

render(<Header />, document.querySelector("#main"));
