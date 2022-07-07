import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Comps_Map_Marker } from '#src/Comps/Map/Marker';
import { Comps_misc_Spinner } from '#src/Comps/misc/Spinner';
import isEmpty from 'lodash.isempty'
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'



const defaultProps = {
  location: {
    Lat: 0,
    lng: 0
  },
  mapSize: 8,
  zoom: 8, 
  idKey: 'default',
} as unknown as {
  location: {
    lat: number, 
    lng: number
  },
  mapSize: number;
  zoom: number;
  idKey?: string;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_Map_BaseMap = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  
  // useEffect(() => {
    
  // },[]);

  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)


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
        text={"Here"}
        lat={props.location.lat}
        lng={props.location.lng}/>
        
      </GoogleMapReact>)
      :<Comps_misc_Spinner/>}
</div>
    </div>
  );
};

// export class Comps_Map\BaseMap extends React.PureComponent<Props> {
// 	render() {
// 		const { countState } = this.props
// 		return <div>Comps_Map\BaseMap</div>
// 	}
// }

// const selection = store.select((models) => ({
//   total: models.cart.total,
//   eligibleItems: models.cart.wouldGetFreeShipping,
// }));

 