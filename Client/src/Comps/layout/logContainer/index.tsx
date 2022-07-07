import React, { useEffect } from 'react';

import { Comps_Map_BaseMap } from '#src/Comps/Map/BaseMap';
import { createStructuredSelector } from '#src/models/utils'
import { useSelector } from '#src/models/hooks';

import { RootState, Actions, dispatch, store } from '#src/models/store'

const defaultProps = {
  entry: {
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
  key: 0,
} as unknown as {
  entry: {
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
  },
  key?: number;
  children?: JSX.Element;
};

export const Comps_layout_logContainer = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  
  return (
    <div className="Comps_layout_logContainer">
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Comps_Map_BaseMap location={props.entry.map.gps} />
            </div>
          </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};