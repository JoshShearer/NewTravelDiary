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
    center: {
      lat: number;
      lng: number;
    };
    mapApiLoaded: false;
    mapInstance: null;
    mapApi: null;
    geoCoder: null;
    places: null;
    zoom: number;
    address: string;
    mouse: {
      lat: number;
      lng: number;
    };
  };
};

export const models_Location = createModel<RootModel>()({
  state: {
    gps: {
      lat: 35.80552,
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
      center: {
        lat: 36.80552,
        lng: -122.3237437,
      },
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      geoCoder: null,
      places: [],
      zoom: 11,
      address: '',
      mouse: {
        lat: 37.80552,
        lng: -122.3237437,
      },
    },
  } as unknown as defaultState,
  reducers: {
    setCurrentLoc(state, payload: defaultState) {
      return {
        ...state,
        gps: payload.gps,
        location: payload.location,
      };
    },
    setMapGPS(state, payload: defaultState) {
      return {
        ...state,
        map: {
          ...state.map,
          center: payload,
        },
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
    setMouseLoc(state, payload: { lat: number; lng: number }) {
      return {
        ...state,
        map: {
          ...state.map,
          mouse: {
            lat: payload.lat,
            lng: payload.lng,
          },
        },
      };
    },
    setMapCenter(state, payload) {
      return {
        ...state,
        map: {
          ...state.map,
          center: payload.center,
          zoom: payload.zoom,
        },
      };
    },
    setAPILoad(state, payload) {
      return {
        ...state,
        map: {
          ...state.map,
          mapApiLoaded: payload.mapApiLoaded,
          mapInstance: payload.mapInstance,
          mapApi: payload.mapApi,
        },
      };
    },
  },
  // selectors: (slice, createSelector, hasProps) => ({

  // }),
  effects: (dispatch) => ({
    // async reducerRenameAsync(payload: string, state) {
    //   dispatch.models_Location.reducerRename(payload);
    // },
  }),
});
