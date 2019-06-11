import React, { Component } from "react";
import PotholeMap from "../../components/PotholeMap";
import swal from "sweetalert";

export default class MapPage extends Component {
  render() {
    swal(
      'Hi there, these are potholes reported across the city. If you want to report a pothole you found, simply search for the street address and click "Report this Location". Thank you for making the city better!'
    );
    return (
      <div>
        <PotholeMap />
      </div>
    );
  }
}
