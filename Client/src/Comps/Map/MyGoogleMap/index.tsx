import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import { createStructuredSelector } from '#src/models/utils';
import { useSelector } from '#src/models/hooks';

import { RootState, Actions, dispatch, store } from '#src/models/store';

import { Comps_Map_Marker } from '#src/Comps';
import styled from 'styled-components';

const InfoDiv = styled.main`
  bottom-margin: 200px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
`;

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};

const selector = createStructuredSelector({
  draggable: (root) => root.models_Location.map.draggable,
  center: (root) => root.models_Location.map.center,
  mapApiLoaded: (root) => root.models_Location.map.mapApiLoaded,
  mapInstance: (root) => root.models_Location.map.mapInstance,
  mapApi: (root) => root.models_Location.map.mapApi,
  geoCoder: (root) => root.models_Location.map.geoCoder,
  places: (root) => root.models_Location.map.places,
  zoom: (root) => root.models_Location.map.zoom,
  address: (root) => root.models_Location.map.address,
  lat: (root) => root.models_Location.map.mouse.lat,
  lng: (root) => root.models_Location.map.mouse.lng,
});

export const Comps_Map_MyGoogleMap = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  useEffect(() => {
    const response = setCurrentLocation()
      .then((coords) => {
        if (coords !== null) {
          console.log("🚀 ~ file: index.tsx ~ line 48 ~ .then ~ coords", coords)
          console.log('Geolocation Success');
          dispatch.models_Location.setMapGPS(coords);
        } else {
          console.log('Geolocation Permission Denied');
        }
      })
      .catch((error) => {
        console.log('Geolocation permission denied ', error.message);
      });
  }, []);

  const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootselected.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)

  const onMarkerInteraction = (childKey, childProps, mouse) => {
    dispatch.models_Location.setDrag(false);
    dispatch.models_Location.setMouseLoc({
      lat: mouse.lat,
      lng: mouse.lng,
    });
  };
  const onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
    dispatch.models_Location.setDrag(true);
    _generateAddress();
  };

  const onMarkerInteractionDblClick = (childKey, childProps, mouse) => {
    _generateAddress();
  };

  const _onChange = ({ center, zoom }) => {
  console.log("🚀 ~ file: index.tsx ~ line 85 ~ zoom", zoom)
  console.log("🚀 ~ file: index.tsx ~ line 85 ~ center", center)
    dispatch.models_Location.setMapCenter({
      center: center,
      zoom: zoom,
    });
  };

  const _onClick = (value) => {
  console.log("🚀 ~ file: index.tsx ~ line 94 ~ value", value)
    dispatch.models_Location.setMouseLoc({
      lat: value.lat,
      lng: value.lng,
    });
  };

  const apiHasLoaded = (map, maps) => {
  console.log("🚀 ~ file: index.tsx ~ line 97 ~ apiHasLoaded ~ maps", maps)
  console.log("🚀 ~ file: index.tsx ~ line 97 ~ apiHasLoaded ~ map", map)
    dispatch.models_Location.setAPILoad({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });

    _generateAddress({mapApi: maps});
  };

  const _generateAddress = ({mapApi}) => {
  console.log("🚀 ~ file: index.tsx ~ line 109 ~ mapApi", mapApi)
    // const { mapApi } = selected.mapApi;

    const geocoder = new mapApi.Geocoder();

    geocoder.geocode(
      { location: { lat: selected.lat, lng: selected.lng } },
      (results, status) => {
      console.log("🚀 ~ file: index.tsx ~ line 121 ~ status", status)
      console.log("🚀 ~ file: index.tsx ~ line 121 ~ results", results)
        if (status === 'OK') {
          if (results[0]) {
            const addComps = results[0].address_components;
            dispatch.models_Location.setCurrentLoc({
              gps: { lat: selected.lat, lng: selected.lng },
              location: {
                address: results[0].formatted_address,
                city: Object.keys(addComps)
                  .filter(
                    (key) =>
                      addComps[key].types.filter(
                        (type) => type === 'locality'
                      ) == 'locality'
                  )
                  .map((key, index) => {
                    return addComps[key].long_name;
                  })[0],
                state: Object.keys(addComps)
                  .filter(
                    (key) =>
                      addComps[key].types.filter(
                        (type) => type === 'administrative_area_level_1'
                      ) == 'administrative_area_level_1'
                  )
                  .map((key, index) => {
                    return addComps[key].long_name;
                  })[0],
                country: Object.keys(addComps)
                  .filter(
                    (key) =>
                      addComps[key].types.filter(
                        (type) => type === 'country'
                      ) == 'country'
                  )
                  .map((key, index) => {
                    return addComps[key].long_name;
                  })[0],
              },
            });
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  };

  // Get Current Location Coordinates
  const setCurrentLocation = async () => {
    return new Promise((resolve, reject) =>
      navigator.permissions
        ? navigator.permissions
            .query({
              name: 'geolocation',
            })
            .then((permission) =>
              // is geolocation granted?
              permission.state === 'granted'
                ? navigator.geolocation.getCurrentPosition((position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                      })
                  })
                : resolve(null)
            )
        : reject(new Error('Permission API is not supported'))
    );
  };
  console.log("🚀 ~ file: index.tsx ~ line 199 ~ selected.center", selected.center)
  console.log("🚀 ~ file: index.tsx ~ line 201 ~ selected.zoom", selected.zoom)
  console.log("🚀 ~ file: index.tsx ~ line 220 ~ selected.lat", selected.lat)
  console.log("🚀 ~ file: index.tsx ~ line 220 ~ selected.lng", selected.lng)
  
  return (
    <Wrapper>
      <GoogleMapReact
        center={selected.center}
        zoom={selected.zoom}
        draggable={selected.draggable}
        onChange={_onChange}
        onChildDblClick={onMarkerInteractionDblClick}
        onChildMouseDown={onMarkerInteraction}
        onChildMouseUp={onMarkerInteractionMouseUp}
        onChildMouseMove={onMarkerInteraction}
        onChildClick={() => console.log('child click')}
        onClick={_onClick}
        bootstrapURLKeys={{
          key: "AIzaSyCBC8EA64V1xJr6hoFqUCvwDFo4o9Lp2gM",
          libraries: ['places', 'geometry'],
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        <Comps_Map_Marker
          text={selected.address}
          lat={selected.lat}
          lng={selected.lng}
        />
      </GoogleMapReact>

      <InfoDiv className="info-wrapper">
        <div className="map-details">
          Latitude: <span>{selected.lat}</span>, Longitude:{' '}
          <span>{selected.lng}</span>
        </div>
        <div className="map-details">
          Zoom: <span>{selected.zoom}</span>
        </div>
        <div className="map-details">
          Address: <span>{selected.address}</span>
        </div>
      </InfoDiv>
    </Wrapper>
  );
};
