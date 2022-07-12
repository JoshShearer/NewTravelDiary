import React, { useEffect } from 'react';
import Link from 'next/link';
import { Comps_Map_BaseMap } from '#src/Comps/Map/BaseMap';
import { Comps_layout_locTable } from '#src/Comps/layout/locTable';
import { Comps_layout_imageHandler } from '#src/Comps/layout/imageHandler';
import { Comps_misc_Spinner } from '#src/Comps/misc/Spinner';
import { putDataToDB } from '#src/api';
import isEmpty from 'lodash.isempty';


import { createStructuredSelector } from '#src/models/utils';
import { useSelector } from '#src/models/hooks';

import { RootState, Actions, dispatch, store } from '#src/models/store';

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};
const selector = createStructuredSelector({
  gps: (root) => root.models_Location.map.center,
  location: (root) => root.models_Location.location,
  entryData: (root) => root.models_dEntry.entryData,
  title: (root) => root.models_dEntry.tempTitle,
  info: (root) => root.models_dEntry.tempInfo,
});

export const Comps_layout_entryForm = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  // useEffect(() => {

  // },[]);

  const selected = useSelector((state) => selector(state, props));

  const titleHandler = (event) => {
    dispatch.models_dEntry.setTitle(event.target.value);
    localStorage.setItem('title', event.target.value);
  };

  const infoHandler = (event) => {
    dispatch.models_dEntry.setInfo(event.target.value);
    localStorage.setItem('info', event.target.value);
  };
  const logEntry = () => {
    // dispatch.models_dEntry.setNewEntry
    const newData = {
      title: selected.title,
      info: selected.info,
      date: getDate(),
      time: getTime(),
      gps: selected.gps,
      location: selected.location,
    };
    console.log("🚀 ~ file: index.tsx ~ line 57 ~ logEntry ~ newData", newData)
    putDataToDB(newData, selected.entryData);
  };

  var findDate = new Date();

  const wholetime = (seconds: number) => {
    if (seconds < 10) {
      return '0' + seconds;
    } else {
      return seconds;
    }
  };

  const getDate = () => {
    return (
      findDate.getMonth() +
      1 +
      '/' +
      findDate.getDate() +
      '/' +
      findDate.getFullYear()
    );
  };

  const getTime = () => {
    return (
      findDate.getHours() +
      ':' +
      wholetime(findDate.getMinutes()) +
      ':' +
      wholetime(findDate.getSeconds())
    );
  };

  return (
    <div className="Comps_layout_entryForm">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 object-none object-center">
          <form className="space-y-6" action="#" method="POST">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Journal Entry
            </h2>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  id="title"
                  name="title"
                  type="title"
                  required
                  onChange={titleHandler}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="info"
                className="block text-sm font-medium text-gray-700"
              >
                Share Your Thoughts...
              </label>
              <div className="mt-1">
                <textarea
                  id="info"
                  name="info"
                  required
                  onChange={infoHandler}
                  className="appearance-none whitespace-normal block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            {!isEmpty(selected.gps) ? (
            <Comps_Map_BaseMap location={selected.gps} mapSize={{ width: '100%', height: '25vh' }} zoom={8}/>
            ) : (
              <Comps_misc_Spinner />
          )}
            <Comps_layout_locTable
              data={Object.assign(
                selected.gps,
                selected.location,
                { date: getDate() },
                { time: getTime() }
              )}
            />
            <div>
              <h5 className="mt-6 text-center font-extrabold text-gray-900">
                Add some photos!
              </h5>
              <Comps_layout_imageHandler />
              <br />
              <Link href="/Logs">
                <button
                  type="submit"
                  onClick={logEntry}
                  className="w-full flex justify-center py-2 px-4 border border-orange-500 rounded-md shadow-sm text-sm font-medium text-orange-500 bg-white hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  // onClick={}
                >
                  Save Entry
                </button>
              </Link>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
