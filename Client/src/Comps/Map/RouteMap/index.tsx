import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Comps_Map_Marker } from '#src/Comps/Map/Marker';
import { Comps_misc_Spinner } from '#src/Comps/misc/Spinner';
import isEmpty from 'lodash.isempty'
// import useSelector from 'reselect';
import { Comps_Map_BaseMap } from '#src/Comps/Map/BaseMap';

import { createStructuredSelector } from '#src/models/utils'
import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'


const defaultProps = {
  mapSize: 8,
  location: [0,0],
  idKey: 'default',
} as {
  mapSize: number,
  location: [number, number]
  idKey?: string;
  children?: JSX.Element;
};

const selector = createStructuredSelector({
  entryData: (root) => root.models_dEntry
})

export const Comps_Map_RouteMap = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  
  // useEffect(() => {
    
  // },[]);

  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)


  return (
    <div style={props.mapSize}>
      {!isEmpty(props.location) ? (
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPS_API }}
        center={props.location}
        zoom={props.zoom}

      >
      <Marker
        text={"Here"}
        lat={props.location.lat}
        lng={props.location.lng}/>
        
      </GoogleMapReact>)
      :<Comps_misc_Spinner/>}
  </div>
    // <div className="Comps_Map_RouteMap">
    //     <p>Comps_Map_RouteMap</p>
    // </div>
  );
}