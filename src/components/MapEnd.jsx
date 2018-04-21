import React from "react";

class MapEnd extends React.Component {
  render() {
    return (
      <div className="end-map-container container">
        <div className="col-10 offset-1">
          <h3> ممنون از نظر شما </h3>
          <p>نزدیکترین دستگاه های تصفیه به شما</p>
          <div className="map-container">
            <img className="map-image" src="images/map.png" />
          </div>
          <p className="yellow">
            برای مسایل ضروری میتوانید با این شماره با ما تماس بگیرید
            982188036233+
          </p>
        </div>
      </div>
    );
  }
}

export default MapEnd;
