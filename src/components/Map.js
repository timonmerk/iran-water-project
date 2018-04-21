import  React from "react"

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount() {
        const platform = new window.H.service.Platform({
            'app_id': 'unyIrd7P03XE87PfpTHo',
            'app_code': 'rHqq-LjEuGwD9XwrRktyLw'
          });

        const defaultLayers = platform.createDefaultLayers();

        const node = this.myRef.current;

        const map = new window.H.Map(
            document.getElementById("app-container"),
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: 30.513619, lng: 56.881851 }
            })

        map.addLayer(defaultLayers.incidents);

        // Define a variable holding SVG mark-up that defines an icon image:
        var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">W</text></svg>';

        // Create an icon, an object holding the latitude and longitude, and a marker:
        var icon = new window.H.map.Icon(svgMarkup)
        let coords = { lat: 30.513619, lng: 56.881851 }
        let marker = new window.H.map.Marker(coords, {icon: icon})

        // Add the marker to the map and center the map at the location of the marker:
        map.addObject(marker)
        map.setCenter(coords)

    }

    render() {
        return <div ref={this.myRef} ></div>

    }
}


export default Map