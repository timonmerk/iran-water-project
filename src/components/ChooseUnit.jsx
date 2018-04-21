import React from "react";
import { Link } from "react-router-dom";

class ChooseUnit extends React.Component {
  render() {
    return (
      <div className="choose-unit container">
        <div className="row">
          <div className="col-10 offset-1">
            <h2>لطفا شماره دستگاه تصفیه ای که استفاده می کنید، مشخص کنید</h2>
          </div>
        </div>
        <div>
          <Link to="/direction" className="button">
            ادامه
          </Link>
        </div>
      </div>
    );
  }
}

export default ChooseUnit;
