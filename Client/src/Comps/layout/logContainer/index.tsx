import React, { useState } from 'react';
import {
  DocumentTextIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  CalendarIcon,
  ClockIcon,
  TrashIcon,
  PencilIcon,
} from '@heroicons/react/solid';
import { Comps_Map_BaseMap } from '#src/Comps/Map/BaseMap';
import { Comps_misc_Modal } from '#src/Comps/misc/Modal';

import { RootState, Actions, dispatch, store } from '#src/models/store';

const defaultProps = {
  entry: {
    id: 0,
    title: '',
    info: '',
    date: '',
    time: '',
    gps: {
      lat: 37.80552,
      lng: -122.3237437,
    },
    location: {
      address: '',
      city: '',
      state: '',
      country: '',
    },
  },
  key: 0,
} as unknown as {
  remove: () => void;
  entry: {
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
  };
  key?: number;
  children?: JSX.Element;
};

export const Comps_layout_logContainer = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const [editMode, setEditMode] = useState(false);
  const [modal, setModal] = useState(false);

  const deleteEntry = () => {
    console.log('removing entry ', props.entry);
    props.remove(props.entry);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Comps_Map_BaseMap
              location={props.entry.gps}
              mapSize={{ width: '100%', height: '50vh' }}
              zoom={11}
            />
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <div className="border-t border-gray-200 px-1 py-5 sm:p-0">
              <table className="sm:divide-y sm:divide-gray-200 table-auto">
                <tr className=" grow">
                  <td className="whitespace-nowrap flex-none px-3 py-4 text-sm text-gray-500">
                    <DocumentTextIcon className="h-7 w-7" />
                  </td>
                  <td className="whitespace-nowrap px-3 text-sm text-gray-500  ">
                    {!editMode ? (
                      <span className="grow text-2xl ">{props.entry.title}</span>
                    ) : (
                      <span className="grow">
                        <input
                          id="title"
                          name="title"
                          type="title"
                          required
                          onChange={dispatch.models_dEntry.setTitle}
                          defaultValue={props.entry.title}
                          className="flex-shrink w-64 appearance-none block px-1 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                      </span>
                    )}
                  </td>
                  <td className=" whitespace-nowrap flex-none py-4 pl-3 pr-4 text-sm text-gray-500 sm:pr-6 float-right">
                    <button onClick={() => setModal(true)}>
                      <TrashIcon className="h-7 w-7 " />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <InformationCircleIcon className="h-7 w-7" />
                  </td>
                  <td className=" px-3 py-4 text-sm text-gray-500">
                    {!editMode ? (
                      <span className="grow">{props.entry.info} </span>
                    ) : (
                      <span className="grow">
                        <textarea
                          id="info"
                          name="info"
                          required
                          onChange={dispatch.models_dEntry.setInfo}
                          defaultValue={props.entry.info}
                          className="w-full h-20 flex-grow block px-1 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                      </span>
                    )}
                  </td>
                  <td className="text-transparent float-right">testing123</td>
                </tr>
                <tr>
                  <td className=" px-3 py-4 grow-0 text-sm text-gray-500">
                    <LocationMarkerIcon className="h-7 w-7" />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {!editMode ? (
                      <span className="grow">
                        {props.entry.location.address}
                      </span>
                    ) : (
                      <span className="grow">
                        <input
                          id="address"
                          name="address"
                          type="address"
                          required
                          onChange={dispatch.models_dEntry.setAddress}
                          defaultValue={props.entry.location.address}
                          className="w-full grow appearance-none  px-1 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                      </span>
                    )}
                  </td>
                  <td className="text-transparent grow-0 float-right">
                    testing123
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap grow-0 px-3 py-4 text-sm text-gray-500">
                    <CalendarIcon className="h-7 w-7" />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="flex-grow">{props.entry.date}</span>
                  </td>
                  <td className="text-transparent grow-0 float-right">
                    testing123
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap grow-0 px-3 py-4 text-sm text-gray-500">
                    <ClockIcon className="h-7 w-7" />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="flex-grow">{props.entry.time}</span>
                  </td>
                  <td className="whitespace-nowrap grow-0 px-3 py-4 text-sm text-gray-500 float-right">
                    <button onClick={() => setEditMode(true)}>
                      <PencilIcon className="h-7 w-7 relative right-3" />
                    </button>
                  </td>
                </tr>
              </table>
              {editMode && (
                <div className="flex justify-center my-3 px-2 space-x-6">
                  <button
                    className="inline-flex justify-center w-full rounded-md border border-orange-500 shadow-sm px-1 py-2 bg-white text-base font-medium text-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black sm:text-sm"
                    onClick={() => setEditMode(false)}
                  >
                    Update
                  </button>
                  <button
                    className="inline-flex justify-center w-full rounded-md border border-orange-500 shadow-sm px-1 py-2 bg-white text-base font-medium text-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black sm:text-sm"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
              <Comps_misc_Modal
                message="This will delete entry data. Do you wish to continue?"
                open={modal}
                setOpen={setModal}
                actionCall={deleteEntry}
                route="/Logs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
