import React, { useEffect } from 'react';
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';

// import { RootState, Actions, dispatch, store } from '#src/models/store'

import { Comps_misc_placeholder } from '#src/Comps';

const defaultProps = {
  data: {
    date: '1/1/2022',
    time: '5:30:00',
    city: 'Portland',
    country: 'United States',
    lat: 0,
    lng: 0,
  },
  idKey: 'default',
} as unknown as {
  data: {
    date: string;
    time: string;
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  idKey?: string;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_layout_locTable = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  // useEffect(() => {

  // },[]);

  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)
   

  return (
    <div className="Comps_layout_locTable">
      <div className="mt-8 flex flex-col ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Time of Day
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                      Date: {props.data.date}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      City: {props.data.city}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                      
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      Country: {props.data.country}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                      Time: {props.data.time}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      Latitude: {props.data.lat}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                      
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      Longitude: {props.data.lng}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export class Comps_layout\locTable extends React.PureComponent<Props> {
// 	render() {
// 		const { countState } = this.props
// 		return <div>Comps_layout\locTable</div>
// 	}
// }

// const selection = store.select((models) => ({
//   total: models.cart.total,
//   eligibleItems: models.cart.wouldGetFreeShipping,
// }));
