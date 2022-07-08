import { createModel, RematchDispatch } from '@rematch/core';
import type { RootModel } from '#src/models/model';

type defaultState = {
  tempTitle: string;
  tempInfo: string;
  tempAddress: string;
  entryData: [
    {
      id: number;
      title: string;
      info: string;
      date: string;
      time: string;
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
    }
  ];
};

export const models_dEntry = createModel<RootModel>()({
  state: {
    tempTitle: '',
    tempInfo: '',
    tempAddress: '',
    entryData: [
      {
        id: 0,
        title: '',
        info: '',
        date: '',
        time: '',
        gps: {
          lat: 0,
          lng: 0,
        },
        location: {
          address: '',
          city: '',
          state: '',
          country: '',
        },
      },
    ],
  } as any as defaultState,
  reducers: {
    setEntries(state, payload: defaultState) {
      return {
        ...state,
        entryData: payload,
      };
    },
    setTitle(state, payload: string) {
      return {
        ...state,
        tempTitle: payload,
      };
    },
    setInfo(state, payload: string) {
      return {
        ...state,
        tempInfo: payload,
      };
    },
    setAddress(state, payload: string) {
      return {
        ...state,
        tempAddress: payload,
      }
    }
  },
  // selectors: (slice, createSelector, hasProps) => ({

  // }),
  effects: (dispatch) => ({
    // async reducerRenameAsync(payload: string, state) {
    //   dispatch.models_dEntry.reducerRename(payload);
    // },
  }),
});
