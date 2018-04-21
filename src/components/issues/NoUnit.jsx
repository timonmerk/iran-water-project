import React from "react";
import { Link } from "react-router-dom";

class NoUnit extends React.Component {
  render() {
    return (
      <div className="issue-container container">
        <div className="col-10 offset-1">
          <img
            src="/images/icon5.png"
            class="icon-big image-fluid"
            alt="no water"
          />
          <h2>دستگاه نداریم</h2>

          <div className="row">
            <div className="col-12">
              <h5> لطفا برای ضبط نام کوره و موقعیت آن، دکمه را فشار دهید</h5>
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

          <div className="sound">
            <i class="fa fa-volume-up blink-me" />
          </div>
        </div>
      </div>
    );
  }
}

export default NoUnit;
