import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const platform = new window.H.service.Platform({
      app_id: "unyIrd7P03XE87PfpTHo",
      app_code: "rHqq-LjEuGwD9XwrRktyLw"
    });

    const defaultLayers = platform.createDefaultLayers();

    const node = this.myRef.current;

    const map = new window.H.Map(
      document.getElementById("app-container"),
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 30.513619, lng: 56.881851 }
      }
    );

    map.addLayer(defaultLayers.incidents);

    // Define a variable holding SVG mark-up that defines an icon image:
    var svgMarkup =
      '<svg width="24" height="24" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
      'height="22" /><text x="12" y="18" font-size="12pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">اب</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new window.H.map.Icon(svgMarkup);
    let coordinates = [
      { lat: 30.513619, lng: 56.881851 },
      { lat: 30.470495, lng: 56.895669 },
      { lat: 30.658778, lng: 56.707672 },
      { lat: 30.308124, lng: 57.076137 },
      { lat: 30.215204, lng: 56.815945 }
    ];

    coordinates.map(c => {
      let marker = new window.H.map.Marker(c, { icon: icon });
      map.addObject(marker);
    });
    map.setCenter(coordinates[0]);
  }

  render() {
    return <div ref={this.myRef} />;
  }
}

export default Map;
