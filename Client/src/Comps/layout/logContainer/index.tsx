import React, { useEffect } from 'react';

import { Comps_Map_BaseMap } from '#src/Comps/Map/BaseMap';

import { RootState, Actions, dispatch, store } from '#src/models/store';

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
      };
      location: {
        address: string;
        city: string;
        state: string;
        country: string;
      };
    };
  };
  key?: number;
  children?: JSX.Element;
};

export const Comps_layout_logContainer = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Comps_Map_BaseMap location={props.entry.map.gps} />
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
