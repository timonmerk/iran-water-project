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

        var map = new window.H.Map(
            document.getElementById("app-container"),
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: 30.513619, lng: 56.881851 }
            })
    }

    render() {
        return <div ref={this.myRef} ></div>

    }
}


export default Map