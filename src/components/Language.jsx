import React from "react";
import { Link } from "react-router-dom";

class Language extends React.Component {
  render() {
    return (
      <div className="language-container container">
        <div className="col-10 offset-1">
          <div className="logo">
            <i class="fa fa-tint" />
          </div>
          <h1 className="title">Choose Language</h1>
          <h4 className="orange">
            <Link to="/choose-unit" className="language-option">
              فارسی
            </Link>
          </h4>
          <h4 className="pink">
            <Link to="/Direction" className="language-option">
              پښتو‎
            </Link>
          </h4>
          <h4 className="yellow">
            <Link to="/Direction" className="language-option ">
              دری‎
            </Link>
          </h4>
        </div>
        <div className="sound">
          <i class="fa fa-volume-up blink-me" />
        </div>
      </div>
    );
  }
}

export default Language;
