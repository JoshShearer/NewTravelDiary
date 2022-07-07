import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { Comps_misc_Spinner } from '../misc/spinner';
import isEmpty from 'lodash.isempty'
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'

import { Comps_misc_placeholder } from '#src/Comps';



const defaultProps = {
  mapsize: 8,
  location: [0,0],
  idKey: 'default',
} as {
  mapsize: number,
  location: [number, number]
  idKey?: string;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_Map = (_props: typeof defaultProps) => {
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
  );
};

// export class Comps_Map extends React.PureComponent<Props> {
// 	render() {
// 		const { countState } = this.props
// 		return <div>Comps_Map</div>
// 	}
// }

// const selection = store.select((models) => ({
//   total: models.cart.total,
//   eligibleItems: models.cart.wouldGetFreeShipping,
// }));

 