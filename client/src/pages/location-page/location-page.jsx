import React, { Component } from "react";
import locations from "./location.json";
import "./location-page.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { List, Layout } from "../../components";
export default class LocationPage extends Component {
  render() {
    const data = locations[this.props.match.params.id];
    const Map = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={data.map.zoom}
          defaultCenter={{ lat: data.map.latitude, lng: data.map.longitude }}
        >
          <Marker
            position={{ lat: data.map.latitude, lng: data.map.longitude }}
          />
        </GoogleMap>
      ))
    );
    return (
      <main>
        <section
          className="Location-page-banner"
          style={{
            backgroundImage: `url(${data.officeImage})`
          }}
        >
          <h2 className="Location-page-banner__title">{data.city}</h2>
        </section>
        <Layout
          width="full"
          name="Location-page-address"
          title={"Our " + data.city + " office can be found at:"}
        >
          <List layout="vertical">
            {data.address}
            {data.city}
            {data.index}
            &nbsp;
            {data.tel}
          </List>
        </Layout>
        <section
          className="Location-page-description"
          style={{
            backgroundImage: `url(${data.image})`
          }}
        >
          <div className="Location-page-description__wrap ">
            <h2 className="Location-page-description__title">{data.city}</h2>
            <p className="Location-page-description__text">{data.text}</p>
          </div>
        </section>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `335px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </main>
    );
  }
}
