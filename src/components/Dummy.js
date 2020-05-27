import React from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "./dumm.css";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hheWVzdGUiLCJhIjoiY2s4dmpveXhqMDQ0NDNtcDR3bWwzYmVsbCJ9.wfdpvQtgLMPbm6HC1OmV1g";
class Dummy extends React.Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.lng},${this.state.la}.json?access_token=pk.eyJ1Ijoic2hheWVzdGUiLCJhIjoiY2s4dnAzZmhsMDFjMzNmb2dwcW02YzRrZiJ9.XLLplNMJyP5x8knYH_oFkg`
      )
      .then((res) => console.log(res.data))
      .catch((err)=>console.log(err))
  }
  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div className="placeMark">my</div>

        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
export default Dummy;
