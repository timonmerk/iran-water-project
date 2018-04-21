import React from "react";
import { Link } from "react-router-dom";

class DirtyWater extends React.Component {
  render() {
    return (
      <div className="issue-container container">
        <div className="col-10 offset-1">
          <img
            src="/images/icon3.png"
            class="icon-big image-fluid"
            alt="dirty water"
          />
          <h2>خراب است</h2>

          <div className="row">
            <div className="col-10 offset-1">
              <h5>
                لطفا برای ضبط مشکلی که در مورد دستگاه دارید، دکمه را فشار دهید
              </h5>
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

export default DirtyWater;
