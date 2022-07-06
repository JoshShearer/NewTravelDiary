import { createModel, RematchDispatch } from '@rematch/core';
import type { RootModel } from '#src/models/model';

type defaultState = [
  {
    id: number;
    title: string;
    info: string;
    date: Date;
    map: {
      gps: {
        lat: number;
        lng: number;
      },
      location: {
        address: string;
        city: string;
        state: string;
        country: string;
      },
    };
  }
];

export const models_dEntry = createModel<RootModel>()({
  state: [
    {
      id: 0,
      title: '',
      info: '',
      date: '',
      map: {
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
    },
  ] as any as defaultState,
  reducers: {
    setNewEntry(state, payload: defaultState) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  // selectors: (slice, createSelector, hasProps) => ({

  // }),
  effects: (dispatch) => ({
    // async reducerRenameAsync(payload: string, state) {
    //   dispatch.models_dEntry.reducerRename(payload);
    // },
  }),
});
