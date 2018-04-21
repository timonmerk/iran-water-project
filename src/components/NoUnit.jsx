import React from "react";
import { Link } from "react-router-dom";

class NoUnit extends React.Component {
  render() {
    return (
      <div className="no-unit container">
        <div className="row">
          <div className="col-10 offset-1">
            <h2> لطفا برای ضبط نام کوره و موقعیت آن، دکمه را فشار دهید</h2>
          </div>
        </div>
        <div className="btn-circle">
          <i class="fa fa-microphone" />
        </div>
        <div>
          <Link to="/map-end" className="button">
            ادامه
          </Link>
        </div>
      </div>
    );
  }
}

export default NoUnit;
