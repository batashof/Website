import React, { Component } from "react";
import "./locations.css";
import { Location, Layout, List } from "../../components";

class Locations extends Component {
  render() {
    return (
      <Layout width="full" name="Locations" title="OUR LOCATIONS">
        <List layout="horisontal">
          <Location city="manchester" href="/get-in-touch/manchester/" />
          <Location city="london" href="/get-in-touch/london/" />
          <Location city="minsk" href="/get-in-touch/minsk/" />
          <Location city="brest" href="/get-in-touch/brest/" />
          <Location city="grodno" href="/get-in-touch/grodno/" />
        </List>
      </Layout>
    );
  }
}

export default Locations;
