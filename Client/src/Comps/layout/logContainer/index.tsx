import React, { useState } from 'react';

import Comps_Map_BaseMap from '#src/Comps/Map/BaseMap';
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
            {/* <Comps_Map_BaseMap location={props.entry.gps} mapSize={{ width: '100%', height: '50vh' }} zoom={8}/> */}
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <div className="border-t border-gray-200 px-1 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {!editMode ? (
                      <span className="flex-grow">{props.entry.title}</span>
                    ) : (
                      <span className="flex-grow">
                        <input
                          id="title"
                          name="title"
                          type="title"
                          required
                          onChange={dispatch.models_dEntry.setTitle}
                          defaultValue={props.entry.title}
                          className="w-full grow appearance-none block px-1 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                      </span>
                    )}
                    <span className="ml-4 flex-shrink-0">
                      <dt className="text-sm font-medium text-gray-500">
                        <button onClick={() => setModal(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 border-black"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </dt>
                    </span>
                  </dd>

                  <dt className="absolute inset-y-5 right-10"></dt>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {!editMode ? (
                      <span className="flex-grow">{props.entry.info} </span>
                    ) : (
                      <span className="flex-grow">
                        <textarea
                          id="info"
                          name="info"
                          required
                          onChange={dispatch.models_dEntry.setInfo}
                          defaultValue={props.entry.info}
                          className="w-full h-20 grow appearance-none block px-1 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                      </span>
                    )}
                    <span className="ml-4 flex-shrink-0">test</span>

                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {!editMode ? (
                      <span className="flex-grow">
                        {props.entry.location.address}
                      </span>
                    ) : (
                      <span className="flex-grow">
                        <input
                          id="address"
                          name="address"
                          type="address"
                          required
                          onChange={dispatch.models_dEntry.setAddress}
                          defaultValue={props.entry.location.address}
                          className="w-full grow appearance-none block px-1 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                      </span>
                    )}
                    <span className="ml-4 flex-shrink-0">test</span>

                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">{props.entry.date}</span>
                    <span className="ml-4 flex-shrink-0">test</span>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">{props.entry.time}</span>
                    <dt className="text-sm font-medium text-gray-500">
                      <button onClick={() => setEditMode(true)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </dt>
                  </dd>
                </div>
              </dl>
              {editMode && (
                <div className="flex justify-center my-3 space-x-6">
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
