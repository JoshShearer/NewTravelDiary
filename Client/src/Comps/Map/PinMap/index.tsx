import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Comps_Map_Marker } from '#src/Comps/Map/Marker';
import { Comps_misc_Spinner } from '#src/Comps/misc/Spinner';
import isEmpty from 'lodash.isempty';

// import { RootState, Actions, dispatch, store } from '#src/models/store'

const defaultProps = {
  location: {
    lat: 37.80552,
    lng: -122.3237437,
  },
  mapSize: { width: "50%", height: "50%" },
  zoom: 8,
  idKey: 'default',
} as unknown as {
  location: {
    lat: number;
    lng: number;
  };
  mapSize?: {width: string, height: string };
  zoom?: number;
  idKey?: string;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })
export const Comps_Map_PinMap = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  console.log("🚀 ~ file: index.tsx ~ line 40 ~ props.location", props.location)
  console.log("🚀 ~ file: index.tsx ~ line 33 ~ props", props)
  console.log("🚀 ~ file: index.tsx ~ line 31 ~ props.zoom", props.zoom)
  console.log("🚀 ~ file: index.tsx ~ line 38 ~ {props.mapSize", props.mapSize)

  return (
    <div className="Comps_Map_BaseMap">
      <div style={props.mapSize}>
        {!isEmpty(props.location) ? (
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPS_API }}
            center={props.location}
            zoom={props.zoom}
          >
            <Comps_Map_Marker
              text={'Here'}
              lat={props.location.lat}
              lng={props.location.lng}
            />
          </GoogleMapReact>
        ) : (
          <Comps_misc_Spinner />
        )}
      </div>
    </div>
  );
};
