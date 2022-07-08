import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Comps_Map_Marker } from '#src/Comps/Map/Marker';
import { Comps_misc_Spinner } from '#src/Comps/misc/Spinner';
import isEmpty from 'lodash.isempty'

// import Map from './Map';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Comps_Map_BaseMap (props) {
  console.log("🚀 ~ file: index.jsx ~ line 15 ~ Comps_Map_BaseMap ~ props.mapSize", props.mapSize)
  console.log("🚀 ~ file: index.jsx ~ line 17 ~ Comps_Map_BaseMap ~ props.location", props.location)
  console.log("🚀 ~ file: index.jsx ~ line 22 ~ Comps_Map_BaseMap ~ props.zoom", props.zoom)
   
  return (
    // Important! Always set the container height explicitly
    <div style={props.mapSize}>
      {!isEmpty(props.location) ? (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCBC8EA64V1xJr6hoFqUCvwDFo4o9Lp2gM' }}
        center={props.location}
        zoom={props.zoom}

      >
      {/* <Comps_Map_Marker
        text={"Here"}
        lat={props.location.lat}
        lng={props.location.lng}/> */}
        
      </GoogleMapReact>)
      :<Spinner/>}

    </div>
  );
  }

