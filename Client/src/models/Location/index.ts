import { createModel, RematchDispatch } from '@rematch/core';
import type { RootModel } from '#src/models/model';

type defaultState = {
  gps: {
    lat: number;
    lng: number;
  };
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
  };
  map: {
    draggable: boolean;
    center: [number, number];
    mapApiLoaded: false;
    mapInstance: null;
    mapApi: null;
    geoCoder: null;
    places: [];
    zoom: 9;
    address: '';
    lat: null;
    lng: null;
  };
};

export const models_Location = createModel<RootModel>()({
  state: {
    gps: {
      lat: 37.80552,
      lng: -122.3237437,
    },
    location: {
      address: 'Treasure Island',
      city: 'San Francisco',
      state: 'California',
      country: 'United States',
    },
    map: {
      draggable: false,
      center: [37.80552, -122.3237437],
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      geoCoder: null,
      places: [],
      zoom: 9,
      address: '',
      lat: null,
      lng: null,
    },
  } as defaultState,
  reducers: {
    setCurrentLoc(state, payload: defaultState) {
      return {
        ...state,
        gps: payload.gps,
        location: payload.location
      };
    },
    setGPS(state, payload: defaultState) {
      return {
        ...state,
        ...payload,
      };
    },
    setDrag(state, payload: defaultState) {
      return {
        ...state,
        map: {
          ...state.map,
          draggable: payload,
        },
      };
    },
    setMouseLoc(state, payload: {lat:number,lng:number}) {
      return {
        ...state,
        map: {
          ...state.map,
          lat: payload.lat,
          lng: payload.lng
        }
      }
    },
    setMapCenter(state, payload) {
      return{
        ...state,
        map: {
          ...state.map,
          center: payload.center,
          zoom: payload.zoom
        }
      }
    }
  },
  // selectors: (slice, createSelector, hasProps) => ({

  // }),
  effects: (dispatch) => ({
    // async reducerRenameAsync(payload: string, state) {
    //   dispatch.models_Location.reducerRename(payload);
    // },
  }),
});
