import React from "react";
import { Link } from "react-router-dom";

class Direction extends React.Component {
  render() {
    return (
      <div className="container direction-container">
        <h2>لطفا مشکل را بیان کنید</h2>

        <div className="row">
          <div className="col-5 offset-1">
            <Link to="/no-unit">
              <img src="/images/icon5.png" class="icon-set" alt="no access" />
              <p>دستگاه نداریم</p>
            </Link>
          </div>
          <div className="col-5">
            <Link to="/broken">
              <img src="/images/icon1.png" class="icon-set" alt="broken" />
              <p>خراب است</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-5 offset-1">
            <Link to="/low-pressure">
              <img
                src="/images/icon4.png"
                class="icon-set"
                alt="low pressure"
              />
              <p>فشار آب</p>
            </Link>
          </div>
          <div className="col-5">
            <Link to="/no-water">
              <img src="/images/icon6.png" class="icon-set" alt="no water" />
              <p> آب نیست</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-5 offset-1">
            <Link to="/dirty-water">
              <img src="/images/icon3.png" class="icon-set" alt="dirty water" />
              <p> کیفیت آب </p>
            </Link>
          </div>
          <div className="col-5">
            <Link to="/corruption">
              <img src="/images/icon2.png" class="icon-set" alt="corruption" />
              <p> سو استفاده</p>
            </Link>
          </div>
        </div>
        <div className="sound">
          <i class="fa fa-volume-up blink-me" />
        </div>
      </div>
    );
  }
}

export default Direction;
